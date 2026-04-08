import FixoraImg from '../assets/Fixora.png';
import CinemazeImg from '../assets/Cinemaze.png';
import CivicFlowImg from '../assets/CivicFlow.png';

export const projects = [
    {
        id: 1,
        title: "Fixora",
        description: "A full-stack home-services platform for hiring trusted providers and managing bookings.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        image: FixoraImg,
        link: "https://fixora-frontend-zeta.vercel.app/",
        github: "https://github.com/vs-code06/fixora-frontend"
    },
    {
        id: 2,
        title: "Cinemaze",
        description: "A movie discovery app with trending lists, details, and genre filters powered by TMDB API.",
        tags: ["React", "Supabase", "TMDB API", "CSS"],
        image: CinemazeImg,
        link: "https://cinemaze-pi.vercel.app/",
        github: "https://github.com/vs-code06/Cinemaze"
    },
    {
        id: 3,
        title: "CivicFlow",
        description: "Developed a full-stack SaaS platform for urban waste management, integrating an AI microservice for real-time insights and automated reporting. Features include AI-driven insights, real-time complaint tracking with intelligent task allocation, secure multi-role JWT authentication, and a dynamic monitoring dashboard.",
        tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "FastAPI", "LangChain"],
        image: CivicFlowImg,
        link: "https://civicflow-mu.vercel.app/",
        github: "https://github.com/vs-code06/CivicFlow-backend"
    }
];
