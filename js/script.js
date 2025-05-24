document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Portfolio Filter (on portfolio.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove 'active' from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add 'active' to the clicked button
                this.classList.add('active');

                const filter = this.dataset.filter; // 'all', 'residential', etc.

                galleryItems.forEach(item => {
                    const itemCategory = item.dataset.category;
                    if (filter === 'all' || itemCategory.includes(filter)) {
                        item.style.display = 'block'; // Or 'grid-item' if using display:grid
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Optional: Smooth scrolling for anchor links (e.g., in Services page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Testimonial Slider (very basic, consider dedicated library for advanced features)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let currentSlide = 0;
        const slides = testimonialSlider.querySelectorAll('.testimonial-item');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = 'none';
                if (i === index) {
                    slide.style.display = 'block';
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Initialize first slide
        if (totalSlides > 0) {
            showSlide(currentSlide);
            // Auto-advance slides (optional)
            setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
    }
});