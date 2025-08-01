// Fonction pour initialiser les sliders Swiper
function initializeSliders() {
    // Vérifier si Swiper est défini
    if (typeof Swiper === 'undefined') {
        console.error('Swiper is not loaded');
        return;
    }

    // Initialiser le slider principal
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

    // Initialiser le slider des témoignages
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

    // Initialiser le slider des citations
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

// Appeler la fonction d'initialisation lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', initializeSliders);
