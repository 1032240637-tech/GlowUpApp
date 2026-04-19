/* Animation utilities */

// Intersection Observer for scroll reveal
export function initScrollReveal(container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  const elements = container.querySelectorAll('.reveal');
  elements.forEach(el => observer.observe(el));
  return observer;
}

// Stagger children entrance
export function staggerEntrance(container, delay = 60) {
  const children = container.children;
  Array.from(children).forEach((child, i) => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(24px)';
    setTimeout(() => {
      child.style.transition = `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`;
      child.style.opacity = '1';
      child.style.transform = 'translateY(0)';
    }, i * delay);
  });
}

// Smooth page transition
export function pageTransition(container, content, direction = 'forward') {
  return new Promise(resolve => {
    container.style.opacity = '0';
    container.style.transform = direction === 'forward' ? 'translateY(16px)' : 'translateY(-16px)';

    requestAnimationFrame(() => {
      container.innerHTML = content;
      requestAnimationFrame(() => {
        container.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
        setTimeout(resolve, 400);
      });
    });
  });
}
