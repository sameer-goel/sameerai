// Atomic Portal - Main Homepage Script

// Initialize the portal
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupEventListeners();
});

// Create floating particles background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

// Setup event listeners
function setupEventListeners() {

    // Realm section clicks - navigate to separate pages
    document.querySelectorAll('.realm-section').forEach(section => {
        section.addEventListener('click', function() {
            const realm = this.dataset.realm;
            if (realm === 'ai') {
                window.location.href = 'work.html';
            } else if (realm === 'soul') {
                window.location.href = 'life.html';
            }
        });
    });
}



// Add subtle mouse interaction effects for realm sections
document.addEventListener('mousemove', function(e) {
    const realmSections = document.querySelectorAll('.realm-section');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    realmSections.forEach((section, index) => {
        const speed = (index + 1) * 0.2;
        const x = (mouseX - 0.5) * speed * 3;
        const y = (mouseY - 0.5) * speed * 3;
        
        if (!section.matches(':hover')) {
            section.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});