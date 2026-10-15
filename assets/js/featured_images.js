document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carousel-track');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselDots = document.getElementById('carousel-dots');

    // Number of items to display
    const itemCount = 5;
    const imagePaths = [
        'assets/images/Carousel/start_screen.png',
        'assets/images/Carousel/hub_area.png',
        'assets/images/Carousel/fountain.png',
        'assets/images/Carousel/celtic.png',
        'assets/images/Carousel/elite.png',
    ];
    let currentIndex = 0;

    // Create carousel items
    function createCarouselItems() {
        carouselTrack.innerHTML = '';
        
        for (let i = 0; i < itemCount; i++) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.style.width = '100%';
            item.style.minWidth = '100%';
            item.style.height = '500px';
            item.style.flexShrink = '0';
            item.innerHTML = `
                <img src="${imagePaths[i]}" alt="Featured Product ${i + 1}" style="width: 100%; height: 100%; object-fit: contain;">
                <div class="carousel-item-info" style="gap: 5px;">
                    <h3 style="margin: 0;">Featured Characters ${i + 1}</h3>
                    <p style="margin: 0;">Discover the characters that will help you on your journey</p>
                </div>
            `;
            carouselTrack.appendChild(item);
        }
    }

    // Create carousel dots
    function createCarouselDots() {
        carouselDots.innerHTML = '';
        
        for (let i = 0; i < itemCount; i++) {
            const dot = document.createElement('div');
            dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(i));
            carouselDots.appendChild(dot);
        }
    }

    // Update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
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

    // Initialize carousel
    createCarouselItems();
    createCarouselDots();
    updateCarousel();
});
