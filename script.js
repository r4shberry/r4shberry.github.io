document.addEventListener('DOMContentLoaded', () => {
    // Select all carousel containers
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const nextBtn = container.querySelector('.next');
        const prevBtn = container.querySelector('.prev');
        const cards = track.querySelectorAll('.portfolio-card');
        
        let index = 0;
        let autoPlay;

        function getVisibleCards() {
            if (window.innerWidth <= 600) return 1;
            if (window.innerWidth <= 900) return 2;
            return 3;
        }

        function moveSlider() {
            const cardWidth = cards[0].offsetWidth + 20; // card + gap
            const maxIndex = cards.length - getVisibleCards();

            if (index > maxIndex) index = 0;
            if (index < 0) index = maxIndex;

            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }

        function startTimer() {
            clearInterval(autoPlay);
            autoPlay = setInterval(() => {
                index++;
                moveSlider();
            }, 4000);
        }

        nextBtn.addEventListener('click', () => {
            index++;
            moveSlider();
            startTimer();
        });

        prevBtn.addEventListener('click', () => {
            index--;
            moveSlider();
            startTimer();
        });

        // Start for this specific carousel
        startTimer();
        
        // Fix alignment on resize
        window.addEventListener('resize', () => {
            index = 0;
            moveSlider();
        });
    });

    // --- Lightbox Logic (Shared by all images) ---
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    document.querySelectorAll('.gallery-img').forEach(img => {
        img.onclick = () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden';
        }
    });

    if (closeBtn) closeBtn.onclick = () => {
        lightbox.style.display = "none";
        document.body.style.overflow = 'auto';
    };
});