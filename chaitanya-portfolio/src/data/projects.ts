interface Project {
    title: string;
    description: string;
    highlights: string[];
    techStack: string[];
    githubRepo?: string
};

const projects: Project[] = [
    {
        title: "Joycart",
        description: "A frontend e-commerce application with cart, orders, and product management.",
        highlights: [
            "Cart management with Redux for real-time updates",
            "Integrated open-source backend using Axios",
            "Responsive UI optimized for mobile and desktop"
        ],
        techStack: [
            "React", "Vite", "JavaScript", "Redux", "Axios", "React Router", "Vitest", "RTL"
        ],
        githubRepo: "https://github.com/sai-chaitanya-77/React"
    },
    {
        title: "Full Stack Authentication App",
        description: "A secure authentication system with protected routes and email workflows.",
        highlights: [
            "Token-based authentication with HTTP-only cookies",
            "Middleware-based route protection",
            "Password reset and email verification"
        ],
        techStack: [
            "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "Nodemailer"
        ],
        githubRepo: "https://github.com/sai-chaitanya-77/Next"
    }
];

export default projects;

