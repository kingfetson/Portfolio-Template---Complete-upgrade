// config.js - Easy Portfolio Configuration
// Edit this file to customize your portfolio without touching HTML!

const portfolioConfig = {
    // ===== PERSONAL INFORMATION =====
    personal: {
        name: "Insert Your Name",
        firstName: "Your",
        lastName: "Name",
        title: "Frontend Developer",
        tagline: "Turning complex problems into elegant solutions.",
        description: "I'm a Frontend Developer based in New York, specializing in React, Vue, and modern web technologies. Currently focused on building accessible, user-centered digital experiences.",
        email: "your.email@example.com",
        location: "New York, USA",
        availableForWork: true
    },

    // ===== STATS (Hero Section) =====
    stats: [
        { number: "5+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "100%", label: "Client Satisfaction" }
    ],

    // ===== SOCIAL LINKS =====
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        instagram: "", // Leave empty to hide
        dribbble: ""   // Leave empty to hide
    },

    // ===== SKILLS =====
    skills: [
        {
            category: "Frontend Development",
            icon: "fa-layer-group",
            items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS"]
        },
        {
            category: "Backend & Database",
            icon: "fa-server",
            items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
        },
        {
            category: "Tools & Others",
            icon: "fa-tools",
            items: ["Git/GitHub", "Figma", "Docker", "AWS", "Agile", "CI/CD"]
        }
    ],

    // ===== PROJECTS =====
    projects: [
        {
            title: "E-Commerce Dashboard",
            description: "Built a comprehensive analytics dashboard for an e-commerce platform. Tracks sales, inventory, and customer behavior in real-time.",
            metrics: ["30% Faster Loading", "$50K Revenue Impact"],
            tools: ["React", "Node.js", "MongoDB"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/yourusername/ecommerce-dashboard",
            live: "https://ecommerce-demo.com"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            metrics: ["10K+ Active Users", "4.8/5 App Store Rating"],
            tools: ["Vue.js", "Firebase", "Tailwind"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/yourusername/task-app",
            live: "https://task-app-demo.com"
        },
        {
            title: "Finance Tracker",
            description: "Personal finance tracking application with budget planning, expense categorization, and visual spending reports.",
            metrics: ["5K+ Downloads", "95% User Retention"],
            tools: ["React Native", "Express", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/yourusername/finance-tracker",
            live: "https://finance-tracker-demo.com"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with 7-day forecasts, location-based data, and interactive weather maps.",
            metrics: ["100K+ API Calls/Day", "50+ Cities Supported"],
            tools: ["JavaScript", "OpenWeather API", "Chart.js"],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/yourusername/weather-app",
            live: "https://weather-demo.com"
        },
        {
            title: "Portfolio Generator",
            description: "Automated portfolio website generator that creates custom portfolios from JSON configuration files.",
            metrics: ["500+ Portfolios Created", "Open Source"],
            tools: ["Next.js", "TypeScript", "Vercel"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/yourusername/portfolio-gen",
            live: "https://portfolio-gen-demo.com"
        },
        {
            title: "Blog Platform",
            description: "Full-featured blog platform with markdown support, SEO optimization, and analytics dashboard.",
            metrics: ["1M+ Page Views", "50+ Active Writers"],
            tools: ["Next.js", "Prisma", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            github: "https://github.com/yourusername/blog-platform",
            live: "https://blog-demo.com"
        }
    ],

    // ===== THEME COLORS =====
    theme: {
        primary: "#38bdf8",
        accent: "#10b981",
        gradient: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)"
    }
};
