// Portfolio Data Configuration — Refael Robinov
// Cutting-Edge .NET 10, Agentic AI & Modern Full-Stack Showcase

const TRANSLATIONS = {
    "en": {
        "nav": {
            "projects": "Projects",
            "skills": "Skills",
            "architecture": "Architecture",
            "experience": "Experience",
            "about": "AI & Education",
            "contact": "Contact",
            "cvBtn": "CV (PDF)",
            "cvEn": "English Resume (PDF)",
            "cvHe": "Hebrew Resume (PDF)",
            "letsTalk": "Let's Talk",
            "langBtn": "עברית"
        },
        "hero": {
            "status": "Available for Senior Roles & High-Impact Projects",
            "greeting": "Hi, I'm",
            "name": "Refael Robinov",
            "subtitle": "Senior Backend & Full Stack Engineer",
            "bio": "Architecting high-scale distributed systems, high-throughput APIs, and intelligent web applications. 5+ years of production experience in mission-critical environments.",
            "btnExplore": "Explore Projects & Games",
            "btnCv": "Download CV (PDF)",
            "btnContact": "Get In Touch",
            "btnMiniGame": "Launch Mini-Game"
        },
        "stats": [
            {
                "value": "5+",
                "label": "Years Experience"
            },
            {
                "value": "8+",
                "label": "Live Cloud Platforms"
            },
            {
                "value": "10M+",
                "label": "Daily Data Transactions"
            },
            {
                "value": "19+",
                "label": "Production & AI Systems"
            }
        ],
        "projectsHeader": {
            "subtitle": "// PORTFOLIO ARTIFACTS & EXPERIMENTS",
            "title": "Featured Projects, Systems & Games",
            "filters": {
                "all": "All Works",
                "ai": "AI & Trading",
                "backend": "Backend & Scale",
                "systems": "Cyber & Systems",
                "games": "Games & Interactive",
                "web": "Web & Full Stack"
            },
            "searchPlaceholder": "Search tech or keyword...",
            "details": "Details",
            "liveDemo": "Live Demo",
            "playRiddle": "Play Riddle",
            "playGame": "Play Game",
            "code": "Code",
            "privateSystem": "Private System"
        },
        "skillsHeader": {
            "subtitle": "// TECHNICAL EXPERTISE",
            "title": "Core Engineering Stack"
        },
        "architecture": {
            "subtitle": "// DISTRIBUTED SYSTEMS & SYSTEM DESIGN",
            "title": "High-Throughput Architecture & Production Scale",
            "layer1Title": "Client & Edge Presentation",
            "layer1Desc": "Angular 19, Next.js 15, PWA offline-first, Three.js WebGL rendering, and sub-second reactive views.",
            "layer1Pill": "Client Tier",
            "layer2Title": "High-Scale API Gateway",
            "layer2Desc": "ASP.NET Core & .NET 10 microservices, JWT authentication, rate limiting, and RESTful routing.",
            "layer2Pill": "Gateway & Ingestion",
            "layer3Title": "Distributed Cache & Events",
            "layer3Desc": "Redis In-Memory caching, Pub/Sub event streaming, WebSockets broadcast, and sub-5ms latency pipelines.",
            "layer3Pill": "Low-Latency Memory",
            "layer4Title": "Enterprise Persistence & Bridges",
            "layer4Desc": "SQL Server with optimized indexed queries, Mainframe / Natural legacy connectors, and background AI workers.",
            "layer4Pill": "Persistence & Bridges",
            "metrics": [
                {
                    "val": "<50ms",
                    "label": "Mean API Response Latency"
                },
                {
                    "val": "99.99%",
                    "label": "Production System Uptime"
                },
                {
                    "val": "10M+",
                    "label": "Daily Data Records Processed"
                },
                {
                    "val": "Zero-Loss",
                    "label": "Fault-Tolerant Failover & Audits"
                }
            ]
        },
        "experienceHeader": {
            "subtitle": "// CAREER TIMELINE",
            "title": "Professional Experience"
        },
        "aiHeader": {
            "subtitle": "// INTELLIGENT AGENTS & ACADEMIA",
            "title": "AI Workflows & Education",
            "workflowsTitle": "AI-Augmented Engineering Paradigms",
            "educationTitle": "Education & Certifications"
        },
        "contactHeader": {
            "subtitle": "// GET IN TOUCH",
            "title": "Let's build something exceptional.",
            "desc": "Whether you are looking for a senior backend architect, high-throughput systems developer, or exploring innovative tech partnerships — feel free to reach out directly.",
            "sendEmail": "Send Direct Email",
            "callPhone": "Call Directly"
        },
        "footer": "© 2026 Refael Robinov. Engineered with precision, modern WebGL, and clean code."
    },
    "he": {
        "nav": {
            "projects": "פרויקטים",
            "skills": "מיומנויות",
            "architecture": "ארכיטקטורה",
            "experience": "ניסיון",
            "about": "AI והשכלה",
            "contact": "צור קשר",
            "cvBtn": "קו\"ח (PDF)",
            "cvEn": "קורות חיים באנגלית (PDF)",
            "cvHe": "קורות חיים בעברית (PDF)",
            "letsTalk": "בואו נדבר",
            "langBtn": "English"
        },
        "hero": {
            "status": "פתוח להזדמנויות Senior / Staff ופרויקטים בעלי אימפקט",
            "greeting": "שלום, אני",
            "name": "רפאל רובינוב",
            "subtitle": "מהנדס תוכנה בכיר — Backend & Full-Stack מועצם AI",
            "bio": "מומחה בארכיטקטורת מערכות מבוזרות ב-Scale גבוה, ממשקי API מהירים ויישומי Web ו-AI מתקדמים. 5+ שנות ניסיון מעשי בפיתוח סביבות ייצור קריטיות (Mission-Critical).",
            "btnExplore": "צפה בפרויקטים ובמשחקים",
            "btnCv": "הורד קורות חיים (PDF)",
            "btnContact": "יצירת קשר ישירה",
            "btnMiniGame": "שחק במיני-גיים"
        },
        "stats": [
            {
                "value": "+5",
                "label": "שנות ניסיון מעשי בהייטק"
            },
            {
                "value": "+8",
                "label": "פלטפורמות ענן פעילות"
            },
            {
                "value": "10M+",
                "label": "טרנזקציות יומיות מעובדות"
            },
            {
                "value": "+19",
                "label": "מערכות פרודקשן ו-AI"
            }
        ],
        "projectsHeader": {
            "subtitle": "// פרויקטים, מערכות וארכיטקטורה",
            "title": "פרויקטים נבחרים, מערכות ומשחקים",
            "filters": {
                "all": "הכל",
                "ai": "AI ופינטק",
                "backend": "בקאנד ו-Scale",
                "systems": "סייבר ומערכות",
                "games": "משחקים ותלת-ממד",
                "web": "ווב ו-Full Stack"
            },
            "searchPlaceholder": "חיפוש לפי טכנולוגיה או מילת מפתח...",
            "details": "פרטים נוספים",
            "liveDemo": "דמו חי",
            "playRiddle": "שחק בחידה",
            "playGame": "שחק במשחק",
            "code": "קוד ב-GitHub",
            "privateSystem": "מערכת פנימית"
        },
        "skillsHeader": {
            "subtitle": "// מומחיות טכנולוגית",
            "title": "סטאק הנדסי וליבת הפיתוח"
        },
        "architecture": {
            "subtitle": "// מערכות מבוזרות ו-SYSTEM DESIGN",
            "title": "ארכיטקטורה ב-High-Throughput וסביבות ייצור",
            "layer1Title": "שכבת לקוח ותצוגת קצה",
            "layer1Desc": "Angular 19, Next.js 15, PWA offline-first, רינדור WebGL תלת-ממדי ב-Three.js ותגובתיות מיידית.",
            "layer1Pill": "שכבת לקוח (Client Tier)",
            "layer2Title": "API Gateway ב-Scale גבוה",
            "layer2Desc": "מיקרו-סרוויסים ב-ASP.NET Core ו-.NET 10, אימות JWT מאובטח, Rate Limiting וניתוב RESTful מהיר.",
            "layer2Pill": "שער כניסה וניתוב",
            "layer3Title": "זיכרון מטמון מבוזר ואירועים",
            "layer3Desc": "שכבת In-Memory ב-Redis, הזרמת אירועי Pub/Sub, שידור חי ב-WebSockets וצנרות ב-Latency של פחות מ-5ms.",
            "layer3Pill": "זיכרון מהיר ואירועים",
            "layer4Title": "שכבת נתונים וגשרים ארגוניים",
            "layer4Desc": "SQL Server עם אינדוקס ושאילתות מותאמות, מחברי Mainframe / Natural מדור קודם וסוכני AI ברקע.",
            "layer4Pill": "שמירת נתונים ואינטגרציות",
            "metrics": [
                {
                    "val": "<50ms",
                    "label": "זמן תגובה ממוצע ב-API"
                },
                {
                    "val": "99.99%",
                    "label": "זמינות מערכת בייצור (Uptime)"
                },
                {
                    "val": "10M+",
                    "label": "רשומות מעובדות מדי יום"
                },
                {
                    "val": "Zero-Loss",
                    "label": "התאוששות חסינת תקלות וגיבוי"
                }
            ]
        },
        "experienceHeader": {
            "subtitle": "// מסלול מקצועי",
            "title": "ניסיון תעסוקתי מוכח"
        },
        "aiHeader": {
            "subtitle": "// סוכנים אוטונומיים ואקדמיה",
            "title": "מתודולוגיות AI והשכלה",
            "workflowsTitle": "פרדיגמות פיתוח מועצמות AI",
            "educationTitle": "השכלה והסמכות"
        },
        "contactHeader": {
            "subtitle": "// צור קשר",
            "title": "בואו נבנה משהו יוצא דופן ביחד.",
            "desc": "בין אם אתם מחפשים ארכיטקט בקאנד בכיר, מפתח מערכות בעומסים גבוהים, או פתוחים לשיתופי פעולה טכנולוגיים — אשמח לשוחח.",
            "sendEmail": "שליחת מייל ישיר",
            "callPhone": "חיוג טלפוני ישיר"
        },
        "footer": "© 2026 רפאל רובינוב. פותח בדיוק הנדסי, WebGL מודרני וקוד נקי."
    }
};

const PORTFOLIO_DATA = {
    "profile": {
        "name": "Refael Robinov",
        "title": "Senior Backend & AI-Augmented Full Stack Engineer",
        "subtitle": "Architecting high-scale distributed systems, .NET 10 microservices, AI agentic workflows, and high-performance cloud platforms.",
        "bio": "Senior Software Engineer with 5+ years of production experience engineering robust backend architectures, distributed microservices, and modern web applications. Championing cutting-edge .NET 10, full-stack reactive design, and AI-augmented velocity using Claude Code, Codex, and Antigravity Agents.",
        "location": "Be'er-Sheva, Israel",
        "email": "rafi20080@gmail.com",
        "phone": "052-7030595",
        "github": "https://github.com/raful222",
        "linkedin": "https://linkedin.com/in/refael-robinov",
        "status": "Open to Senior Roles & High-Impact Opportunities",
        "gpa": "86.7 (BSc Software Engineering)",
        "he": {
            "name": "רפאל רובינוב",
            "title": "מהנדס תוכנה בכיר — Backend & Full-Stack מועצם AI",
            "subtitle": "מומחה בארכיטקטורת מערכות מבוזרות, מיקרו-סרוויסים ב-.NET 10, סוכני AI ופלטפורמות ענן בעלות ביצועים גבוהים.",
            "bio": "מהנדס תוכנה בכיר עם 5+ שנות ניסיון מעשי בפיתוח ארכיטקטורות Backend עמידות, מיקרו-סרוויסים מבוזרים ויישומי Web מתקדמים. מוביל אימוץ טכנולוגיות חדשניות (.NET 10, Angular 19) ופרדיגמות פיתוח מועצמות AI בעזרת Claude Code, Codex וסוכני Antigravity.",
            "status": "פתוח להזדמנויות Senior / Staff ופרויקטים בעלי אימפקט גבוה"
        }
    },
    "stats": [
        {
            "value": "5+",
            "label": "Years Experience"
        },
        {
            "value": "8+",
            "label": "Live Cloud Platforms"
        },
        {
            "value": "10M+",
            "label": "Daily Data Transactions"
        },
        {
            "value": "18+",
            "label": "Production & AI Systems"
        }
    ],
    "skillCategories": [
        {
            "name": "Backend & Distributed Systems",
            "icon": "server",
            "skills": [
                {
                    "name": "C# / C# 13",
                    "level": 96
                },
                {
                    "name": ".NET Core 6-10 / ASP.NET",
                    "level": 96
                },
                {
                    "name": "Microservices & Event-Driven Architecture",
                    "level": 92
                },
                {
                    "name": "RESTful Web APIs & WCF",
                    "level": 95
                },
                {
                    "name": "Redis Caching & Pub/Sub",
                    "level": 90
                },
                {
                    "name": "SQL Server & Query Optimization",
                    "level": 92
                },
                {
                    "name": "Natural / Mainframe Enterprise Bridges",
                    "level": 82
                }
            ]
        },
        {
            "name": "AI & Agentic Engineering",
            "icon": "bot",
            "skills": [
                {
                    "name": "Claude Code & Agentic Workflows",
                    "level": 96
                },
                {
                    "name": "Antigravity Autonomous Pair Programming",
                    "level": 95
                },
                {
                    "name": "OpenAI Codex & Tool Calling APIs",
                    "level": 94
                },
                {
                    "name": "Deep Learning (PyTorch CNNs & Computer Vision)",
                    "level": 88
                },
                {
                    "name": "Automated Workflows & Prompt Architecture",
                    "level": 94
                },
                {
                    "name": "MLOps & Algorithm Data Pipelines",
                    "level": 88
                }
            ]
        },
        {
            "name": "Frontend, 3D & Cloud DevOps",
            "icon": "layout",
            "skills": [
                {
                    "name": "Angular (v17-19+)",
                    "level": 92
                },
                {
                    "name": "Next.js 15 & React",
                    "level": 90
                },
                {
                    "name": "Three.js & WebGL 3D Visuals",
                    "level": 88
                },
                {
                    "name": "TypeScript / Modern JavaScript",
                    "level": 92
                },
                {
                    "name": "PWA (Service Workers & Web Audio)",
                    "level": 92
                },
                {
                    "name": "Docker & CI/CD Pipelines",
                    "level": 88
                }
            ]
        }
    ],
    "aiWorkflows": [
        {
            "title": "Agentic Software Engineering",
            "tech": "Claude Code, Antigravity AI, Codex",
            "desc": "Leveraging multi-agent systems and pair-programming autonomous agents for rapid prototyping, architecture refactoring, and sub-second bug triaging.",
            "icon": "sparkles",
            "he": {
                "title": "הנדסת תוכנה מבוססת סוכנים אוטונומיים (Agentic SE)",
                "desc": "שימוש במערכות מרובות סוכנים וסוכני Pair-Programming אוטונומיים לפיתוח מהיר של אבות-טיפוס, ריפקטורינג ארכיטקטוני ואיתור באגים מהיר."
            }
        },
        {
            "title": "Multi-Agent Systems & Autonomous QA",
            "tech": "CrewAI, Gemini 3.1 Flash, Discord Automation",
            "desc": "Architecting autonomous multi-agent teams for self-healing software, live website diagnostic probes, automated test generation, and pull request patching.",
            "icon": "bot",
            "he": {
                "title": "מערכות מרובות סוכנים ו-QA אוטונומי",
                "desc": "תכנון צוותי סוכנים אוטונומיים לריפוי עצמי של תוכנה, בדיקות עומק של אתרים בזמן אמת, יצירת בדיקות אוטומטיות ושליחת תיקונים בקוד."
            }
        },
        {
            "title": "Deep Learning & Computer Vision",
            "tech": "PyTorch, CNN, Tensor Processing",
            "desc": "Trained convolutional neural networks for geometric chart pattern detection (Cup & Handle) and statistical extrema clustering in financial markets.",
            "icon": "brain-circuit",
            "he": {
                "title": "Deep Learning וראייה ממוחשבת (Computer Vision)",
                "desc": "אימון רשתות נוירונים קונבולוציוניות (CNN) לזיהוי תבניות גיאומטריות בגרפים פיננסיים (Cup & Handle) וניתוח צבירי קיצון סטטיסטיים."
            }
        },
        {
            "title": "Workflow Automation & LLM APIs",
            "tech": "Tool Calling, RAG, Prompt Architecture",
            "desc": "Integrating intelligent reasoning APIs, structured function calling, and automated testing pipelines into enterprise software ecosystems.",
            "icon": "zap",
            "he": {
                "title": "אוטומציית תהליכים ואינטגרציית מודלי שפה (LLM APIs)",
                "desc": "הטמעת ממשקי API של מודלי בינה מלאכותית, קריאות פונקציות מובנות (Function Calling) וצינורות בדיקה אוטומטיים במערכות ארגוניות."
            }
        }
    ],
    "projects": [
        {
            "id": "stocks-battle",
            "title": "StocksBattle — Real-Time Multiplayer PvP Trading Arena",
            "category": ["games", "ai"],
            "tag": "Real-Time PvP Trading Arena",
            "featured": true,
            "description": "Next-generation real-time PvP stock & crypto trading arena. Features live market feeds, dynamic leverage (x1-x25), real-time leaderboards, Clan Wars, and sub-50ms execution latency.",
            "longDesc": "StocksBattle transforms financial markets into an adrenaline-fueled competitive multiplayer arena. Built on Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4, the platform integrates live market feeds (Yahoo Finance & live providers), high-leverage dynamic risk engines (x1 to x25), real-time WebSockets / SSE game tick loops, Clan Wars territory diplomacy, interactive podium settlement ceremonies with XP/trophy economies, and sound effects.",
            "tech": [
                "Next.js 16",
                "React 19",
                "TypeScript",
                "Tailwind CSS v4",
                "WebSockets / SSE",
                "Real-Time Orderbook",
                "Dynamic Leverage (x1-x25)",
                "Clan Wars Engine",
                "Live Financial APIs"
            ],
            "github": "https://github.com/raful222",
            "demo": "#",
            "status": "Production PvP Trading Game",
            "badge": "Premier Flagship (StocksBattle)",
            "icon": "swords",
            "he": {
                "title": "StocksBattle — זירת מסחר PvP מרובת משתתפים בזמן אמת",
                "description": "זירת מסחר תחרותית (PvP) בזמן אמת במניות וקריפטו. מנוע מינוף דינמי (x1 עד x25), נתוני שוק חיים, לוחות תוצאות חיים, מלחמת שבטים (Clan Wars) וביצועים מהירים במיוחד.",
                "longDesc": "פלטפורמת הדגל StocksBattle הופכת את שוק ההון לזירת קרבות מרובת משתתפים מהירה וממכרת. המערכת מבוססת Next.js 16, React 19, TypeScript ו-Tailwind CSS v4, ומשלבת נתוני שוק פיננסיים חיים (מניות וקריפטו), מנוע מינוף דינמי של עד פי 25, תקשורת WebSockets / SSE בזמן אמת, מערכת מלחמת שבטים (Clans), טקסי הכרזת מנצחים על פודיום מונפש עם חלוקת XP וגביעים, ואפקטים קוליים עשירים.",
                "badge": "פרויקט הדגל המוביל (StocksBattle)",
                "tag": "זירת מסחר תחרותית PvP"
            },
            "image": "assets/projects/stocksbattle/arena.jpg",
            "images": [
                {
                    "url": "assets/projects/stocksbattle/arena.jpg",
                    "caption": "Live PvP Trading Arena & Order Execution",
                    "captionHe": "זירת קרבות מסחר חיה (PvP) וביצוע פקודות בזמן אמת"
                },
                {
                    "url": "assets/projects/stocksbattle/hero.jpg",
                    "caption": "StocksBattle Brand & Next-Gen Trading Hub",
                    "captionHe": "ממשק המותג של StocksBattle וזירת המסחר החדשה"
                },
                {
                    "url": "assets/projects/stocksbattle/leverage.jpg",
                    "caption": "Dynamic Leverage Trading (x1-x25) & Real-Time PnL",
                    "captionHe": "מנגנון מינוף דינמי (פי 1 עד פי 25) ומעקב רווח/הפסד בזמן אמת"
                },
                {
                    "url": "assets/projects/stocksbattle/podium.jpg",
                    "caption": "Battle Podium, Winner Standings & XP Leveling",
                    "captionHe": "פודיום סיום קרב, דירוג מנצחים וחלוקת XP ותגים"
                },
                {
                    "url": "assets/projects/stocksbattle/clans.jpg",
                    "caption": "Clan Wars Hub, Territory Diplomacy & Leaderboards",
                    "captionHe": "לוח שבטים (Clan Wars), דיפלומטיה וטבלת מובילים עולמית"
                }
            ]
        },
        {
            "id": "try-invest",
            "title": "TryInvest — Professional Investment & Portfolio Platform",
            "category": "ai",
            "tag": "FinTech & Investment",
            "featured": true,
            "description": "Advanced investment and portfolio management platform offering market analysis, real-time portfolio tracking, risk-adjusted metrics, and automated strategy simulation.",
            "longDesc": "TryInvest is an end-to-end investment ecosystem providing retail and institutional users with advanced financial modeling, real-time PnL tracking, asset allocation backtesting, and automated risk management.",
            "tech": [
                "C# .NET 10",
                "Angular",
                "Web API",
                "Chart.js",
                "SQL Server",
                "Financial Modeling"
            ],
            "github": "",
            "demo": "https://tryinvest.co.il/",
            "status": "Live in Production",
            "badge": "Flagship FinTech (tryinvest.co.il)",
            "icon": "dollar-sign",
            "he": {
                "title": "TryInvest — פלטפורמת השקעות וניהול תיקים מקצועית",
                "description": "פלטפורמה מתקדמת לניתוח שווקים, מעקב בזמן אמת אחר תיקי השקעות, מדדי תשואה מותאמי-סיכון וסימולציות אלגוריתמיות.",
                "longDesc": "מערכת השקעות וניהול תיקים מקצועית מקצה לקצה. מספקת למשקיעים ניתוח מעמיק של ביצועים, מעקב PnL חי, בדיקות עבר (Backtesting) של הקצאת נכסים וניהול סיכונים אוטומטי.",
                "badge": "ספינת דגל בפינטק (tryinvest.co.il)",
                "tag": "פינטק והשקעות"
            },
            "image": "assets/projects/tryinvest/dashboard.png",
            "images": [
                {
                    "url": "assets/projects/tryinvest/dashboard.png",
                    "caption": "Live FinTech Trading & Portfolio Dashboard",
                    "captionHe": "דשבורד מסחר, מעקב תיק וביצועים בזמן אמת"
                },
                {
                    "url": "assets/projects/tryinvest/portfolio.png",
                    "caption": "Asset Allocation, Risk Metrics & PnL Curve",
                    "captionHe": "הקצאת נכסים, מדדי תשואה/סיכון וגרף רווח והפסד"
                },
                {
                    "url": "assets/projects/tryinvest/analysis.png",
                    "caption": "Equities Screening, DCF Valuation & Technical Momentum",
                    "captionHe": "סריקת מניות, מודל הערכת שווי DCF ומומנטום טכני"
                }
            ]
        },
        {
            "id": "chess-td-3d",
            "title": "Chess TD 3D — Real-Time Strategy & Tower Defense",
            "category": "games",
            "tag": "3D RTS & Unity Parity",
            "featured": true,
            "description": "Full-scale 3D Chess Tower Defense game combining classical chess tactics with modern tower defense mechanics, procedural waves, animated 3D hero rigs, and real-time WebSockets multiplayer.",
            "longDesc": "Engineered with Three.js WebGL and Vite on the client, backed by a Node.js WebSocket battle server. Features automated GLTF asset optimization, LOD pipelines, attack window synchronization, economy simulation, and cross-engine Unity parity.",
            "tech": [
                "Three.js",
                "WebGL",
                "Node.js WebSockets",
                "Vite",
                "GLTF Rigs",
                "Unity Engine Parity",
                "Audio FX"
            ],
            "github": "https://github.com/raful222",
            "demo": "#",
            "status": "Complete 3D RTS Game",
            "badge": "3D RTS Game Engine",
            "icon": "crown",
            "he": {
                "title": "Chess TD 3D — אסטרטגיה בזמן אמת ו-Tower Defense תלת-ממדי",
                "description": "משחק Tower Defense מבוסס טקטיקת שחמט בתלת-ממד מלא. כולל גלי אויבים פרוצדורליים, מודלים תלת-ממדיים מונפשים ושרת קרבות מרובה משתתפים בזמן אמת (WebSockets).",
                "longDesc": "פותח עם מנוע Three.js WebGL ו-Vite בצד הלקוח, עם שרת שחמט מהיר ב-Node.js. כולל אופטימיזציית מודלים (GLTF/LOD), סנכרון תקיפות, הדמיית כלכלה ותאימות מלאה למנוע Unity.",
                "badge": "מנוע משחק 3D RTS",
                "tag": "RTS תלת-ממדי"
            },
            "image": "assets/projects/chess-td-3d/battle_live.png",
            "images": [
                {
                    "url": "assets/projects/chess-td-3d/battle_live.png",
                    "caption": "Real-Time 3D Chess RTS Battle & Wave Defense",
                    "captionHe": "קרב אסטרטגיה 3D בזמן אמת והגנת גלי אויבים"
                },
                {
                    "url": "assets/projects/chess-td-3d/arena.png",
                    "caption": "Isometric Tactical Arena & Unit Deployments",
                    "captionHe": "זירת לחימה איזומטרית ופריסת כוחות שחמט"
                },
                {
                    "url": "assets/projects/chess-td-3d/lobby.png",
                    "caption": "Multiplayer Matchmaking Lobby & Armory",
                    "captionHe": "לובי מרובה משתתפים, התאמת משחק ונשקייה"
                },
                {
                    "url": "assets/projects/chess-td-3d/campaign_map.png",
                    "caption": "Strategic Campaign Progression Map & Tier Rewards",
                    "captionHe": "מפת קמפיין אסטרטגית ופרסי התקדמות שלבים"
                }
            ]
        },
        {
            "id": "chidat-hayom",
            "title": "חידת היום (Chidat HaYom) — Daily Expert Logic & Quant Riddles",
            "category": "games",
            "tag": "Logic & Quant Teasers",
            "featured": true,
            "description": "Interactive daily riddle & brain teaser platform with 25+ Expert puzzles (quant interviews, mathematical induction, spatial riddles), Wordle-style viral streak sharing, and RTL neon dark UI.",
            "longDesc": "Full-scale multi-platform puzzle application built with Flutter & Web. Features 25 curated interview and quant riddles, real-time timer with hint penalties, shake animations on error, confetti celebrations on solve, zero-spoiler WhatsApp share cards, and deep logical solution breakdowns.",
            "tech": [
                "Flutter",
                "Dart",
                "Web PWA",
                "JavaScript",
                "RTL / Hebrew",
                "Viral Sharing",
                "Animations"
            ],
            "github": "https://github.com/raful222",
            "demo": "#riddle-modal",
            "isPlayable": true,
            "status": "Flutter & Web App",
            "badge": "Daily Riddles & Logic",
            "icon": "help-circle",
            "he": {
                "title": "חידת היום — שאלות אקספרט, חידות קוואנט ולוגיקה יומית",
                "description": "פלטפורמת חידות יומית אינטראקטיבית עם 25+ חידות מראיונות עבודה מתקדמים וחברות הייטק (חידות אינדוקציה, הסתברות ומרחב), שיתוף ויראלי בסגנון Wordle וממשק Dark Neon עברי.",
                "longDesc": "אפליקציית חידות חוצת-פלטפורמות מלאה שנבנתה ב-Flutter ו-Web. כוללת 25 חידות אקספרט מובחרות, טיימר זמן אמת עם קנסות רמז, אנימציות ניעור בשגיאה, חגיגות קונפטי בפתרון, כרטיסי שיתוף ללא ספוילרים לוואטסאפ והסברים לוגיים עמוקים.",
                "badge": "חידות היגיון יומיות",
                "tag": "לוגיקה וקוואנט"
            },
            "image": "assets/projects/chidat-hayom.jpg"
        },
        {
            "id": "valdoria-iron-fiefs",
            "title": "Valdoria: Iron Fiefs (ולדוריה: נחלות הברזל)",
            "category": "games",
            "tag": "Real-Time Medieval MMO Strategy",
            "featured": true,
            "description": "Full-scale Real-Time Medieval MMO Strategy game inspired by Age of Empires 2. Features tactical procedural world maps, 2.5D village evolution, animated troop march vectors, noble conquest mechanics, alliance diplomacy, and multi-language support (6 languages).",
            "longDesc": "A deep medieval multiplayer strategy experience. Engineered with React, TypeScript, and Vite on the client, backed by a Node.js API with Prisma ORM. Includes AoE2-style terrain shaders, real-time troop march trajectories, village loyalty conquest system, tribe alliances with territorial map glowing, wandering merchant exchange, and multi-language RTL support.",
            "tech": [
                "React",
                "TypeScript",
                "Vite",
                "Node.js",
                "Prisma ORM",
                "Tailwind CSS",
                "WebSockets",
                "RTL / i18n (6 Languages)"
            ],
            "github": "https://github.com/raful222",
            "demo": "#",
            "status": "Complete MMO Strategy Game",
            "badge": "Medieval MMO Strategy",
            "icon": "shield",
            "he": {
                "title": "Valdoria: Iron Fiefs (ולדוריה: נחלות הברזל)",
                "description": "משחק אסטרטגיה מסיבי רב-משתתפים בימי הביניים בהשראת Age of Empires 2. כולל מפת עולם טקטית פרוצדורלית, פיתוח כפרים 2.5D, מסלולי צעידת גייסות מונפשים, כיבוש נחלות, דיפלומטיית בריתות ותמיכה ב-6 שפות.",
                "longDesc": "חוויית אסטרטגיה מרובת משתתפים עמוקה. פותח עם React, TypeScript ו-Vite בצד הלקוח, יחד עם Node.js ו-Prisma ORM. כולל שיידרים של שטח בסגנון AoE2, צעידת צבאות וקטורית, כיבוש כפרים מבוסס נאמנות, בריתות שבטים ומסחר נודד.",
                "badge": "אסטרטגיה רבת-משתתפים",
                "tag": "MMO אסטרטגיה בזמן אמת"
            },
            "image": "assets/projects/valdoria/hero.jpg",
            "images": [
                {
                    "url": "assets/projects/valdoria/hero.jpg",
                    "caption": "Valdoria Realm — Strategic World Map & March Vectors",
                    "captionHe": "ממלכת ולדוריה — מפת עולם אסטרטגית ומסלולי תנועת גייסות"
                },
                {
                    "url": "assets/projects/valdoria/starter_village.jpg",
                    "caption": "Starter Medieval Village & Timber Resource Hub",
                    "captionHe": "התיישבות ימי-ביניימית ראשונית ומרכז ייצור משאבים"
                },
                {
                    "url": "assets/projects/valdoria/advanced_village.jpg",
                    "caption": "Advanced Stone Citadel & Settlement Evolution",
                    "captionHe": "מבצר אבן מבוצר והתפתחות עיר מתקדמת"
                },
                {
                    "url": "assets/projects/valdoria/village_bg.jpg",
                    "caption": "Atmospheric Settlement Landscape & Garrison Defense",
                    "captionHe": "פנורמת נוף הכפר והגנת חיל המצב"
                }
            ]
        },
        {
            "id": "discord-qa-bot",
            "title": "Autonomous QA & Remediation Agent (Discord Bot)",
            "category": "ai",
            "tag": "Autonomous Multi-Agent AI",
            "featured": true,
            "description": "Multi-agent autonomous QA and code remediation bot powered by CrewAI and Google Gemini LLM. Proactively audits live production services, runs technical & UI test suites, generates remediation reports, and applies verified automated fixes with rollback safeguards.",
            "longDesc": "Integrates CrewAI multi-agent processes with Google Gemini Flash models. Provides Discord slash commands (!test-all, !test-ui, !test-tech, !apply-fixes, !revert-fixes), scraping web tools, strict safety blacklists, and automated file patch generation with timestamped backup directories.",
            "tech": [
                "Python",
                "CrewAI",
                "Google Gemini 3.1 Flash",
                "Discord.py",
                "Docker",
                "Autonomous Agents"
            ],
            "github": "https://github.com/raful222/discord-qa-bot",
            "demo": "https://github.com/raful222/discord-qa-bot",
            "status": "Autonomous Agent System",
            "badge": "CrewAI & Gemini Autonomous Agent",
            "icon": "bot",
            "he": {
                "title": "סוכן QA ותיקון באגים אוטונומי (בוט דיסקורד מרובה סוכנים)",
                "description": "מערכת מרובת סוכנים (Multi-Agent System) אוטונומית לבדיקות QA, ניטור אתרים חיים, זיהוי כשלים אוטומטי, יצירת בדיקות מקיפות ושליחת פקודות ריפוי ישירות בדיסקורד.",
                "longDesc": "ארכיטקטורת Multi-Agent שנבנתה באמצעות CrewAI ומודל Gemini 3.1 Flash. מתחברת לדיסקורד, סורקת אתרי יעד, מזהה שגיאות פרודקשן, מנתחת לוגים ומציעה תיקוני קוד ו-Pull Requests באופן אוטונומי.",
                "badge": "סוכני AI אוטונומיים",
                "tag": "סוכני AI אוטונומיים"
            },
            "image": "assets/projects/discord-qa-bot.jpg"
        },
        {
            "id": "vbook",
            "title": "VBOOK — Smart Booking & Appointment System",
            "category": "web",
            "tag": "Live SaaS Platform",
            "featured": true,
            "description": "Production calendar and appointment reservation web application with sub-second page loads, real-time availability sync, conflict prevention, and automated reminder webhooks.",
            "longDesc": "Full-scale booking SaaS platform engineered with modern reactive architecture, high concurrency calendar synchronization, and automated notification pipelines.",
            "tech": [
                "Vite",
                "Modern JavaScript",
                "REST API",
                "Docker",
                "Responsive UI",
                "SaaS"
            ],
            "github": "",
            "demo": "https://vbookapp.co.il/",
            "status": "Live in Production",
            "badge": "Live SaaS (vbookapp.co.il)",
            "icon": "calendar",
            "image": "assets/projects/vbook.jpg"
        },
        {
            "id": "mt-algo",
            "title": "MT-Algo — Autonomous ML Trading System",
            "category": "ai",
            "tag": "AI & Algorithmic Trading",
            "featured": true,
            "description": "Autonomous trading engine combining a C# .NET 10 backend with a Python AI computer vision microservice. Detects market structures using CNNs (Cup & Handle pattern) and K-Means/GMM clustering for dynamic Support & Resistance discovery with real-time IBKR integration.",
            "longDesc": "A complete autonomous trading architecture: .NET 10 manages trade orchestration and IBKR execution, while Python handles 2D chart tensor processing with Deep Learning CNN models to confirm geometric setups before execution.",
            "tech": [
                "C#",
                ".NET 10",
                "Python",
                "Computer Vision (CNN)",
                "SQL Server",
                "Angular",
                "WebSockets"
            ],
            "github": "",
            "demo": "https://mtalgo.duckdns.org",
            "status": "Live Cloud Service",
            "badge": "Live Cloud (mtalgo.duckdns.org)",
            "icon": "trending-up",
            "he": {
                "title": "MT-Algo — מנוע מסחר כמותי ואינדיקטורים פיננסיים",
                "description": "סוויטת אינדיקטורים כמותיים מותאמת אישית ל-MetaTrader ו-TradingView. חישוב פערי מחיר בזמן אמת, איתור תבניות מחיר מבוססות רשתות עצביות והתראות מסחר אוטומטיות.",
                "longDesc": "אלגוריתמי מסחר מונחי סטטיסטיקה ו-Machine Learning. מספקת מודלי נזילות, התראות קוליות/ויזואליות בזמן אמת, וחישוב מומנטום עבור סוחרי אופציות ומניות.",
                "badge": "מנוע מסחר כמותי",
                "tag": "מסחר אלגוריתמי"
            },
            "image": "assets/projects/mt-algo.jpg"
        },
        {
            "id": "ai-ml-learning-hub",
            "title": "AI & Machine Learning Interactive Learning Hub",
            "category": "ai",
            "tag": "EdTech & Interactive AI",
            "featured": true,
            "description": "Full-scale interactive AI/ML learning platform in Next.js & React featuring 18 modules, interactive visualizers for KNN, GMM, CNN and GenAI, automated exams, and flashcards.",
            "longDesc": "Engineered with Next.js App Router, Tailwind CSS, and custom interactive algorithm visualizers allowing learners to experiment with clustering, convolutional filters, and neural networks in real time.",
            "tech": [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "ML Visualizations",
                "Python"
            ],
            "github": "https://github.com/raful222/ai-ml-learning",
            "demo": "https://github.com/raful222/ai-ml-learning",
            "status": "Open Source AI Learning Platform",
            "badge": "Public AI Platform",
            "icon": "brain-circuit",
            "image": "assets/projects/ai-ml-learning-hub.jpg"
        },
        {
            "id": "alefbet",
            "title": "הרפתקת א'-ב' (AlefBet Kids Adventure)",
            "category": "games",
            "tag": "Educational PWA & Audio",
            "featured": true,
            "description": "Production offline-first PWA for kids aged 3–6 with 193 recorded Hebrew voice tracks, interactive phonics challenges, letter tracing with canvas coverage calculation, and zero-latency performance.",
            "longDesc": "A zero-latency, offline Progressive Web App with custom synthesized Hebrew voice recognition prompts, parental analytics dashboard, and kid-friendly gamified progression.",
            "tech": [
                "PWA",
                "JavaScript",
                "HTML5 Canvas",
                "Web Audio API",
                "Service Workers",
                "CSS3 Animations"
            ],
            "github": "",
            "demo": "https://alefbet-mt.duckdns.org",
            "status": "Live in Production",
            "badge": "Live App (alefbet-mt.duckdns.org)",
            "icon": "sparkles",
            "image": "assets/projects/alefbet.jpg"
        },
        {
            "id": "beiknishta",
            "title": "Beiknishta (בי כנישתא) — Community Management SaaS",
            "category": "systems",
            "tag": "Cloud Community Platform",
            "featured": true,
            "description": "Comprehensive cloud management and engagement platform designed for community centers and synagogues, managing members, recurring pledges, event schedules, and digital aliyot.",
            "longDesc": "Full-scale multi-tenant management system featuring automated donation billing, prayer time scheduling algorithms, member directory, and financial audit reports.",
            "tech": [
                "C# .NET 10",
                "Angular",
                "SQL Server",
                "REST API",
                "Payment Integration"
            ],
            "github": "",
            "demo": "https://beiknishta.duckdns.org",
            "status": "Live Cloud Platform",
            "badge": "Live Cloud (beiknishta.duckdns.org)",
            "icon": "building",
            "image": "assets/projects/beiknishta.jpg"
        },
        {
            "id": "pulsebe",
            "title": "PulseBE — High-Throughput Microservice Bus",
            "category": "backend",
            "tag": "High-Scale Backend",
            "featured": true,
            "description": "High-performance backend event engine and microservice gateway designed for low-latency message routing, async caching pipelines, and distributed queue handling.",
            "longDesc": "Engineered to deliver high throughput, Redis cache hydration, and ultra-fast RESTful API endpoints under high concurrency.",
            "tech": [
                ".NET 10",
                "Redis",
                "C#",
                "Microservices Architecture",
                "Docker",
                "REST API"
            ],
            "github": "",
            "demo": "https://pulsebe.duckdns.org",
            "status": "Live Microservice",
            "badge": "Live Backend (pulsebe.duckdns.org)",
            "icon": "zap",
            "he": {
                "title": "PulseBE — אפיק מיקרו-סרוויסים בעומסים גבוהים",
                "description": "מנוע אירועים ושער מיקרו-סרוויסים בעל ביצועים גבוהים. מיועד לניתוב הודעות ב-Latency נמוך במיוחד, צנרות Cache אסינכרוניות וניהול תורים מבוזרים.",
                "longDesc": "נבנה לעמידה בעומסים כבדים, עדכון מהיר של שכבת Redis ותגובתיות מיידית בממשקי REST תחת תעבורה בו-זמנית גבוהה.",
                "badge": "מיקרו-סרוויס בייצור",
                "tag": "תשתיות בקאנד ו-Scale"
            },
            "image": "assets/projects/pulsebe.jpg"
        },
        {
            "id": "report-stock-analysis",
            "title": "ReportStockAnalysis — Financial Intelligence Engine",
            "category": "ai",
            "tag": "Financial Analytics",
            "featured": true,
            "description": "Automated equities analysis and reporting platform pulling live market feeds, computing fundamental DCF & technical momentum indicators, and generating executive investment summaries.",
            "longDesc": "Automated equities screening pipeline computing DCF estimations, valuation ratios, momentum indicators, and generating structured financial reports for institutional and private investors.",
            "tech": [
                "Python",
                "Pandas",
                "FastAPI",
                "Financial APIs",
                "Data Visualization"
            ],
            "github": "",
            "demo": "#",
            "status": "Analytics Microservice (Offline)",
            "badge": "Equities Analytics Engine",
            "icon": "bar-chart-2",
            "image": "assets/projects/report-stock-analysis.jpg",
            "he": {
                "title": "ReportStockAnalysis — מנוע מודיעין פיננסי ואנליטיקה",
                "description": "פלטפורמת סריקה וניתוח מניות אוטומטית המושכת נתוני שוק חיים, מחשבת מודלי DCF ומדדי מומנטום טכניים, ומפיקה דוחות השקעה למנהלים.",
                "longDesc": "צנרת סריקה אוטומטית של שווקי הון המחשבת הערכות שווי, יחסי תמחור, ומייצרת דוחות השקעה מובנים עבור משקיעים מוסדיים ופרטיים.",
                "badge": "מנוע אנליטיקת מניות",
                "tag": "אנליטיקה פיננסית"
            }
        },
        {
            "id": "idle-for-you",
            "title": "IdleForYou — 3D Tower Economy Simulation Game",
            "category": "games",
            "tag": "3D Game Engine & Sim",
            "featured": true,
            "description": "Deep incremental tower economy simulation game. Features multi-tier business progression, automated worker AI, custom 3D low-poly character rendering, and mathematical economic balance modeled in Python.",
            "longDesc": "Features custom 3D WebGL scenes, procedural floor upgrades, automated offline revenue calculations, and balanced pacing modeled through Python Monte-Carlo economic simulations.",
            "tech": [
                "Three.js",
                "WebGL",
                "Python (Sim Engine)",
                "JavaScript ES6+",
                "HTML5 Canvas"
            ],
            "github": "https://github.com/raful222/IdleForYou",
            "demo": "#",
            "status": "In Active Development",
            "badge": "3D Game Engine",
            "icon": "gamepad-2",
            "he": {
                "title": "IdleForYou — משחק סימולציה כלכלית בתלת-ממד",
                "description": "משחק סימולציה כלכלית של מגדל עסקים אינקרמנטלי. התקדמות עסקים רב-שלבית, בינה מלאכותית של עובדים, מודלים תלת-ממדיים ואיזון כלכלי מתמטי שנבדק ב-Python.",
                "longDesc": "סצנות WebGL תלת-ממדיות ייחודיות, שדרוג קומות פרוצדורלי, חישוב רווחים במצב לא מקוון ומודל כלכלי מבוסס סימולציות מונטה-קרלו.",
                "badge": "מנוע משחק תלת-ממד",
                "tag": "מנוע משחק תלת-ממדי"
            },
            "image": "assets/projects/idle-for-you.jpg"
        },
        {
            "id": "task-management-api",
            "title": "Enterprise Task Management API",
            "category": "backend",
            "tag": "Clean Architecture",
            "featured": false,
            "description": "High-performance enterprise task orchestration RESTful API with tiered permission models, audit trails, dependency tracking, and pagination.",
            "longDesc": "Clean Architecture implementation in ASP.NET Core with Repository pattern, Swagger documentation, and automated unit testing.",
            "tech": [
                "C#",
                ".NET 10 API",
                "Entity Framework",
                "SQL Server",
                "Swagger"
            ],
            "github": "https://github.com/raful222/TaskManagementAPI",
            "demo": "https://github.com/raful222/TaskManagementAPI",
            "status": "Open Source",
            "badge": "Clean Architecture (Public Code)",
            "icon": "check-square",
            "image": "assets/projects/task-management-api.jpg",
            "he": {
                "title": "Enterprise Task Management API",
                "description": "ממשק RESTful לניהול משימות ארגוניות עם מודל הרשאות מתקדם, מעקב תלויות, יומני ביקורת ועימוד יעיל.",
                "longDesc": "יישום ארכיטקטורה נקייה ב-ASP.NET Core עם Repository pattern, תיעוד Swagger מלא ובדיקות יחידה אוטומטיות.",
                "badge": "קוד פתוח (Clean Architecture)",
                "tag": "ארכיטקטורה נקייה"
            }
        },
        {
            "id": "coffee-shop-online",
            "title": "GTR CoffeeShop Online — E-Commerce Platform",
            "category": "web",
            "tag": "E-Commerce System",
            "featured": false,
            "description": "Upgraded digital ordering and menu management system with real-time cart calculations, responsive catalog browsing, and checkout workflows.",
            "longDesc": "Complete e-commerce platform built in ASP.NET and C# featuring product catalog customization, dynamic basket pricing, and clean database persistence.",
            "tech": [
                "ASP.NET / C#",
                "JavaScript",
                "HTML5 / SCSS",
                "SQL Database"
            ],
            "github": "https://github.com/raful222/CoffeeShopOnline",
            "demo": "https://github.com/raful222/CoffeeShopOnline",
            "status": "Open Source",
            "badge": "E-Commerce (Public Code)",
            "icon": "coffee",
            "image": "assets/projects/coffee-shop-online.jpg",
            "he": {
                "title": "GTR CoffeeShop Online — מערכת מסחר דיגיטלית",
                "description": "מערכת הזמנות דיגיטלית וניהול תפריטים עם חישוב עגלה בזמן אמת, קטלוג מוצרים רספונסיבי ותהליך תשלום מאובטח.",
                "longDesc": "פלטפורמת מסחר אלקטרוני מלאה ב-ASP.NET ו-C# הכוללת התאמת קטלוג מוצרים, תמחור דינמי ושמירת נתונים מהירה.",
                "badge": "קוד פתוח (E-Commerce)",
                "tag": "פלטפורמת E-Commerce"
            }
        },
        {
            "id": "logical-math-study-hub",
            "title": "Logical Math & Reasoning Hub — פורטל חשיבה לוגית",
            "category": "web",
            "tag": "EdTech & Logic Portal",
            "featured": false,
            "description": "Interactive mathematical reasoning and exam preparation portal for logic, set theory, graph theory, and combinatorics. Features KaTeX formula typesetting, step-by-step proofs, and diagnostic quizzes.",
            "longDesc": "Engineered with modern RTL responsive architecture, KaTeX LaTeX math typesetting, real-time quiz validation, step-by-step mathematical proofs, and categorical filter navigation.",
            "tech": [
                "JavaScript (ES6+)",
                "KaTeX (LaTeX)",
                "HTML5 / CSS3",
                "RTL Design",
                "Interactive Quizzes"
            ],
            "github": "",
            "demo": "#",
            "status": "Live Study Portal",
            "badge": "Interactive Exam Portal",
            "icon": "calculator",
            "image": "assets/projects/logical-math-study-hub.jpg",
            "he": {
                "title": "Logical Math & Reasoning Hub — פורטל חשיבה לוגית",
                "description": "פורטל אינטראקטיבי לתרגול מתמטי והכנה לבחינות בלוגיקה, תורת הקבוצות, גרפים וקומבינטוריקה. נוסחאות KaTeX, הוכחות שלב-אחר-שלב ושאלונים דיאגנוסטיים.",
                "longDesc": "ארכיטקטורה רספונסיבית מותאמת עברית (RTL), רינדור נוסחאות KaTeX LaTeX, בדיקת תשובות מיידית והוכחות מתמטיות מפורטות.",
                "badge": "פורטל לימודי אינטראקטיבי",
                "tag": "פורטל לוגיקה ואקדמיה"
            }
        },
        {
            "id": "lumina-jewelry-ai",
            "title": "Lumina — AI Bespoke Luxury Jewelry Studio",
            "category": "web",
            "tag": "Next.js 15 AI Studio",
            "featured": false,
            "description": "Luxury bespoke jewelry digital studio featuring an AI-assisted customization studio, transparent real-time pricing calculator based on live precious metal and diamond indices, and obsidian-luxe responsive aesthetics.",
            "longDesc": "Built on Next.js 15 App Router, React 19, Tailwind CSS, and TypeScript. Features transparent cost breakdowns, high-resolution interactive showcase gallery, and dynamic gemstone configuration.",
            "tech": [
                "Next.js 15",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Dynamic Pricing Model"
            ],
            "github": "",
            "demo": "#",
            "status": "Studio Platform",
            "badge": "Next.js 15 Luxury Studio",
            "icon": "gem",
            "image": "assets/projects/lumina-jewelry-ai.jpg",
            "he": {
                "title": "Lumina — סטודיו יוקרה מותאם אישית מבוסס AI",
                "description": "סטודיו דיגיטלי לתכשיטי יוקרה עם מודול התאמה אישית בסיוע AI, מחשבון תמחור שקוף בזמן אמת לפי מדדי מתכות יקרות ויהלומים, ועיצוב יוקרתי.",
                "longDesc": "נבנה על Next.js 15 App Router, React 19, Tailwind CSS ו-TypeScript. פירוט עלויות שקוף, גלריית תצוגה ברזולוציה גבוהה והגדרת אבני חן דינמית.",
                "badge": "סטודיו Next.js 15 יוקרתי",
                "tag": "סטודיו Next.js 15 & AI"
            }
        },
        {
            "id": "do-not-copy",
            "title": "DoNotCopy — Exam Security & Anti-Plagiarism System",
            "category": "systems",
            "tag": "Cyber Security & Web API",
            "featured": false,
            "description": "Academic examination management and plagiarism prevention platform built as B.Sc. graduation project at SCE, leveraging C# Web API to monitor integrity and eliminate unauthorized copying.",
            "longDesc": "Engineered with ASP.NET Core Web API, entity relationship integrity checks, automated submission diffing, and audit logging to maintain exam confidentiality and prevent student collusion.",
            "tech": [
                "C#",
                "ASP.NET Core Web API",
                "SQL Server",
                "Cyber Security",
                "RESTful API"
            ],
            "github": "https://github.com/raful222/DoNotCopy",
            "demo": "https://do-not-copy.vercel.app",
            "status": "B.Sc. Graduation Project",
            "badge": "Exam Security System",
            "icon": "shield-check",
            "image": "assets/projects/do-not-copy.jpg",
            "he": {
                "title": "DoNotCopy — מערכת אבטחת בחינות ומניעת העתקות",
                "description": "פרויקט הגמר לתואר ראשון בהנדסת תוכנה ב-SCE. פלטפורמה לניהול בחינות ואבטחת יושרה אקדמית באמצעות C# Web API למניעת העתקות ושמירה על סודיות המבחנים.",
                "longDesc": "פותח ב-ASP.NET Core Web API, בדיקת שלמות ישויות, השוואת הגשות אוטומטית ויומני ביקורת לשמירה על טוהר הבחינות.",
                "badge": "פרויקט גמר הנדסה",
                "tag": "סייבר ו-Web API"
            }
        },
        {
            "id": "cyber-recon-game",
            "title": "Cyber Defense: Terminal Defense",
            "category": "games",
            "tag": "Playable Canvas Game",
            "featured": false,
            "description": "Interactive in-browser cybersecurity tactical game where players defend simulated server firewalls against DDoS, SQL injections, and XSS exploits.",
            "longDesc": "Play directly in the browser! Real-time collision detection, particle explosions, dynamic threat waves, and retro synth design.",
            "tech": [
                "JavaScript (ES6+)",
                "HTML5 Canvas",
                "WebGL 3D Background",
                "Web Audio API"
            ],
            "github": "",
            "demo": "#game-modal",
            "isPlayable": true,
            "status": "Playable Right Now",
            "badge": "Interactive Mini-Game",
            "icon": "swords",
            "he": {
                "title": "Cyber Defense: Terminal Defense",
                "description": "משחק טקטי אינטראקטיבי בדפדפן שבו השחקנים מגנים על חומת האש של השרת מפני התקפות DDoS, הזרקות SQL ונוזקות.",
                "longDesc": "משחק ישירות בדפדפן! זיהוי פגיעות בזמן אמת, פיצוצי חלקיקים, גלי תקיפה דינמיים ועיצוב ניאון רטרו.",
                "badge": "מיני-משחק אינטראקטיבי",
                "tag": "מיני-משחק Canvas"
            }
        }
    ],
    "experience": [
        {
            "period": "2025 – Present",
            "role": "Full Stack Software Developer",
            "company": "Israel Tax Authority (Sha'am)",
            "location": "Jerusalem / Hybrid",
            "tag": "Government Scale",
            "highlights": [
                "Engineered robust backend systems for high-scale national traffic, focusing on micro-latency, high reliability, and data integrity.",
                "Modernized critical business workflows by bridging .NET 10 / .NET Core, Angular (v17–19), and Redis cache layers with core legacy mainframe frameworks.",
                "Led architecture of key service modules, optimizing data throughput and reducing processing bottlenecks.",
                "Championed code quality, agile CI/CD practices, and strict peer code reviews."
            ],
            "tech": [
                ".NET 10",
                "Angular 19",
                "Redis",
                "C#",
                "SQL",
                "Natural / Mainframe",
                "Agile"
            ],
            "he": {
                "role": "מפתח תוכנה Full Stack",
                "company": "רשות המסים בישראל (שע\"מ)",
                "location": "ירושלים / היברידי",
                "tag": "מערכות לאומיות",
                "highlights": [
                    "פיתוח והנדסת מערכות Backend מתקדמות לעומסי תעבורה לאומיים בהיקף נרחב, תוך שמירה על Latency מיקרוסקופי, אמינות גבוהה ושלמות נתונים מרבית.",
                    "מודרניזציה של תהליכים עסקיים קריטיים על ידי גישור בין .NET 10 / .NET Core, Angular (v17–19), ושכבות מטמון Redis לבין מערכות Mainframe ליבתיות.",
                    "הובלת ארכיטקטורה של מודולי שירות מרכזיים, אופטימיזציה של תפוקת נתונים (Throughput) ומניעת צווארי בקבוק בעיבוד.",
                    "הובלת סטנדרטים של איכות קוד, תהליכי CI/CD וביקורות קוד קפדניות (Code Reviews)."
                ]
            }
        },
        {
            "period": "2021 – Jan 2025",
            "role": "Backend Developer",
            "company": "Qualish Ltd",
            "location": "Omer, Israel",
            "tag": "Enterprise SaaS",
            "highlights": [
                "Architected end-to-end Web APIs, database schemas, and microservice endpoints in C# .NET Core 6.",
                "Integrated multi-provider payment gateways, billing reconciliation, and real-time event notifications.",
                "Engineered dynamic data visualization pipelines presenting live financial KPI charts to executive stakeholders.",
                "Streamlined customer onboarding workflows, cutting database latency and improving UX."
            ],
            "tech": [
                "C#",
                ".NET Core 6",
                "RESTful Web APIs",
                "SQL Server",
                "Payment Systems",
                "WebSockets"
            ],
            "he": {
                "role": "מפתח Backend",
                "company": "קואליש בע\"מ (Qualish Ltd)",
                "location": "עומר, ישראל",
                "tag": "Enterprise SaaS",
                "highlights": [
                    "תכנון ופיתוח ארכיטקטורת Web APIs מקצה לקצה, סכמות מסדי נתונים ונקודות קצה של מיקרו-סרוויסים ב-C# .NET Core 6.",
                    "אינטגרציה של ספקי סליקה מרובים, התאמת חיובים פיננסיים והתראות אירועים בזמן אמת.",
                    "בניית צנרות ויזואליזציית נתונים דינמיות המציגות גרפי מדדי ביצוע (KPIs) חיים להנהלה הבכירה.",
                    "ייעול תהליכי Onboarding של לקוחות, צמצום זמני השהייה במסדי נתונים ושיפור חוויית המשתמש."
                ]
            }
        }
    ],
    "education": [
        {
            "degree": "B.Sc. in Software Engineering",
            "institution": "SCE - Shamoon College of Engineering, Be'er-Sheva",
            "period": "2020 – 2023",
            "note": "GPA: 86.7 | Specialization in Cyber Security",
            "badge": "Academic Honors (86.7 GPA)",
            "he": {
                "degree": "תואר ראשון (B.Sc.) בהנדסת תוכנה",
                "institution": "SCE - המכללה האקדמית להנדסה ע\"ש סמי שמעון, באר שבע",
                "note": "ממוצע: 86.7 | התמחות באבטחת מידע וסייבר (Cyber Security)",
                "badge": "הצטיינות אקדמית (ממוצע 86.7)"
            }
        },
        {
            "degree": "Automating Success & AI Certification",
            "institution": "INT College — Institute of Innovation & Technology",
            "period": "2026",
            "note": "Industry-standard AI automation, Prompt Engineering & Intelligent Workflow Systems (40 Academic Hours)",
            "badge": "AI Certified",
            "he": {
                "degree": "הסמכת אוטומציה ובינה מלאכותית (AI)",
                "institution": "מכללת INT — המכון הטכנולוגי לחדשנות",
                "note": "אוטומציית AI מתקדמת, הנדסת פרומפטים ומערכות סוכנים אוטונומיות (40 שעות אקדמיות)",
                "badge": "מוסמך AI"
            }
        },
        {
            "degree": "Advanced Angular 19 & .NET 8-10 Masterclasses",
            "institution": "John Bryce",
            "period": "2025",
            "note": "Cutting-edge Enterprise Full Stack Patterns & Architecture",
            "he": {
                "degree": "מאסטר קלאס Angular 19 ו-.NET 8-10 מתקדם",
                "institution": "ג'ון ברייס (John Bryce)",
                "note": "דפוסי ארכיטקטורה ו-Full Stack ארגוני מתקדם"
            }
        },
        {
            "degree": "Networking & Cyber Security Certification",
            "institution": "Net4U College",
            "period": "2019 – 2020",
            "note": "Deep TCP/IP, Penetration Testing & Defensive Security",
            "he": {
                "degree": "הסמכת רשתות ואבטחת מידע (Cyber Security)",
                "institution": "מכללת Net4U",
                "note": "עומק TCP/IP, בדיקות חדירות (Penetration Testing) והגנה היקפית"
            }
        }
    ]
};

// Expose to window
if (typeof window !== 'undefined') {
    window.PORTFOLIO_DATA = PORTFOLIO_DATA;
    window.TRANSLATIONS = TRANSLATIONS;
}
