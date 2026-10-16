document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('featured-carousel');
    const carouselTrack = document.getElementById('carousel-track');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselDots = document.getElementById('carousel-dots');
    const carouselStatus = document.getElementById('carousel-status');

    if (!carousel || !carouselTrack) return;

    // Slides: image, what the screenshot shows (alt), and the visible caption
    const slides = [
        {
            src: 'assets/images/screenshots/title-screen-1280.png',
            alt: 'UnderVeil title screen: the horse-headed knight looks out at a black eclipse over a ruined castle',
            title: 'Beneath the black eclipse',
            text: 'The title screen, and the first look at the knight and the ruined castle.',
        },
        {
            src: 'assets/images/screenshots/hub-portal-1280.png',
            alt: 'The hub at night: a white-bearded sage, a glowing purple portal, the knight and an open book on a stand in a blue forest',
            title: 'The hub',
            text: 'Where you return between runs, with a sage, a glowing portal and an open book.',
        },
        {
            src: 'assets/images/screenshots/forest-fountain-1280.png',
            alt: 'The knight walks through a dark forest towards a glowing blue fountain',
            title: 'Into the forest',
            text: 'Pushing through dark woods towards a glowing fountain.',
        },
        {
            src: 'assets/images/screenshots/graveyard-1280.png',
            alt: 'Top-down view of the knight in an overgrown graveyard of Celtic crosses and angel statues',
            title: 'The overgrown graveyard',
            text: 'Celtic crosses and angel statues, half swallowed by moss.',
        },
        {
            src: 'assets/images/screenshots/elite-encounter-1280.png',
            alt: 'An elite skeletal beast and its health bar in a purple-tiled arena at the edge of space',
            title: 'Elite encounter',
            text: 'A skeletal beast with its own health bar, fought at the edge of space.',
        },
    ];
    const itemCount = slides.length;
    let currentIndex = 0;

    // Create carousel items
    function createCarouselItems() {
        carouselTrack.innerHTML = '';

        slides.forEach((slide, i) => {
            const item = document.createElement('figure');
            item.className = 'carousel-item';
            item.setAttribute('role', 'group');
            item.setAttribute('aria-roledescription', 'slide');
            item.setAttribute('aria-label', `${i + 1} of ${itemCount}`);
            item.innerHTML = `
                <img src="${slide.src}" alt="${slide.alt}" width="1280" height="720" loading="${i === 0 ? 'eager' : 'lazy'}">
                <figcaption class="carousel-item-info">
                    <h3>${slide.title}</h3>
                    <p>${slide.text}</p>
                </figcaption>
            `;
            carouselTrack.appendChild(item);
        });
    }

    // Create carousel dots
    function createCarouselDots() {
        carouselDots.innerHTML = '';

        for (let i = 0; i < itemCount; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', `Show screenshot ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            carouselDots.appendChild(dot);
        }
    }

    // Update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;

        // Only the visible slide is exposed to screen readers and keyboard
        carouselTrack.querySelectorAll('.carousel-item').forEach((item, index) => {
            const hidden = index !== currentIndex;
            item.setAttribute('aria-hidden', hidden ? 'true' : 'false');
            item.inert = hidden;
        });

        // Update dots
        carouselDots.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            const isActive = index === currentIndex;
            dot.classList.toggle('active', isActive);
            if (isActive) {
                dot.setAttribute('aria-current', 'true');
            } else {
                dot.removeAttribute('aria-current');
            }
        });

        if (carouselStatus) {
            carouselStatus.textContent = `${currentIndex + 1} / ${itemCount}`;
        }
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    }

    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
    }

    // Event listeners
    carouselNext.addEventListener('click', nextSlide);
    carouselPrev.addEventListener('click', prevSlide);

    // Left/right arrow keys while focus is anywhere inside the carousel
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
    });

    // Swipe on touch screens: a mostly-horizontal drag of 40px or more changes slide
    let touchStartX = null;
    let touchStartY = null;
    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    carouselTrack.addEventListener('touchend', (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        touchStartX = null;
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    });

    // Initialize carousel
    createCarouselItems();
    createCarouselDots();
    updateCarousel();
});
