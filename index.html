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
    });
}

// Initialisation des formulaires
function initializeForms() {
    const joinForm = document.getElementById('join-form');
    const contactForm = document.querySelector('#contact form');

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

            // Vérification du captcha
            const captchaValue = document.getElementById('captcha').value;
            if (captchaValue !== '5') {
                showNotification('Veuillez répondre correctement à la question anti-spam.', 'error');
                return;
            }

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
    // Ajouter l'événement pour fermer la modal
    const closeModalBtn = document.getElementById('close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            closeVideoModal();
        });
    }

    // Fermer la modal en cliquant en dehors
    const modal = document.getElementById('video-modal');
    if (modal) {
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
    const iframe = document.getElementById('video-iframe');

    if (modal && iframe) {
        iframe.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Fermer la modal vidéo
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');

    if (modal && iframe) {
        iframe.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Animations au scroll
function initializeScrollAnimations() {
    // Utiliser GSAP pour les animations au scroll
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach((section, i) => {
        if (i === 0) return; // Skip first section (home)

        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
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
