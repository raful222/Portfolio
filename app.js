// Main Application Controller & Interactions
let currentLang = localStorage.getItem("portfolio_lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Localization & Full App Render
    applyLanguage(currentLang);
    
    // 2. Initialize Interaction Handlers
    initFilterTabs();
    initSearch();
    initScrollEffects();
});

// Switch Language Toggle
window.toggleLanguage = function() {
    currentLang = currentLang === "en" ? "he" : "en";
    localStorage.setItem("portfolio_lang", currentLang);
    applyLanguage(currentLang);
};

// Apply Active Language across the entire Portfolio
window.applyLanguage = function(lang) {
    currentLang = lang;
    const isHe = lang === "he";
    const t = TRANSLATIONS[lang];

    // HTML Attributes & Document Meta
    document.documentElement.lang = lang;
    document.documentElement.dir = isHe ? "rtl" : "ltr";
    document.title = isHe
        ? "רפאל רובינוב | מהנדס תוכנה בכיר — Backend & Full-Stack מועצם AI"
        : "Refael Robinov | Senior Backend & Full Stack Engineer";

    // Language Toggle Button Label
    const langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.textContent = isHe ? "English" : "עברית";

    // Text Helper
    const setTxt = (id, txt) => {
        const el = document.getElementById(id);
        if (el && txt !== undefined) el.textContent = txt;
    };

    // Navigation Links
    setTxt("nav-link-projects", t.nav.projects);
    setTxt("nav-link-skills", t.nav.skills);
    setTxt("nav-link-architecture", t.nav.architecture);
    setTxt("nav-link-experience", t.nav.experience);
    setTxt("nav-link-about", t.nav.about);
    setTxt("nav-link-contact", t.nav.contact);
    setTxt("nav-cv-text", t.nav.cvBtn);
    setTxt("cv-text-en", t.nav.cvEn);
    setTxt("cv-text-he", t.nav.cvHe);
    setTxt("nav-text-talk", t.nav.letsTalk);

    // Hero Section
    renderProfile();
    setTxt("hero-text-explore", t.hero.btnExplore);
    setTxt("hero-text-cv", t.hero.btnCv);
    setTxt("hero-text-contact", t.hero.btnContact);
    setTxt("hero-text-game", t.hero.btnMiniGame);

    const heroCvBtn = document.getElementById("hero-cta-cv");
    if (heroCvBtn) {
        heroCvBtn.href = isHe ? "cv/Refael_Robinov_CV_HE.pdf" : "cv/Refael_Robinov_CV_EN.pdf";
    }

    // Projects Header & Search
    setTxt("projects-subtitle", t.projectsHeader.subtitle);
    setTxt("projects-title", t.projectsHeader.title);
    const searchInput = document.getElementById("project-search");
    if (searchInput) searchInput.placeholder = t.projectsHeader.searchPlaceholder;

    // Filter Buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        const cat = btn.getAttribute("data-filter");
        if (t.projectsHeader.filters && t.projectsHeader.filters[cat]) {
            btn.textContent = t.projectsHeader.filters[cat];
        }
    });

    // Skills Header
    setTxt("skills-subtitle", t.skillsHeader.subtitle);
    setTxt("skills-title", t.skillsHeader.title);

    // Architecture Section
    setTxt("arch-subtitle", t.architecture.subtitle);
    setTxt("arch-title", t.architecture.title);
    setTxt("arch-layer1-title", t.architecture.layer1Title);
    setTxt("arch-layer1-desc", t.architecture.layer1Desc);
    setTxt("arch-layer1-pill", t.architecture.layer1Pill);
    setTxt("arch-layer2-title", t.architecture.layer2Title);
    setTxt("arch-layer2-desc", t.architecture.layer2Desc);
    setTxt("arch-layer2-pill", t.architecture.layer2Pill);
    setTxt("arch-layer3-title", t.architecture.layer3Title);
    setTxt("arch-layer3-desc", t.architecture.layer3Desc);
    setTxt("arch-layer3-pill", t.architecture.layer3Pill);
    setTxt("arch-layer4-title", t.architecture.layer4Title);
    setTxt("arch-layer4-desc", t.architecture.layer4Desc);
    setTxt("arch-layer4-pill", t.architecture.layer4Pill);

    if (t.architecture.metrics && t.architecture.metrics.length >= 4) {
        setTxt("arch-metric1-val", t.architecture.metrics[0].val);
        setTxt("arch-metric1-label", t.architecture.metrics[0].label);
        setTxt("arch-metric2-val", t.architecture.metrics[1].val);
        setTxt("arch-metric2-label", t.architecture.metrics[1].label);
        setTxt("arch-metric3-val", t.architecture.metrics[2].val);
        setTxt("arch-metric3-label", t.architecture.metrics[2].label);
        setTxt("arch-metric4-val", t.architecture.metrics[3].val);
        setTxt("arch-metric4-label", t.architecture.metrics[3].label);
    }

    // Experience Header
    setTxt("exp-subtitle", t.experienceHeader.subtitle);
    setTxt("exp-title", t.experienceHeader.title);

    // AI & Education Header
    setTxt("ai-subtitle", t.aiHeader.subtitle);
    setTxt("ai-title", t.aiHeader.title);
    setTxt("ai-workflows-title", t.aiHeader.workflowsTitle);
    setTxt("education-title", t.aiHeader.educationTitle);

    // Contact Header
    setTxt("contact-subtitle", t.contactHeader.subtitle);
    setTxt("contact-title", t.contactHeader.title);
    setTxt("contact-desc", t.contactHeader.desc);
    setTxt("contact-text-email", t.contactHeader.sendEmail);
    setTxt("contact-text-phone", t.contactHeader.callPhone);

    // Footer
    setTxt("footer-text", t.footer);

    // Re-render Dynamic Data
    renderStats();

    // Respect active filter and search query
    const activeTab = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = PORTFOLIO_DATA.projects.filter(p => {
        const matchesCategory = activeTab === "all" || p.category === activeTab;
        const pTitle = (isHe && p.he?.title) ? p.he.title : p.title;
        const pDesc = (isHe && p.he?.description) ? p.he.description : p.description;
        const matchesQuery = !query || 
            pTitle.toLowerCase().includes(query) ||
            pDesc.toLowerCase().includes(query) ||
            p.tech.some(tch => tch.toLowerCase().includes(query));
        return matchesCategory && matchesQuery;
    });

    renderProjects(filtered);
    renderSkills();
    renderExperience();
    renderAIWorkflows();
    renderEducation();
    renderContact();

    if (window.lucide) {
        lucide.createIcons();
    }
};

// Render Profile Header & Hero
function renderProfile() {
    const isHe = currentLang === "he";
    const t = TRANSLATIONS[currentLang].hero;
    const heroGreeting = document.getElementById("hero-greeting");
    const heroName = document.getElementById("hero-name");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const heroBio = document.getElementById("hero-bio");
    const statusText = document.getElementById("status-text");

    if (heroGreeting) heroGreeting.textContent = t.greeting;
    if (heroName) heroName.textContent = t.name;
    if (heroSubtitle) heroSubtitle.textContent = t.subtitle;
    if (heroBio) heroBio.textContent = t.bio;
    if (statusText) statusText.textContent = t.status;
}

// Render Stats Cards
function renderStats() {
    const container = document.getElementById("stats-grid");
    if (!container) return;
    const statsList = TRANSLATIONS[currentLang].stats || PORTFOLIO_DATA.stats;

    container.innerHTML = statsList.map(s => `
        <div class="stat-card">
            <div class="stat-val">${s.value}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join("");
}

// Render Projects List
function renderProjects(projectsList) {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const isHe = currentLang === "he";
    const t = TRANSLATIONS[currentLang].projectsHeader;

    if (projectsList.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-dim);">${isHe ? 'לא נמצאו פרויקטים תואמים.' : 'No matching projects found.'}</div>`;
        return;
    }

    grid.innerHTML = projectsList.map(project => {
        const title = (isHe && project.he?.title) ? project.he.title : project.title;
        const desc = (isHe && project.he?.description) ? project.he.description : project.description;
        const badge = (isHe && project.he?.badge) ? project.he.badge : (project.badge || project.tag);

        return `
            <div class="project-card" data-category="${project.category}">
                <div class="card-top">
                    <div class="card-meta">
                        <span class="card-badge">${badge}</span>
                        <div class="card-icon-box">
                            <i data-lucide="${project.icon || 'code-2'}"></i>
                        </div>
                    </div>
                    <h3 class="project-title">${title}</h3>
                    <p class="project-desc">${desc}</p>
                    <div class="tech-tags">
                        ${project.tech.map(tch => `<span class="tech-tag">${tch}</span>`).join("")}
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="btn btn-primary btn-sm" onclick="openProjectModal('${project.id}')">
                        <i data-lucide="info"></i> ${t.details}
                    </button>
                    ${project.demo && project.demo !== '#' && !project.demo.includes('github.com') && !project.demo.startsWith('#') ? `
                        <a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-glass btn-sm" style="color:var(--accent-emerald); border-color:rgba(52,211,153,0.3);">
                            <i data-lucide="external-link"></i> ${t.liveDemo}
                        </a>
                    ` : project.isPlayable ? `
                        <button class="btn btn-glass btn-sm" onclick="${project.id === 'chidat-hayom' ? 'openRiddleModal()' : 'openGameModal()'}" style="${project.id === 'chidat-hayom' ? 'border-color: rgba(124, 58, 237, 0.5); color: #c084fc;' : ''}">
                            <i data-lucide="${project.id === 'chidat-hayom' ? 'help-circle' : 'play'}"></i> ${project.id === 'chidat-hayom' ? t.playRiddle : t.playGame}
                        </button>
                    ` : project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-glass btn-sm">
                            <i data-lucide="github"></i> ${t.code}
                        </a>
                    ` : `
                        <span class="btn btn-glass btn-sm" style="opacity:0.6; cursor:default;">
                            <i data-lucide="lock"></i> ${t.privateSystem}
                        </span>
                    `}
                </div>
            </div>
        `;
    }).join("");

    if (window.lucide) lucide.createIcons();
}

// Filter Tabs Logic
function initFilterTabs() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");
            const searchInput = document.getElementById("project-search");
            const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
            const isHe = currentLang === "he";

            const filtered = PORTFOLIO_DATA.projects.filter(p => {
                const matchesCategory = filter === "all" || p.category === filter;
                const pTitle = (isHe && p.he?.title) ? p.he.title : p.title;
                const pDesc = (isHe && p.he?.description) ? p.he.description : p.description;
                const matchesQuery = !query ||
                    pTitle.toLowerCase().includes(query) ||
                    pDesc.toLowerCase().includes(query) ||
                    p.tech.some(tch => tch.toLowerCase().includes(query));
                return matchesCategory && matchesQuery;
            });
            renderProjects(filtered);
        });
    });
}

// Real-time Search Logic
function initSearch() {
    const searchInput = document.getElementById("project-search");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const activeTab = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
        const isHe = currentLang === "he";

        const filtered = PORTFOLIO_DATA.projects.filter(p => {
            const matchesCategory = activeTab === "all" || p.category === activeTab;
            const pTitle = (isHe && p.he?.title) ? p.he.title : p.title;
            const pDesc = (isHe && p.he?.description) ? p.he.description : p.description;
            const matchesQuery = !query ||
                pTitle.toLowerCase().includes(query) ||
                pDesc.toLowerCase().includes(query) ||
                p.tech.some(tch => tch.toLowerCase().includes(query));
            return matchesCategory && matchesQuery;
        });

        renderProjects(filtered);
    });
}

// Render Skills Matrix
function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
        <div class="skill-category-card">
            <h3 class="category-title">
                <i data-lucide="${cat.icon}"></i> ${cat.name}
            </h3>
            <div class="skill-list">
                ${cat.skills.map(s => `
                    <div class="skill-item">
                        <div class="skill-item-header">
                            <span>${s.name}</span>
                            <span class="skill-pct">${s.level}%</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-bar" style="width: ${s.level}%;"></div>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// Render Experience Timeline
function renderExperience() {
    const container = document.getElementById("experience-timeline");
    if (!container) return;
    const isHe = currentLang === "he";

    container.innerHTML = PORTFOLIO_DATA.experience.map(exp => {
        const role = (isHe && exp.he?.role) ? exp.he.role : exp.role;
        const company = (isHe && exp.he?.company) ? exp.he.company : exp.company;
        const location = (isHe && exp.he?.location) ? exp.he.location : exp.location;
        const tag = (isHe && exp.he?.tag) ? exp.he.tag : exp.tag;
        const highlights = (isHe && exp.he?.highlights) ? exp.he.highlights : exp.highlights;

        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <div>
                            <h4 class="timeline-role">${role}</h4>
                            <span class="timeline-company">${company}</span>
                            <span class="timeline-period">• ${exp.period} (${location})</span>
                        </div>
                        <span class="card-badge" style="background: rgba(99, 102, 241, 0.1); color: var(--accent-indigo); border-color: rgba(99, 102, 241, 0.25);">${tag}</span>
                    </div>
                    <ul class="timeline-bullets">
                        ${highlights.map(h => `<li>${h}</li>`).join("")}
                    </ul>
                    <div class="tech-tags" style="margin-top: 1rem; margin-bottom: 0;">
                        ${exp.tech.map(tch => `<span class="tech-tag">${tch}</span>`).join("")}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Render AI-Augmented Engineering Workflows
function renderAIWorkflows() {
    const container = document.getElementById("ai-workflows-grid");
    if (!container) return;
    const isHe = currentLang === "he";

    container.innerHTML = PORTFOLIO_DATA.aiWorkflows.map(item => {
        const title = (isHe && item.he?.title) ? item.he.title : item.title;
        const desc = (isHe && item.he?.desc) ? item.he.desc : item.desc;

        return `
            <div class="leadership-card">
                <div class="leadership-header">
                    <i data-lucide="${item.icon}"></i>
                    <span>${title}</span>
                </div>
                <div class="leadership-sub">${item.tech}</div>
                <p class="leadership-desc">${desc}</p>
            </div>
        `;
    }).join("");
}

// Render Education
function renderEducation() {
    const container = document.getElementById("education-grid");
    if (!container) return;
    const isHe = currentLang === "he";

    container.innerHTML = PORTFOLIO_DATA.education.map(edu => {
        const degree = (isHe && edu.he?.degree) ? edu.he.degree : edu.degree;
        const institution = (isHe && edu.he?.institution) ? edu.he.institution : edu.institution;
        const note = (isHe && edu.he?.note) ? edu.he.note : edu.note;

        return `
            <div class="leadership-card">
                <div class="leadership-header">
                    <i data-lucide="graduation-cap"></i>
                    <span>${degree}</span>
                </div>
                <div class="leadership-sub">${institution} • ${edu.period}</div>
                <p class="leadership-desc">${note}</p>
            </div>
        `;
    }).join("");
}

// Render Contact Pills
function renderContact() {
    const container = document.getElementById("contact-links");
    if (!container) return;
    const p = PORTFOLIO_DATA.profile;
    const isHe = currentLang === "he";

    container.innerHTML = `
        <div class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="mail"></i>
                <span>${p.email}</span>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${p.email}', '${isHe ? 'המייל הועתק ללוח!' : 'Email copied!'}')">${isHe ? 'העתק' : 'Copy'}</button>
        </div>
        <div class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="phone"></i>
                <span>${p.phone}</span>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${p.phone}', '${isHe ? 'מספר הטלפון הועתק ללוח!' : 'Phone copied!'}')">${isHe ? 'העתק' : 'Copy'}</button>
        </div>
        <a href="${p.linkedin}" target="_blank" rel="noopener" class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="linkedin"></i>
                <span>${isHe ? 'פרופיל לינקדאין (LinkedIn)' : 'LinkedIn Profile'}</span>
            </div>
            <i data-lucide="external-link" style="width:16px;height:16px;"></i>
        </a>
        <a href="${p.github}" target="_blank" rel="noopener" class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="github"></i>
                <span>${isHe ? 'פרופיל GitHub ציבורי' : 'GitHub Repositories'}</span>
            </div>
            <i data-lucide="external-link" style="width:16px;height:16px;"></i>
        </a>
    `;
}

// Modal Control
window.openProjectModal = function(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-body-content");
    if (!modal || !content) return;

    const isHe = currentLang === "he";
    const t = TRANSLATIONS[currentLang].projectsHeader;

    const title = (isHe && project.he?.title) ? project.he.title : project.title;
    const desc = (isHe && project.he?.longDesc) ? project.he.longDesc : (project.longDesc || project.description);
    const badge = (isHe && project.he?.badge) ? project.he.badge : (project.badge || project.tag);
    const status = (isHe && project.he?.status) ? project.he.status : project.status;

    content.innerHTML = `
        <div style="margin-bottom: 1.5rem; text-align: ${isHe ? 'right' : 'left'};" dir="${isHe ? 'rtl' : 'ltr'}">
            <span class="card-badge" style="margin-bottom:0.75rem; display:inline-block;">${badge}</span>
            <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem;">${title}</h2>
            <div style="color: var(--primary); font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 1rem;">${isHe ? 'סטטוס:' : 'Status:'} ${status}</div>
        </div>
        <div style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem; text-align: ${isHe ? 'right' : 'left'};" dir="${isHe ? 'rtl' : 'ltr'}">
            ${desc}
        </div>
        <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); text-align: ${isHe ? 'right' : 'left'};">${isHe ? 'ארכיטקטורה וסטאק טכנולוגי' : 'Tech Stack Architecture'}</h4>
        <div class="tech-tags" style="margin-bottom: 2rem;">
            ${project.tech.map(tch => `<span class="tech-tag" style="padding: 0.35rem 0.8rem; font-size: 0.82rem;">${tch}</span>`).join("")}
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:1rem; ${isHe ? 'flex-direction:row-reverse; justify-content:flex-start;' : ''}">
            ${project.demo && project.demo !== '#' && !project.demo.includes('github.com') && !project.demo.startsWith('#') ? `<a href="${project.demo}" target="_blank" class="btn btn-primary" style="background:linear-gradient(135deg, var(--accent-emerald), #059669); color:#040810;"><i data-lucide="external-link"></i> ${isHe ? 'פתח מערכת חיה' : 'Open Live Application'}</a>` : ''}
            ${project.github ? `<a href="${project.github}" target="_blank" class="btn ${project.demo && project.demo !== '#' && !project.demo.includes('github.com') && !project.demo.startsWith('#') ? 'btn-glass' : 'btn-primary'}"><i data-lucide="github"></i> ${isHe ? 'צפה בקוד ב-GitHub' : 'View GitHub Repository'}</a>` : ''}
            ${project.isPlayable ? `<button onclick="closeModal(); ${project.id === 'chidat-hayom' ? 'openRiddleModal()' : 'openGameModal()'};" class="btn btn-glass" style="${project.id === 'chidat-hayom' ? 'border-color: rgba(124, 58, 237, 0.6); color: #c084fc;' : ''}"><i data-lucide="${project.id === 'chidat-hayom' ? 'help-circle' : 'gamepad-2'}"></i> ${project.id === 'chidat-hayom' ? (isHe ? 'שחק בחידה' : 'Play Riddle Online') : (isHe ? 'הפעל מיני-משחק' : 'Launch Mini-Game')}</button>` : ''}
        </div>
    `;

    modal.classList.add("active");
    if (window.lucide) lucide.createIcons();
};

window.closeModal = function() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    if (window.stopMiniGame) window.stopMiniGame();
    if (typeof riddleTimerInterval !== "undefined" && riddleTimerInterval) {
        clearInterval(riddleTimerInterval);
    }
};

// Scroll Navbar Effect
function initScrollEffects() {
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
}

// ==========================================
// Embedded Cyber Defense Mini-Game Engine
// ==========================================
let gameLoopId = null;
window.openGameModal = function() {
    const gameModal = document.getElementById("game-modal");
    if (!gameModal) return;
    gameModal.classList.add("active");
    startGame();
};

function startGame() {
    const canvas = document.getElementById("game-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.parentElement.clientWidth || 600;
    canvas.height = 320;

    let score = 0;
    let health = 100;
    let threats = [];
    let bullets = [];
    let player = { x: canvas.width / 2, y: canvas.height - 35, size: 22, speed: 6 };
    let keys = {};

    window.addEventListener("keydown", e => keys[e.key] = true);
    window.addEventListener("keyup", e => keys[e.key] = false);

    // Threat types
    const threatTypes = [
        { label: "DDoS", color: "#f43f5e", speed: 1.5, points: 20 },
        { label: "SQLi", color: "#fbbf24", speed: 2.2, points: 30 },
        { label: "XSS", color: "#a855f7", speed: 2.8, points: 50 }
    ];

    let spawnTimer = 0;
    let shootCooldown = 0;

    function gameUpdate() {
        // Player movement
        if (keys["ArrowLeft"] || keys["a"] || keys["A"]) player.x = Math.max(player.size, player.x - player.speed);
        if (keys["ArrowRight"] || keys["d"] || keys["D"]) player.x = Math.min(canvas.width - player.size, player.x + player.speed);

        // Auto/Key shoot
        if ((keys[" "] || keys["ArrowUp"] || keys["w"]) && shootCooldown <= 0) {
            bullets.push({ x: player.x, y: player.y - 10, speed: 7 });
            shootCooldown = 12;
        }
        if (shootCooldown > 0) shootCooldown--;

        // Spawn threats
        spawnTimer++;
        if (spawnTimer % 45 === 0) {
            const type = threatTypes[Math.floor(Math.random() * threatTypes.length)];
            threats.push({
                x: Math.random() * (canvas.width - 60) + 30,
                y: -20,
                ...type
            });
        }

        // Update bullets
        for (let i = bullets.length - 1; i >= 0; i--) {
            bullets[i].y -= bullets[i].speed;
            if (bullets[i].y < 0) bullets.splice(i, 1);
        }

        // Update threats & collision
        for (let i = threats.length - 1; i >= 0; i--) {
            const t = threats[i];
            t.y += t.speed;

            // Check hit with bullet
            for (let j = bullets.length - 1; j >= 0; j--) {
                const b = bullets[j];
                const dist = Math.hypot(b.x - t.x, b.y - t.y);
                if (dist < 18) {
                    score += t.points;
                    threats.splice(i, 1);
                    bullets.splice(j, 1);
                    break;
                }
            }

            // Hit bottom / firewall
            if (t && t.y > canvas.height - 20) {
                health -= 15;
                threats.splice(i, 1);
            }
        }

        // Draw Canvas Frame
        ctx.fillStyle = "#050811";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw Grid lines
        ctx.strokeStyle = "rgba(56, 189, 248, 0.05)";
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 30) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // Draw Firewall Baseline
        ctx.strokeStyle = health > 30 ? "#38bdf8" : "#f43f5e";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 15);
        ctx.lineTo(canvas.width, canvas.height - 15);
        ctx.stroke();

        // Draw Player (Cyber Node)
        ctx.fillStyle = "#38bdf8";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#38bdf8";
        ctx.beginPath();
        ctx.arc(player.x, player.y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw Bullets
        ctx.fillStyle = "#34d399";
        bullets.forEach(b => {
            ctx.fillRect(b.x - 2, b.y - 6, 4, 10);
        });

        // Draw Threats
        threats.forEach(t => {
            ctx.fillStyle = t.color;
            ctx.font = "11px 'JetBrains Mono', monospace";
            ctx.fillText(`[${t.label}]`, t.x - 18, t.y);
        });

        // Update Score / Health HUD
        const scoreElem = document.getElementById("game-score");
        const healthElem = document.getElementById("game-health");
        if (scoreElem) scoreElem.textContent = score;
        if (healthElem) healthElem.textContent = Math.max(0, health) + "%";

        if (health <= 0) {
            ctx.fillStyle = "rgba(244, 63, 94, 0.85)";
            ctx.font = "bold 20px 'Outfit', sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("FIREWALL BREACHED! GAME OVER", canvas.width / 2, canvas.height / 2);
            return;
        }

        gameLoopId = requestAnimationFrame(gameUpdate);
    }

    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    gameUpdate();
}

window.stopMiniGame = function() {
    if (gameLoopId) cancelAnimationFrame(gameLoopId);
};

// Clipboard & Toast Helper
window.copyToClipboard = function(text, successMsg = "Copied to clipboard!") {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg);
        }).catch(() => {
            fallbackCopy(text, successMsg);
        });
    } else {
        fallbackCopy(text, successMsg);
    }
};

function fallbackCopy(text, successMsg) {
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand("copy");
        showToast(successMsg);
    } catch (err) {
        showToast("Error copying text");
    }
    document.body.removeChild(input);
}

window.showToast = function(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    const textSpan = toast.querySelector(".toast-text");
    if (textSpan) textSpan.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
};

// ==========================================
// Chidat HaYom - Interactive Riddle Engine
// ==========================================
const RIDDLES_DATA = [
    {
        id: 1,
        title: "שני חבלי בערה (45 דקות)",
        question: "לרשותך 2 חבלים לא אחידים. כל חבל נשרף במלואו בדיוק תוך 60 דקות, אך קצב הבערה אינו קבוע (למשל, חצי חבל לאו דווקא יישרף ב-30 דקות). כיצד ניתן למדוד בדיוק 45 דקות בעזרת שני החבלים ומצית?",
        answers: ["45", "להדליק משני הצדדים", "שני קצוות", "חבל ראשון משני צדדים", "להדליק את שני הקצוות", "מדליקים משני הקצוות", "קצה נוסף"],
        hint: "רמז: אם תדליק חבל אחד משני קצותיו בו-זמנית, כמה זמן ייקח לו להישרף לחלוטין?",
        explanation: "פתרון אלגנטי: מדליקים את חבל א' משני קצותיו, ובאותו רגע מדליקים את חבל ב' מקצה אחד בלבד. לאחר 30 דקות בדיוק, חבל א' יתכלה לחלוטין, ולחבל ב' יישארו בדיוק 30 דקות בערה. באותו שבריר שנייה מדליקים גם את הקצה השני של חבל ב'! הוא יישרף תוך 15 דקות נוספות. סה\"כ זמן שעבר: 30 + 15 = 45 דקות בדיוק."
    },
    {
        id: 2,
        title: "9 מטבעות ומאזניים (מטבע מזויף קל)",
        question: "ישנם 9 מטבעות זהים לחלוטין במראם. 8 מהם בעלי משקל זהה, ואחד מהם מזויף וקל יותר. מהו מספר השקילות המינימלי במאזני כף הדרוש כדי לגלות בוודאות את המטבע המזויף?",
        answers: ["2", "שתיים", "2 שקילות", "שתי שקילות", "two"],
        hint: "רמז: האם חייבים לשקול את כל המטבעות בבת אחת? נסה לחלק את המטבעות ל-3 קבוצות שוות (שלישיות).",
        explanation: "פתרון: 2 שקילות בלבד! מחלקים ל-3 קבוצות של 3 מטבעות. שקילה 1: שוקלים 3 מול 3. אם שקולים – המזויף בשלישייה הנותרת; אם נוטים – המזויף בכף הקלה. כעת נותרו 3 מטבעות. שקילה 2: שוקלים 1 מול 1. אם שקולים – השלישי שלא נשקל הוא המזויף; אם לא – הקל מביניהם הוא המזויף."
    },
    {
        id: 3,
        title: "מדידת 4 ליטרים עם 3 ו-5 ליטר",
        question: "לרשותך ברז מים ללא הגבלה ושני דליים ללא שנתות: דלי של 3 ליטרים ודלי של 5 ליטרים. כיצד תוכל למדוד בדיוק 4 ליטרים?",
        answers: ["4", "למלא את ה-5", "למלא את ה-3", "4 ליטר", "ארבעה ליטר", "ארבע"],
        hint: "רמז: מלא את דלי 5 הליטרים ורוקן ממנו מים לתוך דלי 3 הליטרים, שים לב לכמות הנותרת.",
        explanation: "פתרון: ממלאים את דלי ה-5 ליטר עד סופו. שופכים ממנו לדלי ה-3 ליטר עד שהוא מתמלא (בדלי ה-5 נשארו 2 ליטר). מרוקנים את דלי ה-3 ליטר לחלוטין, ושופכים לתוכו את 2 הליטרים מדלי ה-5. כעת ממלאים שוב את דלי ה-5 עד סופו, ומוזגים ממנו לדלי ה-3 (שמכיל 2 ליטר, ולכן ייכנס בו רק 1 ליטר נוסף). בדלי ה-5 נשארו בדיוק 4 ליטר!"
    }
];

let currentRiddleIndex = 0;
let riddleTimer = 0;
let riddleTimerInterval = null;

window.openRiddleModal = function(index = 0) {
    const modal = document.getElementById("riddle-modal");
    if (!modal) return;
    currentRiddleIndex = index % RIDDLES_DATA.length;
    renderCurrentRiddle();
    modal.classList.add("active");
    startRiddleTimer();
};

function startRiddleTimer() {
    if (riddleTimerInterval) clearInterval(riddleTimerInterval);
    riddleTimer = 0;
    updateRiddleTimerDisplay();
    riddleTimerInterval = setInterval(() => {
        riddleTimer++;
        updateRiddleTimerDisplay();
    }, 1000);
}

function updateRiddleTimerDisplay() {
    const timerEl = document.getElementById("riddle-timer");
    if (!timerEl) return;
    const mins = String(Math.floor(riddleTimer / 60)).padStart(2, "0");
    const secs = String(riddleTimer % 60).padStart(2, "0");
    timerEl.textContent = `${mins}:${secs}`;
}

function renderCurrentRiddle() {
    const riddle = RIDDLES_DATA[currentRiddleIndex];
    const titleEl = document.getElementById("riddle-title");
    const contentEl = document.getElementById("riddle-content-box");
    const inputEl = document.getElementById("riddle-user-answer");
    const feedbackEl = document.getElementById("riddle-feedback");
    const hintEl = document.getElementById("riddle-hint-box");
    const solutionEl = document.getElementById("riddle-solution-box");

    if (titleEl) titleEl.textContent = `חידת היום #${riddle.id} — ${riddle.title}`;
    if (contentEl) contentEl.innerHTML = `<p style="margin: 0; font-weight: 500;">${riddle.question}</p>`;
    if (inputEl) {
        inputEl.value = "";
        inputEl.focus();
    }
    if (feedbackEl) {
        feedbackEl.innerHTML = "";
        feedbackEl.style.color = "";
    }
    if (hintEl) {
        hintEl.style.display = "none";
        hintEl.textContent = "";
    }
    if (solutionEl) {
        solutionEl.style.display = "none";
        solutionEl.innerHTML = "";
    }
}

window.checkRiddleAnswer = function() {
    const riddle = RIDDLES_DATA[currentRiddleIndex];
    const inputEl = document.getElementById("riddle-user-answer");
    const feedbackEl = document.getElementById("riddle-feedback");
    const solutionEl = document.getElementById("riddle-solution-box");
    const modalDialog = document.querySelector("#riddle-modal .modal-dialog");

    if (!inputEl || !feedbackEl) return;
    const userVal = inputEl.value.trim().toLowerCase();

    if (!userVal) {
        feedbackEl.textContent = "אנא הקלד/י תשובה לבדיקה...";
        feedbackEl.style.color = "var(--accent-amber)";
        return;
    }

    const isCorrect = riddle.answers.some(ans => userVal.includes(ans.toLowerCase()));

    if (isCorrect) {
        if (riddleTimerInterval) clearInterval(riddleTimerInterval);
        feedbackEl.innerHTML = "🎉 תשובה נכונה ומבריקה! כל הכבוד!";
        feedbackEl.style.color = "var(--accent-emerald)";
        if (solutionEl) {
            solutionEl.style.display = "block";
            solutionEl.innerHTML = `<b>הסבר לוגי מלא:</b><br>${riddle.explanation}`;
        }
        if (typeof confetti === "function") {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else {
        feedbackEl.innerHTML = "❌ לא מדויק, נסה/י שוב או היעזר/י ברמז!";
        feedbackEl.style.color = "var(--accent-rose)";
        if (modalDialog) {
            modalDialog.classList.remove("shake-animation");
            void modalDialog.offsetWidth; // trigger reflow
            modalDialog.classList.add("shake-animation");
        }
    }
};

window.showRiddleHint = function() {
    const riddle = RIDDLES_DATA[currentRiddleIndex];
    const hintEl = document.getElementById("riddle-hint-box");
    if (!hintEl) return;
    hintEl.style.display = "block";
    hintEl.textContent = riddle.hint;
};

window.loadNextRiddle = function() {
    currentRiddleIndex = (currentRiddleIndex + 1) % RIDDLES_DATA.length;
    renderCurrentRiddle();
    startRiddleTimer();
};

