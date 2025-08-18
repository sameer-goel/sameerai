// Shared Navigation Component for Digital Consciousness
function createCosmicNavigation(activePage = '') {
    return `
    <!-- Cosmic Navigation Menu -->
    <div class="cosmic-nav">
        <div class="nav-toggle" onclick="toggleNavMenu()">☰</div>
        <div class="nav-menu" id="navMenu">
            <a href="../index.html" class="nav-item nav-home">Digital Consciousness</a>
            
            <div class="nav-section">
                <div class="nav-section-title">Artificial Intelligence</div>
                <a href="research.html" class="nav-item ${activePage === 'research' ? 'active' : ''}">Research</a>
                <a href="development.html" class="nav-item ${activePage === 'development' ? 'active' : ''}">Development</a>
                <a href="ethics.html" class="nav-item ${activePage === 'ethics' ? 'active' : ''}">Ethics</a>
            </div>
            
            <div class="nav-section">
                <div class="nav-section-title">Inner Intelligence</div>
                <a href="mind.html" class="nav-item ${activePage === 'mind' ? 'active' : ''}">Mind</a>
                <a href="body.html" class="nav-item ${activePage === 'body' ? 'active' : ''}">Body</a>
                <a href="soul.html" class="nav-item ${activePage === 'soul' ? 'active' : ''}">Soul</a>
            </div>
        </div>
    </div>`;
}

// Navigation functionality
function toggleNavMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Initialize navigation
function initializeNavigation(activePage = '') {
    document.body.insertAdjacentHTML('afterbegin', createCosmicNavigation(activePage));
    
    // Close nav menu when clicking outside
    document.addEventListener('click', function(event) {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu && navToggle && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
}