// Highlight the active nav link based on current page
(function () {
  const links = document.querySelectorAll('header nav ul a');
  links.forEach(function (a) {
    if (a.href === window.location.href) a.classList.add('active');
  });
})();

// Easter egg: hovering a paper card shows its robot in the side margin
// (only on displays wide enough to have a side margin, per the .robot-egg media query)
(function () {
  const robotEgg = document.getElementById('robot-egg');
  const cards = document.querySelectorAll('.pub-card[data-robot]');
  if (!robotEgg || !cards.length) return;

  const wideEnough = window.matchMedia('(min-width: 1180px)');

  cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      if (!wideEnough.matches) return;
      robotEgg.src = card.dataset.robot;
      const rect = card.getBoundingClientRect();
      robotEgg.style.top = (rect.top + rect.height / 2) + 'px';
      // Restart the draw-in animation even if it's already mid-flight
      robotEgg.classList.remove('visible');
      void robotEgg.offsetWidth;
      robotEgg.classList.add('visible');
    });
    card.addEventListener('mouseleave', function () {
      robotEgg.classList.remove('visible');
    });
  });
})();
