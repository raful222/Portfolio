// Main Application Controller & Interactions
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Profile & Stats
    renderProfile();
    renderStats();
    
    // 2. Initialize Projects & Filters
    renderProjects(PORTFOLIO_DATA.projects);
    initFilterTabs();
    initSearch();

    // 3. Initialize Skills & Experience
    renderSkills();
    renderExperience();
    renderAIWorkflows();
    renderEducation();
    renderContact();

    // 4. Lucide Icons render
    if (window.lucide) {
        lucide.createIcons();
    }

    // 5. Scroll effects
    initScrollEffects();
});

// Render Profile Header & Hero
function renderProfile() {
    const p = PORTFOLIO_DATA.profile;
    const heroName = document.getElementById("hero-name");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const heroBio = document.getElementById("hero-bio");
    const statusText = document.getElementById("status-text");

    if (heroName) heroName.textContent = p.name;
    if (heroSubtitle) heroSubtitle.textContent = p.title;
    if (heroBio) heroBio.textContent = p.bio;
    if (statusText) statusText.textContent = p.status;
}

// Render Stats Cards
function renderStats() {
    const container = document.getElementById("stats-grid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.stats.map(s => `
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

    if (projectsList.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-dim);">No matching projects found.</div>`;
        return;
    }

    grid.innerHTML = projectsList.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="card-top">
                <div class="card-meta">
                    <span class="card-badge">${project.badge || project.tag}</span>
                    <div class="card-icon-box">
                        <i data-lucide="${project.icon || 'code-2'}"></i>
                    </div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="tech-tags">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                </div>
            </div>
            
            <div class="card-actions">
                <button class="btn btn-primary btn-sm" onclick="openProjectModal('${project.id}')">
                    <i data-lucide="info"></i> Details
                </button>
                ${project.demo && project.demo !== '#' && !project.demo.includes('github.com') ? `
                    <a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-glass btn-sm" style="color:var(--accent-emerald); border-color:rgba(52,211,153,0.3);">
                        <i data-lucide="external-link"></i> Live Demo
                    </a>
                ` : project.isPlayable ? `
                    <button class="btn btn-glass btn-sm" onclick="openGameModal()">
                        <i data-lucide="play"></i> Play Game
                    </button>
                ` : project.github ? `
                    <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-glass btn-sm">
                        <i data-lucide="github"></i> Code
                    </a>
                ` : `
                    <span class="btn btn-glass btn-sm" style="opacity:0.6; cursor:default;">
                        <i data-lucide="lock"></i> Private System
                    </span>
                `}
            </div>
        </div>
    `).join("");

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
            if (filter === "all") {
                renderProjects(PORTFOLIO_DATA.projects);
            } else {
                const filtered = PORTFOLIO_DATA.projects.filter(p => p.category === filter);
                renderProjects(filtered);
            }
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
        
        const filtered = PORTFOLIO_DATA.projects.filter(p => {
            const matchesCategory = activeTab === "all" || p.category === activeTab;
            const matchesQuery = p.title.toLowerCase().includes(query) ||
                                 p.description.toLowerCase().includes(query) ||
                                 p.tech.some(t => t.toLowerCase().includes(query));
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

    container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h4 class="timeline-role">${exp.role}</h4>
                <div>
                    <span class="timeline-company">${exp.company}</span>
                    <span class="timeline-period">• ${exp.period} (${exp.location})</span>
                </div>
                <ul class="timeline-bullets">
                    ${exp.highlights.map(h => `<li>${h}</li>`).join("")}
                </ul>
                <div class="tech-tags" style="margin-top: 1rem; margin-bottom: 0;">
                    ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

// Render AI-Augmented Engineering Workflows
function renderAIWorkflows() {
    const container = document.getElementById("ai-workflows-grid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.aiWorkflows.map(item => `
        <div class="leadership-card">
            <div class="leadership-header">
                <i data-lucide="${item.icon}"></i>
                <span>${item.title}</span>
            </div>
            <div class="leadership-sub">${item.tech}</div>
            <p class="leadership-desc">${item.desc}</p>
        </div>
    `).join("");
}

// Render Education
function renderEducation() {
    const container = document.getElementById("education-grid");
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
        <div class="leadership-card">
            <div class="leadership-header">
                <i data-lucide="graduation-cap"></i>
                <span>${edu.degree}</span>
            </div>
            <div class="leadership-sub">${edu.institution} • ${edu.period}</div>
            <p class="leadership-desc">${edu.note}</p>
        </div>
    `).join("");
}

// Render Contact Pills
function renderContact() {
    const container = document.getElementById("contact-links");
    if (!container) return;
    const p = PORTFOLIO_DATA.profile;

    container.innerHTML = `
        <div class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="mail"></i>
                <span>${p.email}</span>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${p.email}', 'Email copied!')">Copy</button>
        </div>
        <div class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="phone"></i>
                <span>${p.phone}</span>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${p.phone}', 'Phone copied!')">Copy</button>
        </div>
        <a href="${p.linkedin}" target="_blank" rel="noopener" class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="linkedin"></i>
                <span>LinkedIn Profile</span>
            </div>
            <i data-lucide="external-link" style="width:16px;height:16px;"></i>
        </a>
        <a href="${p.github}" target="_blank" rel="noopener" class="contact-pill-item">
            <div class="contact-pill-label">
                <i data-lucide="github"></i>
                <span>GitHub Repositories</span>
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

    content.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <span class="card-badge" style="margin-bottom:0.75rem; display:inline-block;">${project.badge || project.tag}</span>
            <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem;">${project.title}</h2>
            <div style="color: var(--primary); font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 1rem;">Status: ${project.status}</div>
        </div>
        <div style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
            ${project.longDesc || project.description}
        </div>
        <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim);">Tech Stack Architecture</h4>
        <div class="tech-tags" style="margin-bottom: 2rem;">
            ${project.tech.map(t => `<span class="tech-tag" style="padding: 0.35rem 0.8rem; font-size: 0.82rem;">${t}</span>`).join("")}
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:1rem;">
            ${project.demo && project.demo !== '#' && !project.demo.includes('github.com') ? `<a href="${project.demo}" target="_blank" class="btn btn-primary" style="background:linear-gradient(135deg, var(--accent-emerald), #059669); color:#040810;"><i data-lucide="external-link"></i> Open Live Application</a>` : ''}
            ${project.github ? `<a href="${project.github}" target="_blank" class="btn ${project.demo && project.demo !== '#' && !project.demo.includes('github.com') ? 'btn-glass' : 'btn-primary'}"><i data-lucide="github"></i> View GitHub Repository</a>` : ''}
            ${project.isPlayable ? `<button onclick="closeModal(); openGameModal();" class="btn btn-glass"><i data-lucide="gamepad-2"></i> Launch Mini-Game</button>` : ''}
        </div>
    `;

    modal.classList.add("active");
    if (window.lucide) lucide.createIcons();
};

window.closeModal = function() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
    if (window.stopMiniGame) window.stopMiniGame();
};

// Clipboard & Toast
window.copyToClipboard = function(text, msg) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(msg || "Copied to clipboard!");
    });
};

function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.querySelector(".toast-text").textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

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
