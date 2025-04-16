// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Navigation mobile
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && menuClose && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.remove('menu-closed');
            mobileMenu.classList.add('menu-open');
        });
        
        menuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-closed');
        });
    }
    
    // Fermer le menu mobile quand on clique sur un lien
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-closed');
        });
    });
    
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialisation des sliders
    initializeSliders();
    
    // Formulaires
    initializeForms();
    
    // Vidéo modal
    initializeVideoModal();
    
    // Animation au scroll
    initializeScrollAnimations();
    
    // Compteur pour les statistiques
    initializeCounters();
});

// Initialisation des sliders Swiper
function initializeSliders() {
    // Slider principal
    const mainSwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
    
    // Slider témoignages
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 30,
    });
    
    // Slider citations
    const quoteSwiper = new Swiper('.quote-swiper', {
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}

// Initialisation des formulaires
function initializeForms() {
    const joinForm = document.getElementById('join-form');
    const contactForm = document.getElementById('contact-form');
    
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Envoi en cours...';
            
            setTimeout(() => {
                showNotification('Votre candidature a été envoyée avec succès!', 'success');
                joinForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1500);
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Envoi en cours...';
            
            setTimeout(() => {
                showNotification('Votre message a été envoyé avec succès!', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1500);
        });
    }
}

// Afficher une notification
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-500 translate-y-20 opacity-0`;
    
    // Définir le style en fonction du type
    if (type === 'success') {
        notification.classList.add('bg-green-600', 'text-white');
    } else if (type === 'error') {
        notification.classList.add('bg-red-600', 'text-white');
    } else {
        notification.classList.add('bg-blue-600', 'text-white');
    }
    
    // Ajouter le message
    notification.innerHTML = message;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animer l'entrée
    setTimeout(() => {
        notification.classList.remove('translate-y-20', 'opacity-0');
    }, 10);
    
    // Supprimer après un délai
    setTimeout(() => {
        notification.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 5000);
}

// Initialiser la modal vidéo
function initializeVideoModal() {
    // Créer la modal si elle n'existe pas
    if (!document.getElementById('video-modal')) {
        const modal = document.createElement('div');
        modal.id = 'video-modal';
        modal.className = 'modal fixed inset-0 z-50 flex items-center justify-center bg-black/80';
        modal.innerHTML = `
            <div class="relative bg-white rounded-lg w-full max-w-4xl mx-4">
                <button id="close-modal" class="absolute -top-10 right-0 text-white text-2xl">
                    <i class="fas fa-times"></i>
                </button>
                <div class="aspect-w-16 aspect-h-9">
                    <iframe id="youtube-iframe" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Ajouter l'événement pour fermer la modal
        document.getElementById('close-modal').addEventListener('click', function() {
            closeVideoModal();
        });
        
        // Fermer la modal en cliquant en dehors
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
    }
}

// Ouvrir la modal vidéo
function openVideoModal(videoUrl) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('youtube-iframe');
    
    if (modal && iframe) {
        iframe.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Fermer la modal vidéo
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('youtube-iframe');
    
    if (modal && iframe) {
        iframe.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Animations au scroll
function initializeScrollAnimations() {
    // Utiliser GSAP pour les animations au scroll
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.from(section.querySelectorAll('h2, h3, .w-24'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
        
        gsap.from(section.querySelectorAll('.grid > div'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 70%',
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15
        });
    });
}

// Compteurs pour les statistiques
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // ms
        const step = Math.ceil(target / (duration / 16)); // 60fps
        
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current > target) {
                current = target;
                clearInterval(interval);
            }
            counter.textContent = current.toLocaleString();
        };
        
        const interval = setInterval(updateCounter, 16);
    });
}
