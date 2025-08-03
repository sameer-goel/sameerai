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
    // Floating icon clicks - navigate to separate pages
    document.querySelectorAll('.icon-container').forEach(container => {
        container.addEventListener('click', function() {
            const realm = this.dataset.realm;
            if (realm === 'ai') {
                window.location.href = 'science-of-ai.html';
            } else if (realm === 'soul') {
                window.location.href = 'science-of-soul.html';
            }
        });
    });
}

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const icons = document.querySelectorAll('.floating-icon');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    icons.forEach((icon, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        icon.style.transform = `translate(${x}px, ${y}px) translateY(-10px)`;
    });
});

// Reset icon positions when mouse leaves
document.addEventListener('mouseleave', function() {
    const icons = document.querySelectorAll('.floating-icon');
    icons.forEach(icon => {
        icon.style.transform = '';
    });
});