// Portfolio Data Configuration — Refael Robinov
// Cutting-Edge .NET 10, Agentic AI & Modern Full-Stack Showcase

const PORTFOLIO_DATA = {
    profile: {
        name: "Refael Robinov",
        title: "Senior Backend & AI-Augmented Full Stack Engineer",
        subtitle: "Architecting high-scale distributed systems, .NET 10 microservices, AI agentic workflows, and high-performance cloud platforms.",
        bio: "Senior Software Engineer with 5+ years of production experience engineering robust backend architectures, distributed microservices, and modern web applications. Championing cutting-edge .NET 10, full-stack reactive design, and AI-augmented velocity using Claude Code, Codex, and Antigravity Agents.",
        location: "Be'er-Sheva, Israel",
        email: "rafi20080@gmail.com",
        phone: "052-7030595",
        github: "https://github.com/raful222",
        linkedin: "https://linkedin.com/in/refael-robinov",
        status: "Open to Senior Roles & High-Impact Opportunities",
        gpa: "86.7 (BSc Software Engineering)"
    },
    
    stats: [
        { value: "5+", label: "Years Experience" },
        { value: "8+", label: "Live Cloud Platforms" },
        { value: "10M+", label: "Daily Data Transactions" },
        { value: "18+", label: "Production & AI Systems" }
    ],

    skillCategories: [
        {
            name: "Backend & Distributed Systems",
            icon: "server",
            skills: [
                { name: "C# / C# 13", level: 96 },
                { name: ".NET Core 6-10 / ASP.NET", level: 96 },
                { name: "Microservices & Event-Driven Architecture", level: 92 },
                { name: "RESTful Web APIs & WCF", level: 95 },
                { name: "Redis Caching & Pub/Sub", level: 90 },
                { name: "SQL Server & Query Optimization", level: 92 },
                { name: "Natural / Mainframe Enterprise Bridges", level: 82 }
            ]
        },
        {
            name: "AI & Agentic Engineering",
            icon: "bot",
            skills: [
                { name: "Claude Code & Agentic Workflows", level: 96 },
                { name: "Antigravity Autonomous Pair Programming", level: 95 },
                { name: "OpenAI Codex & Tool Calling APIs", level: 94 },
                { name: "Deep Learning (PyTorch CNNs & Computer Vision)", level: 88 },
                { name: "Automated Workflows & Prompt Architecture", level: 94 },
                { name: "MLOps & Algorithm Data Pipelines", level: 88 }
            ]
        },
        {
            name: "Frontend, 3D & Cloud DevOps",
            icon: "layout",
            skills: [
                { name: "Angular (v17-19+)", level: 92 },
                { name: "Next.js 15 & React", level: 90 },
                { name: "Three.js & WebGL 3D Visuals", level: 88 },
                { name: "TypeScript / Modern JavaScript", level: 92 },
                { name: "PWA (Service Workers & Web Audio)", level: 92 },
                { name: "Docker & CI/CD Pipelines", level: 88 }
            ]
        }
    ],

    aiWorkflows: [
        {
            title: "Agentic Software Engineering",
            tech: "Claude Code, Antigravity AI, Codex",
            desc: "Leveraging multi-agent systems and pair-programming autonomous agents for rapid prototyping, architecture refactoring, and sub-second bug triaging.",
            icon: "sparkles"
        },
        {
            title: "Multi-Agent Systems & Autonomous QA",
            tech: "CrewAI, Gemini 3.1 Flash, Discord Automation",
            desc: "Architecting autonomous multi-agent teams for self-healing software, live website diagnostic probes, automated test generation, and pull request patching.",
            icon: "bot"
        },
        {
            title: "Deep Learning & Computer Vision",
            tech: "PyTorch, CNN, Tensor Processing",
            desc: "Trained convolutional neural networks for geometric chart pattern detection (Cup & Handle) and statistical extrema clustering in financial markets.",
            icon: "brain-circuit"
        },
        {
            title: "Workflow Automation & LLM APIs",
            tech: "Tool Calling, RAG, Prompt Architecture",
            desc: "Integrating intelligent reasoning APIs, structured function calling, and automated testing pipelines into enterprise software ecosystems.",
            icon: "zap"
        }
    ],

    projects: [
        {
            id: "try-invest",
            title: "TryInvest — Professional Investment & Portfolio Platform",
            category: "ai",
            tag: "FinTech & Investment",
            featured: true,
            description: "Advanced investment and portfolio management platform offering market analysis, real-time portfolio tracking, risk-adjusted metrics, and automated strategy simulation.",
            longDesc: "TryInvest is an end-to-end investment ecosystem providing retail and institutional users with advanced financial modeling, real-time PnL tracking, asset allocation backtesting, and automated risk management.",
            tech: ["C# .NET 10", "Angular", "Web API", "Chart.js", "SQL Server", "Financial Modeling"],
            github: "", // Private Repo
            demo: "https://tryinvest.co.il/",
            status: "Live in Production",
            badge: "Flagship FinTech (tryinvest.co.il)",
            icon: "dollar-sign"
        },
        {
            id: "chess-td-3d",
            title: "Chess TD 3D — Real-Time Strategy & Tower Defense",
            category: "games",
            tag: "3D RTS & Unity Parity",
            featured: true,
            description: "Full-scale 3D Chess Tower Defense game combining classical chess tactics with modern tower defense mechanics, procedural waves, animated 3D hero rigs, and real-time WebSockets multiplayer.",
            longDesc: "Engineered with Three.js WebGL and Vite on the client, backed by a Node.js WebSocket battle server. Features automated GLTF asset optimization, LOD pipelines, attack window synchronization, economy simulation, and cross-engine Unity parity.",
            tech: ["Three.js", "WebGL", "Node.js WebSockets", "Vite", "GLTF Rigs", "Unity Engine Parity", "Audio FX"],
            github: "https://github.com/raful222",
            demo: "#",
            status: "Complete 3D RTS Game",
            badge: "3D RTS Game Engine",
            icon: "crown"
        },
        {
            id: "chidat-hayom",
            title: "חידת היום (Chidat HaYom) — Daily Expert Logic & Quant Riddles",
            category: "games",
            tag: "Logic & Quant Teasers",
            featured: true,
            description: "Interactive daily riddle & brain teaser platform with 25+ Expert puzzles (quant interviews, mathematical induction, spatial riddles), Wordle-style viral streak sharing, and RTL neon dark UI.",
            longDesc: "Full-scale multi-platform puzzle application built with Flutter & Web. Features 25 curated interview and quant riddles, real-time timer with hint penalties, shake animations on error, confetti celebrations on solve, zero-spoiler WhatsApp share cards, and deep logical solution breakdowns.",
            tech: ["Flutter", "Dart", "Web PWA", "JavaScript", "RTL / Hebrew", "Viral Sharing", "Animations"],
            github: "https://github.com/raful222",
            demo: "#",
            status: "Flutter & Web App",
            badge: "Daily Riddles & Logic",
            icon: "help-circle"
        },
        {
            id: "valdoria-iron-fiefs",
            title: "Valdoria: Iron Fiefs (ולדוריה: נחלות הברזל)",
            category: "games",
            tag: "Real-Time Medieval MMO Strategy",
            featured: true,
            description: "Full-scale Real-Time Medieval MMO Strategy game inspired by Age of Empires 2. Features tactical procedural world maps, 2.5D village evolution, animated troop march vectors, noble conquest mechanics, alliance diplomacy, and multi-language support (6 languages).",
            longDesc: "A deep medieval multiplayer strategy experience. Engineered with React, TypeScript, and Vite on the client, backed by a Node.js API with Prisma ORM. Includes AoE2-style terrain shaders, real-time troop march trajectories, village loyalty conquest system, tribe alliances with territorial map glowing, wandering merchant exchange, and multi-language RTL support.",
            tech: ["React", "TypeScript", "Vite", "Node.js", "Prisma ORM", "Tailwind CSS", "WebSockets", "RTL / i18n (6 Languages)"],
            github: "https://github.com/raful222",
            demo: "#",
            status: "Complete MMO Strategy Game",
            badge: "Medieval MMO Strategy",
            icon: "shield"
        },
        {
            id: "discord-qa-bot",
            title: "Autonomous QA & Remediation Agent (Discord Bot)",
            category: "ai",
            tag: "Autonomous Multi-Agent AI",
            featured: true,
            description: "Multi-agent autonomous QA and code remediation bot powered by CrewAI and Google Gemini LLM. Proactively audits live production services, runs technical & UI test suites, generates remediation reports, and applies verified automated fixes with rollback safeguards.",
            longDesc: "Integrates CrewAI multi-agent processes with Google Gemini Flash models. Provides Discord slash commands (!test-all, !test-ui, !test-tech, !apply-fixes, !revert-fixes), scraping web tools, strict safety blacklists, and automated file patch generation with timestamped backup directories.",
            tech: ["Python", "CrewAI", "Google Gemini 3.1 Flash", "Discord.py", "Docker", "Autonomous Agents"],
            github: "https://github.com/raful222/discord-qa-bot",
            demo: "https://github.com/raful222/discord-qa-bot",
            status: "Autonomous Agent System",
            badge: "CrewAI & Gemini Autonomous Agent",
            icon: "bot"
        },
        {
            id: "vbook",
            title: "VBOOK — Smart Booking & Appointment System",
            category: "web",
            tag: "Live SaaS Platform",
            featured: true,
            description: "Production calendar and appointment reservation web application with sub-second page loads, real-time availability sync, conflict prevention, and automated reminder webhooks.",
            longDesc: "Full-scale booking SaaS platform engineered with modern reactive architecture, high concurrency calendar synchronization, and automated notification pipelines.",
            tech: ["Vite", "Modern JavaScript", "REST API", "Docker", "Responsive UI", "SaaS"],
            github: "", // Private Repo
            demo: "https://vbookapp.co.il/",
            status: "Live in Production",
            badge: "Live SaaS (vbookapp.co.il)",
            icon: "calendar"
        },
        {
            id: "mt-algo",
            title: "MT-Algo — Autonomous ML Trading System",
            category: "ai",
            tag: "AI & Algorithmic Trading",
            featured: true,
            description: "Autonomous trading engine combining a C# .NET 10 backend with a Python AI computer vision microservice. Detects market structures using CNNs (Cup & Handle pattern) and K-Means/GMM clustering for dynamic Support & Resistance discovery with real-time IBKR integration.",
            longDesc: "A complete autonomous trading architecture: .NET 10 manages trade orchestration and IBKR execution, while Python handles 2D chart tensor processing with Deep Learning CNN models to confirm geometric setups before execution.",
            tech: ["C#", ".NET 10", "Python", "Computer Vision (CNN)", "SQL Server", "Angular", "WebSockets"],
            github: "", // Private Repo
            demo: "https://mtalgo.duckdns.org",
            status: "Live Cloud Service",
            badge: "Live Cloud (mtalgo.duckdns.org)",
            icon: "trending-up"
        },
        {
            id: "ai-ml-learning-hub",
            title: "AI & Machine Learning Interactive Learning Hub",
            category: "ai",
            tag: "EdTech & Interactive AI",
            featured: true,
            description: "Full-scale interactive AI/ML learning platform in Next.js & React featuring 18 modules, interactive visualizers for KNN, GMM, CNN and GenAI, automated exams, and flashcards.",
            longDesc: "Engineered with Next.js App Router, Tailwind CSS, and custom interactive algorithm visualizers allowing learners to experiment with clustering, convolutional filters, and neural networks in real time.",
            tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ML Visualizations", "Python"],
            github: "https://github.com/raful222/ai-ml-learning",
            demo: "https://github.com/raful222/ai-ml-learning",
            status: "Open Source AI Learning Platform",
            badge: "Public AI Platform",
            icon: "brain-circuit"
        },
        {
            id: "alefbet",
            title: "הרפתקת א'-ב' (AlefBet Kids Adventure)",
            category: "games",
            tag: "Educational PWA & Audio",
            featured: true,
            description: "Production offline-first PWA for kids aged 3–6 with 193 recorded Hebrew voice tracks, interactive phonics challenges, letter tracing with canvas coverage calculation, and zero-latency performance.",
            longDesc: "A zero-latency, offline Progressive Web App with custom synthesized Hebrew voice recognition prompts, parental analytics dashboard, and kid-friendly gamified progression.",
            tech: ["PWA", "JavaScript", "HTML5 Canvas", "Web Audio API", "Service Workers", "CSS3 Animations"],
            github: "", // Private Repo
            demo: "https://alefbet-mt.duckdns.org",
            status: "Live in Production",
            badge: "Live App (alefbet-mt.duckdns.org)",
            icon: "sparkles"
        },
        {
            id: "beiknishta",
            title: "Beiknishta (בי כנישתא) — Community Management SaaS",
            category: "systems",
            tag: "Cloud Community Platform",
            featured: true,
            description: "Comprehensive cloud management and engagement platform designed for community centers and synagogues, managing members, recurring pledges, event schedules, and digital aliyot.",
            longDesc: "Full-scale multi-tenant management system featuring automated donation billing, prayer time scheduling algorithms, member directory, and financial audit reports.",
            tech: ["C# .NET 10", "Angular", "SQL Server", "REST API", "Payment Integration"],
            github: "", // Private Repo
            demo: "https://beiknishta.duckdns.org",
            status: "Live Cloud Platform",
            badge: "Live Cloud (beiknishta.duckdns.org)",
            icon: "building"
        },
        {
            id: "pulsebe",
            title: "PulseBE — High-Throughput Microservice Bus",
            category: "backend",
            tag: "High-Scale Backend",
            featured: true,
            description: "High-performance backend event engine and microservice gateway designed for low-latency message routing, async caching pipelines, and distributed queue handling.",
            longDesc: "Engineered to deliver high throughput, Redis cache hydration, and ultra-fast RESTful API endpoints under high concurrency.",
            tech: [".NET 10", "Redis", "C#", "Microservices Architecture", "Docker", "REST API"],
            github: "", // Private Repo
            demo: "https://pulsebe.duckdns.org",
            status: "Live Microservice",
            badge: "Live Backend (pulsebe.duckdns.org)",
            icon: "zap"
        },
        {
            id: "report-stock-analysis",
            title: "ReportStockAnalysis — Financial Intelligence Engine",
            category: "ai",
            tag: "Financial Analytics",
            featured: true,
            description: "Automated equities analysis and reporting platform pulling live market feeds, computing fundamental DCF & technical momentum indicators, and generating executive investment summaries.",
            longDesc: "Automated equities screening pipeline computing DCF estimations, valuation ratios, momentum indicators, and generating structured financial reports for institutional and private investors.",
            tech: ["Python", "Pandas", "FastAPI", "Financial APIs", "Data Visualization"],
            github: "", // Private Repo
            demo: "#",
            status: "Analytics Microservice (Offline)",
            badge: "Equities Analytics Engine",
            icon: "bar-chart-2"
        },
        {
            id: "idle-for-you",
            title: "IdleForYou — 3D Tower Economy Simulation Game",
            category: "games",
            tag: "3D Game Engine & Sim",
            featured: true,
            description: "Deep incremental tower economy simulation game. Features multi-tier business progression, automated worker AI, custom 3D low-poly character rendering, and mathematical economic balance modeled in Python.",
            longDesc: "Features custom 3D WebGL scenes, procedural floor upgrades, automated offline revenue calculations, and balanced pacing modeled through Python Monte-Carlo economic simulations.",
            tech: ["Three.js", "WebGL", "Python (Sim Engine)", "JavaScript ES6+", "HTML5 Canvas"],
            github: "https://github.com/raful222/IdleForYou",
            demo: "#",
            status: "In Active Development",
            badge: "3D Game Engine",
            icon: "gamepad-2"
        },
        {
            id: "task-management-api",
            title: "Enterprise Task Management API",
            category: "backend",
            tag: "Clean Architecture",
            featured: false,
            description: "High-performance enterprise task orchestration RESTful API with tiered permission models, audit trails, dependency tracking, and pagination.",
            longDesc: "Clean Architecture implementation in ASP.NET Core with Repository pattern, Swagger documentation, and automated unit testing.",
            tech: ["C#", ".NET 10 API", "Entity Framework", "SQL Server", "Swagger"],
            github: "https://github.com/raful222/TaskManagementAPI",
            demo: "https://github.com/raful222/TaskManagementAPI",
            status: "Open Source",
            badge: "Clean Architecture (Public Code)",
            icon: "check-square"
        },
        {
            id: "coffee-shop-online",
            title: "GTR CoffeeShop Online — E-Commerce Platform",
            category: "web",
            tag: "E-Commerce System",
            featured: false,
            description: "Upgraded digital ordering and menu management system with real-time cart calculations, responsive catalog browsing, and checkout workflows.",
            longDesc: "Complete e-commerce platform built in ASP.NET and C# featuring product catalog customization, dynamic basket pricing, and clean database persistence.",
            tech: ["ASP.NET / C#", "JavaScript", "HTML5 / SCSS", "SQL Database"],
            github: "https://github.com/raful222/CoffeeShopOnline",
            demo: "https://github.com/raful222/CoffeeShopOnline",
            status: "Open Source",
            badge: "E-Commerce (Public Code)",
            icon: "coffee"
        },
        {
            id: "logical-math-study-hub",
            title: "Logical Math & Reasoning Hub — פורטל חשיבה לוגית",
            category: "web",
            tag: "EdTech & Logic Portal",
            featured: false,
            description: "Interactive mathematical reasoning and exam preparation portal for logic, set theory, graph theory, and combinatorics. Features KaTeX formula typesetting, step-by-step proofs, and diagnostic quizzes.",
            longDesc: "Engineered with modern RTL responsive architecture, KaTeX LaTeX math typesetting, real-time quiz validation, step-by-step mathematical proofs, and categorical filter navigation.",
            tech: ["JavaScript (ES6+)", "KaTeX (LaTeX)", "HTML5 / CSS3", "RTL Design", "Interactive Quizzes"],
            github: "",
            demo: "#",
            status: "Live Study Portal",
            badge: "Interactive Exam Portal",
            icon: "calculator"
        },
        {
            id: "lumina-jewelry-ai",
            title: "Lumina — AI Bespoke Luxury Jewelry Studio",
            category: "web",
            tag: "Next.js 15 AI Studio",
            featured: false,
            description: "Luxury bespoke jewelry digital studio featuring an AI-assisted customization studio, transparent real-time pricing calculator based on live precious metal and diamond indices, and obsidian-luxe responsive aesthetics.",
            longDesc: "Built on Next.js 15 App Router, React 19, Tailwind CSS, and TypeScript. Features transparent cost breakdowns, high-resolution interactive showcase gallery, and dynamic gemstone configuration.",
            tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Dynamic Pricing Model"],
            github: "",
            demo: "#",
            status: "Studio Platform",
            badge: "Next.js 15 Luxury Studio",
            icon: "gem"
        },
        {
            id: "do-not-copy",
            title: "DoNotCopy — Exam Security & Anti-Plagiarism System",
            category: "systems",
            tag: "Cyber Security & Web API",
            featured: false,
            description: "Academic examination management and plagiarism prevention platform built as B.Sc. graduation project at SCE, leveraging C# Web API to monitor integrity and eliminate unauthorized copying.",
            longDesc: "Engineered with ASP.NET Core Web API, entity relationship integrity checks, automated submission diffing, and audit logging to maintain exam confidentiality and prevent student collusion.",
            tech: ["C#", "ASP.NET Core Web API", "SQL Server", "Cyber Security", "RESTful API"],
            github: "https://github.com/raful222/DoNotCopy",
            demo: "https://do-not-copy.vercel.app",
            status: "B.Sc. Graduation Project",
            badge: "Exam Security System",
            icon: "shield-check"
        },
        {
            id: "cyber-recon-game",
            title: "Cyber Defense: Terminal Defense",
            category: "games",
            tag: "Playable Canvas Game",
            featured: false,
            description: "Interactive in-browser cybersecurity tactical game where players defend simulated server firewalls against DDoS, SQL injections, and XSS exploits.",
            longDesc: "Play directly in the browser! Real-time collision detection, particle explosions, dynamic threat waves, and retro synth design.",
            tech: ["JavaScript (ES6+)", "HTML5 Canvas", "WebGL 3D Background", "Web Audio API"],
            github: "",
            demo: "#game-modal",
            isPlayable: true,
            status: "Playable Right Now",
            badge: "Interactive Mini-Game",
            icon: "swords"
        }
    ],

    experience: [
        {
            period: "2025 – Present",
            role: "Full Stack Software Developer",
            company: "Israel Tax Authority (Sha'am)",
            location: "Jerusalem / Hybrid",
            tag: "Government Scale",
            highlights: [
                "Engineered robust backend systems for high-scale national traffic, focusing on micro-latency, high reliability, and data integrity.",
                "Modernized critical business workflows by bridging .NET 10 / .NET Core, Angular (v17–19), and Redis cache layers with core legacy mainframe frameworks.",
                "Led architecture of key service modules, optimizing data throughput and reducing processing bottlenecks.",
                "Championed code quality, agile CI/CD practices, and strict peer code reviews."
            ],
            tech: [".NET 10", "Angular 19", "Redis", "C#", "SQL", "Natural / Mainframe", "Agile"]
        },
        {
            period: "2021 – Jan 2025",
            role: "Backend Developer",
            company: "Qualish Ltd",
            location: "Omer, Israel",
            tag: "Enterprise SaaS",
            highlights: [
                "Architected end-to-end Web APIs, database schemas, and microservice endpoints in C# .NET Core 6.",
                "Integrated multi-provider payment gateways, billing reconciliation, and real-time event notifications.",
                "Engineered dynamic data visualization pipelines presenting live financial KPI charts to executive stakeholders.",
                "Streamlined customer onboarding workflows, cutting database latency and improving UX."
            ],
            tech: ["C#", ".NET Core 6", "RESTful Web APIs", "SQL Server", "Payment Systems", "WebSockets"]
        }
    ],

    education: [
        {
            degree: "B.Sc. in Software Engineering",
            institution: "SCE - Shamoon College of Engineering, Be'er-Sheva",
            period: "2020 – 2023",
            note: "GPA: 86.7 | Specialization in Cyber Security",
            badge: "Academic Honors (86.7 GPA)"
        },
        {
            degree: "Automating Success & AI Certification",
            institution: "INT College — Institute of Innovation & Technology",
            period: "2026",
            note: "Industry-standard AI automation, Prompt Engineering & Intelligent Workflow Systems (40 Academic Hours)",
            badge: "AI Certified"
        },
        {
            degree: "Advanced Angular 19 & .NET 8-10 Masterclasses",
            institution: "John Bryce",
            period: "2025",
            note: "Cutting-edge Enterprise Full Stack Patterns & Architecture"
        },
        {
            degree: "Networking & Cyber Security Certification",
            institution: "Net4U College",
            period: "2019 – 2020",
            note: "Deep TCP/IP, Penetration Testing & Defensive Security"
        }
    ]
};
