// Highlight the active nav link based on current page
(function () {
  const links = document.querySelectorAll('header nav ul a');
  links.forEach(function (a) {
    if (a.href === window.location.href) a.classList.add('active');
  });
})();
