// FAQ Toggle Functionality
// Bind after DOM is ready because FAQ items are injected by data_scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const setToggleSign = (qEl) => {
    const t = qEl?.querySelector?.('.faq-toggle');
    if (!t) return;
    t.textContent = qEl.classList.contains('open') ? '−' : '+';
  };

  document.querySelectorAll('.faq-question').forEach(question => {
    // Ensure initial sign matches current class
    setToggleSign(question);

    question.addEventListener('click', function () {
      // Close others (keeps original UI style)
      document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== this) {
          q.classList.remove('open');
          setToggleSign(q);
        }
      });

      // Toggle current
      this.classList.toggle('open');
      setToggleSign(this);
    });
  });
});

// ===== SCROLL ANIMATION - OPTIMIZED ===== 
// ===== SCROLL ANIMATION =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -15% 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // 🔥 CASE 1: chỉ chạy 1 lần (coin)
    if (entry.target.classList.contains('scroll-once')) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        scrollObserver.unobserve(entry.target); // ✅ CHỈ 1 LẦN
      }
      return;
    }

    // 🔥 CASE 2: các animation scroll bình thường
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, observerOptions);

// Observe scroll animation elements
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

// ===== MOBILE MENU TOGGLE (hamburger) =====
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    if (!toggle || !menu) return;
    const closeMenu = () => menu.classList.remove('show');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });

    // Close on clicking a link
    menu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', closeMenu);
    });

    // Close on clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('show')) return;
        if (menu.contains(e.target) || toggle.contains(e.target)) return;
        closeMenu();
    });
});