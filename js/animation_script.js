// FAQ Toggle Functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
            // Remove open class from all questions
            document.querySelectorAll('.faq-question').forEach(q => {
                if (q !== this) {
                    // q.classList.remove('open');
                    q.querySelector('.faq-toggle').textContent = '+';
                }
            });
            
            // Toggle current question
            // this.classList.toggle('open');

            // Change toggle text
            const toggle = this.querySelector('.faq-toggle');
            toggle.textContent = this.classList.contains('open') ? '−' : '+';
        });    });    // ===== SCROLL ANIMATION - OPTIMIZED ===== 
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('active');
                // Trigger reflow để reset animation
                void entry.target.offsetWidth;
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Observe all scroll animation elements
    document.querySelectorAll(
        '.scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-zoom-in, .scroll-rotate-in'
    ).forEach(el => {
        el.style.willChange = 'transform, opacity';
        scrollObserver.observe(el);
    });

    // Observe exchange cards and feature items
    document.querySelectorAll('.exchange-card, .feature-item, .card').forEach(el => {
        if (!el.classList.contains('scroll-fade-in')) {
            el.classList.add('scroll-fade-in');
            el.style.willChange = 'transform, opacity';
            scrollObserver.observe(el);
        }
    });

    // ===== PARTNERS HORIZONTAL SCROLL ANIMATION =====
    const partnerList = document.querySelector('.partner-list');
    if (partnerList) {
        const partnersSection = document.querySelector('.partners');
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        window.addEventListener('scroll', () => {
            if (partnersSection && partnersSection.getBoundingClientRect().top < window.innerHeight) {
                // Calculate scroll percentage for smooth horizontal movement
                const scrollProgress = window.scrollY / maxScroll;
                const maxTranslate = partnerList.scrollWidth - partnersSection.clientWidth;
                const translateX = Math.min(scrollProgress * maxTranslate * 2, maxTranslate);
                
                partnerList.style.transform = `translateX(-${translateX}px)`;
                partnerList.style.willChange = 'transform';
            }
        });
    }