window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        const fill = bar.querySelector('.fill');
        const percent = bar.getAttribute('data-percent');
        fill.style.width = percent;
      }
    });
  });
  