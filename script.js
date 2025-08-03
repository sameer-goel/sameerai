// Presentation data
const presentations = {
    ai: [
        {
            title: "Gen AI Gym for Employees",
            image: "presentations/genai-gym-for-employees-cover.png",
            link: "https://www.canva.com/design/DAGjGm-t5kk/Ndu7fQgbt2a_dUf7YY4KQw/view?utm_content=DAGjGm-t5kk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h49cf918239"
        },
        {
            title: "Generative Agents 2023",
            image: "presentations/Generative-Agents-Cover.png",
            link: "https://www.canva.com/design/DAFf1YZAEas/f4onYbk7YGrTy_yMIOLaYA/view?utm_content=DAFf1YZAEas&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h00d2c24cc5"
        },
        {
            title: "NLP Memory Techniques",
            image: "presentations/science-of-ai-menu.md", // Placeholder - will need actual image
            link: "https://www.canva.com/design/DAGYIhzD4ks/x_43pbxc35WT2N54ZaOVFQ/view?utm_content=DAGYIhzD4ks&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9ff8fdec21"
        },
        {
            title: "How to Cultivate Inner Intelligence using AI",
            image: "books/CultivateInerIntelleigenceUsingAI-cover.png",
            link: "https://www.canva.com/design/DAGT1-fee-4/oXT_UDn8gXHMD3jrfJHzmg/view?utm_content=DAGT1-fee-4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6b6dfb094d"
        }
    ],
    soul: [
        {
            title: "Have you ever asked these Questions?",
            image: "presentations/ever-asked-these-questions-cover.png",
            link: "https://www.canva.com/design/DAGhXAHIEoc/Z1f0cwmKxaYHFWx8yOjAuQ/view?utm_content=DAGhXAHIEoc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h97e6b8a160"
        },
        {
            title: "The Only way is Within",
            image: "presentations/science-of-soul-menu.md", // Placeholder - will need actual image
            link: "https://www.canva.com/design/DAGM9gegNfQ/dNT_Viy4lRdVII9w126pvw/watch?utm_content=DAGM9gegNfQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5967f2ec0e"
        },
        {
            title: "Science of AUM",
            image: "presentations/What is Truth about AUM-cover.png",
            link: "https://www.canva.com/design/DAGodhPO7X8/fZfd0qbuc1tej6ekIILrqg/view?utm_content=DAGodhPO7X8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h63e76ed27b"
        },
        {
            title: "Science of Universe",
            image: "presentations/science-of-aum-cover.png",
            link: "https://www.canva.com/design/DAGjs21lux8/iYE5dm3C1AlfNZxlAqFZZA/view?utm_content=DAGjs21lux8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0ab7ee9550"
        },
        {
            title: "NLP Memory Techniques",
            image: "presentations/science-of-soul-menu.md", // Placeholder - will need actual image
            link: "https://www.canva.com/design/DAGYIhzD4ks/x_43pbxc35WT2N54ZaOVFQ/view?utm_content=DAGYIhzD4ks&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9ff8fdec21"
        },
        {
            title: "Sacred Geometry",
            image: "presentations/science-of-spirituality-cover.png",
            link: "https://www.canva.com/design/DAGvAqrXyfc/kOPbnTa-OWCgiixZguBImw/view?utm_content=DAGvAqrXyfc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he27962a9d8"
        }
    ]
};

// Initialize the portal
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    setupEventListeners();
    loadPresentations();
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
    // Floating icon clicks
    document.querySelectorAll('.icon-container').forEach(container => {
        container.addEventListener('click', function() {
            const realm = this.dataset.realm;
            openModal(realm + '-modal');
        });
    });

    // Close button clicks
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            closeModal(modalId);
        });
    });

    // Close modal when clicking outside
    document.querySelectorAll('.realm-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });

    // Escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.realm-modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}

// Open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Load presentations into grids
function loadPresentations() {
    loadPresentationGrid('ai', 'ai-presentations');
    loadPresentationGrid('soul', 'soul-presentations');
}

function loadPresentationGrid(type, containerId) {
    const container = document.getElementById(containerId);
    const presentationList = presentations[type];

    presentationList.forEach(presentation => {
        const card = createPresentationCard(presentation);
        container.appendChild(card);
    });
}

function createPresentationCard(presentation) {
    const card = document.createElement('div');
    card.className = 'presentation-card';
    card.addEventListener('click', () => {
        window.open(presentation.link, '_blank');
    });

    // Check if image exists, otherwise use a placeholder
    const img = document.createElement('img');
    img.src = presentation.image;
    img.alt = presentation.title;
    img.onerror = function() {
        // If image fails to load, create a placeholder
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 100%;
            height: 60%;
            background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            font-size: 3rem;
        `;
        placeholder.textContent = '🎯';
        card.insertBefore(placeholder, card.firstChild);
    };

    const title = document.createElement('h3');
    title.textContent = presentation.title;

    card.appendChild(img);
    card.appendChild(title);

    return card;
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