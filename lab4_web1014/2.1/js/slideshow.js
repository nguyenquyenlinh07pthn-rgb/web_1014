(function () {
  var slides = document.querySelectorAll('.slide');
  var dotsBox = document.querySelector('.dots');
  var current = 0, timer;
  slides.forEach(function (_, i) {
    var b = document.createElement('button');
    b.setAttribute('aria-label', 'Ảnh ' + (i + 1));
    b.addEventListener('click', function () { show(i); restart(); });
    dotsBox.appendChild(b);
  });
  function show(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach(function (s, i) { s.classList.toggle('is-active', i === current); });
    dotsBox.querySelectorAll('button').forEach(function (d, i) { d.classList.toggle('on', i === current); });
  }
  function restart() { clearInterval(timer); timer = setInterval(function () { show(current + 1); }, 4000); }
  document.querySelector('.prev').addEventListener('click', function () { show(current - 1); restart(); });
  document.querySelector('.next').addEventListener('click', function () { show(current + 1); restart(); });
  show(0); restart();
})();
