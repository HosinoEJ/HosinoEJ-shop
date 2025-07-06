document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('[data-animate-on-scroll-Left], [data-animate-on-scroll-Right]');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target); // 只觸發一次就停止觀察
        }
      });
    }, {
      threshold: 0.1
    });

    targets.forEach(el => observer.observe(el));
  });


function handleAnimateOnScroll() {
  const animatedElements = document.querySelectorAll(
    '[data-animate-on-scroll-Left], [data-animate-on-scroll-Right], [animate-gradient]'
  );
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleAnimateOnScroll);
window.addEventListener('resize', handleAnimateOnScroll);
window.addEventListener('DOMContentLoaded', handleAnimateOnScroll);
