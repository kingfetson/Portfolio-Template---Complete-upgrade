/* ========================================
   LOAD CONFIGURATION FROM config.js
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Check if config is loaded
    if (typeof portfolioConfig !== 'undefined') {
        initializePortfolio();
    } else {
        console.warn('config.js not loaded. Using default HTML content.');
    }
});

function initializePortfolio() {
    const config = portfolioConfig;

    // ===== UPDATE PERSONAL INFO =====
    document.querySelector('.logo-name').textContent = config.personal.name;
    document.querySelector('.footer-name').textContent = config.personal.name;
    document.getElementById('hero-title').textContent = config.personal.title;
    document.getElementById('hero-tagline').innerHTML = config.personal.tagline.replace(
        /(elegant solutions|amazing results|great experiences)/i, 
        '<span class="highlight">$1</span>'
    );
    document.getElementById('hero-description').textContent = config.personal.description;
    document.getElementById('contact-email').href = `mailto:${config.personal.email}`;
    document.getElementById('contact-email').textContent = `Send Me an Email`;

    // Show/hide availability badge
    const badge = document.getElementById('availability-badge');
    if (config.personal.availableForWork) {
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }

    // ===== UPDATE STATS =====
    const statsContainer = document.getElementById('hero-stats');
    statsContainer.innerHTML = config.stats.map(stat => `
        <div class="stat-item">
            <h3>${stat.number}</h3>
            <span>${stat.label}</span>
        </div>
    `).join('');

    // ===== UPDATE SKILLS =====
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = config.skills.map(skill => `
        <div class="skill-category">
            <h3><i class="fas fa-${skill.icon}"></i> ${skill.category}</h3>
            <div class="skill-tags">
                ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // ===== UPDATE PROJECTS =====
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = config.projects.map((project, index) => `
        <article class="project-card" 
            data-title="${project.title}"
            data-desc="${project.description}"
            data-metric1="${project.metrics[0]}"
            data-metric2="${project.metrics[1]}"
            data-tools="${project.tools.join(', ')}"
            data-github="${project.github}"
            data-live="${project.live}">
            
            <div class="project-visual" style="background-image: url('${project.image}');">
                <div class="project-overlay">
                    <span class="btn-sm">View Details</span>
                </div>
            </div>
            <div class="project-details">
                <div class="project-tools">
                    ${project.tools.slice(0, 2).map(tool => `<span class="tool-pill">${tool}</span>`).join('')}
                </div>
                <h3>${project.title}</h3>
                <p class="project-desc">${project.description.substring(0, 100)}...</p>
                <div class="project-links">
                    <span class="link-text">View Details <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </article>
    `).join('');

    // ===== UPDATE SOCIAL LINKS =====
    const socialContainer = document.getElementById('social-links');
    const socialIcons = {
        github: 'fa-github',
        linkedin: 'fa-linkedin',
        twitter: 'fa-twitter',
        instagram: 'fa-instagram',
        dribbble: 'fa-dribbble'
    };

    socialContainer.innerHTML = Object.entries(config.social)
        .filter(([platform, url]) => url && url.trim() !== '')
        .map(([platform, url]) => `
            <a href="${url}" target="_blank" aria-label="${platform}">
                <i class="fab ${socialIcons[platform]}"></i>
            </a>
        `).join('');

    // ===== APPLY THEME COLORS =====
    if (config.theme) {
        const root = document.documentElement;
        root.style.setProperty('--primary', config.theme.primary);
        root.style.setProperty('--accent', config.theme.accent);
        root.style.setProperty('--gradient', config.theme.gradient);
    }

    // Re-initialize modal listeners (since projects are dynamically created)
    initializeModal();
    
    // Re-initialize animations
    initializeAnimations();
}

/* ========================================
   THEME TOGGLE (LIGHT/DARK MODE)
   ======================================== */
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

/* ========================================
   MOBILE NAVIGATION
   ======================================== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

/* ========================================
   PROJECT MODAL
   ======================================== */
function initializeModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalMetric1 = document.getElementById('modal-metric1');
    const modalMetric2 = document.getElementById('modal-metric2');
    const modalTools = document.getElementById('modal-tools');
    const modalGithubBtn = document.getElementById('modal-github-btn');
    const modalLiveBtn = document.getElementById('modal-live-btn');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const m1 = card.getAttribute('data-metric1');
            const m2 = card.getAttribute('data-metric2');
            const tools = card.getAttribute('data-tools');
            const github = card.getAttribute('data-github');
            const live = card.getAttribute('data-live');
            
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalMetric1.textContent = m1;
            modalMetric2.textContent = m2;
            modalGithubBtn.href = github;
            modalLiveBtn.href = live;
            
            modalTools.innerHTML = '';
            tools.split(',').forEach(tool => {
                const span = document.createElement('span');
                span.className = 'tool-pill';
                span.textContent = tool.trim();
                modalTools.appendChild(span);
            });
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-category, .project-card, .hero-content, .hero-image').forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
}

/* ========================================
   DYNAMIC YEAR IN FOOTER
   ======================================== */
document.getElementById('current-year').textContent = new Date().getFullYear();

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
