import FixoraImg from '../assets/Fixora.png';
import CinemazeImg from '../assets/Cinemaze.png';
import ExpenseFlowImg from '../assets/ExpenseFlow.png';

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
        title: "ExpenseFlow",
        description: "A financial dashboard for tracking expenses, managing budgets, and visualizing spending trends.",
        tags: ["React", "HTML", "CSS", "Javascript"],
        image: ExpenseFlowImg,
        link: "https://expense1001.netlify.app/",
        github: "https://github.com/vs-code06/New_ExpenseTracker"
    }
];
