import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CyberLattice({ count = 70, connectionDistance = 3.5 }) {
  // Initialize particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      temp.push({
        pos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        )
      });
    }
    return temp;
  }, [count]);

  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  const linesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    // Maximum possible lines = count * (count - 1) / 2
    // We allocate a large enough buffer.
    const maxLines = count * count;
    const positions = new Float32Array(maxLines * 6); // 2 points * 3 coords
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    const { mouse, viewport } = state;

    // Mouse tracking in 3D space (approximate)
    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;

    let lineIndex = 0;
    const positions = pointsGeometry.attributes.position.array;
    const linePositions = linesGeometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const p = particles[i];

      // Movement
      p.pos.add(p.vel);

      // Interaction: Gentle attraction to mouse
      const dx = targetX - p.pos.x;
      const dy = targetY - p.pos.y;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);

      if (distToMouse < 4) {
        p.pos.x += dx * 0.005;
        p.pos.y += dy * 0.005;
      }

      // Bouncing logic
      if (p.pos.x > 10 || p.pos.x < -10) p.vel.x *= -1;
      if (p.pos.y > 10 || p.pos.y < -10) p.vel.y *= -1;
      if (p.pos.z > 5 || p.pos.z < -5) p.vel.z *= -1;

      // Update point geometric data
      positions[i * 3] = p.pos.x;
      positions[i * 3 + 1] = p.pos.y;
      positions[i * 3 + 2] = p.pos.z;

      // Check connections
      for (let j = i + 1; j < count; j++) {
        const p2 = particles[j];
        const dist = p.pos.distanceTo(p2.pos);

        if (dist < connectionDistance) {
          // Add line
          linePositions[lineIndex * 3] = p.pos.x;
          linePositions[lineIndex * 3 + 1] = p.pos.y;
          linePositions[lineIndex * 3 + 2] = p.pos.z;

          linePositions[lineIndex * 3 + 3] = p2.pos.x;
          linePositions[lineIndex * 3 + 4] = p2.pos.y;
          linePositions[lineIndex * 3 + 5] = p2.pos.z;

          lineIndex += 2;
        }
      }
    }

    pointsGeometry.attributes.position.needsUpdate = true;
    linesGeometry.setDrawRange(0, lineIndex);
    linesGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <points geometry={pointsGeometry}>
        <pointsMaterial
          size={0.15}
          color="#00f2ff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial
          color="#00ff88"
          transparent
          opacity={0.15}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-bg">


      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <fog attach="fog" args={['#000000', 5, 25]} />
        <CyberLattice />
      </Canvas>
    </div>
  );
}
