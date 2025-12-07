import { render, screen } from '@testing-library/react';
import Experience from './Experience';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, style, className, ...props }) => <div className={className} style={style} {...props}>{children}</div>,
        h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
    },
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: () => 1,
    AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mock IntersectionObserver
window.IntersectionObserver = class IntersectionObserver {
    constructor() { }
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
};

test('renders experience section title', () => {
    render(<Experience />);
    const titleElement = screen.getByText(/Experience/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders all experience cards with correct content', () => {
    render(<Experience />);

    // Check for company names
    expect(screen.getByText('Cyber Labs')).toBeInTheDocument();
    expect(screen.getByText('Neon Systems')).toBeInTheDocument();
    expect(screen.getByText('Future Corp')).toBeInTheDocument();

    // Check for role titles
    expect(screen.getByText('Senior Frontend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
});

test('renders mission objectives and key achievements', () => {
    render(<Experience />);

    // Check for section headers within cards
    const missionHeaders = screen.getAllByText(/Mission/i);
    expect(missionHeaders.length).toBeGreaterThan(0);

    const achievementHeaders = screen.getAllByText(/Achievements/i);
    expect(achievementHeaders.length).toBeGreaterThan(0);

    // Check for specific content from data/experience.js
    expect(screen.getByText(/Built performant React\+D3 dashboards/i)).toBeInTheDocument();
});

test('renders tech stack tags', () => {
    render(<Experience />);

    // Check for some tech tags
    const reactTags = screen.getAllByText('React');
    expect(reactTags.length).toBeGreaterThan(0);
    expect(screen.getByText('D3')).toBeInTheDocument();
    expect(screen.getByText('Performance')).toBeInTheDocument();
});
