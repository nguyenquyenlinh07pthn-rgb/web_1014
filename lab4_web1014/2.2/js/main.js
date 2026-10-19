document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.menu-btn');
  var menu = document.querySelector('.nav-links');

  menuButton.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Mở menu');
    });
  });

  if (window.GLightbox) {
    GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
  }

  var form = document.querySelector('.contact-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var subject = encodeURIComponent('Tea Station — liên hệ từ ' + data.get('name'));
    var body = encodeURIComponent('Tên: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message'));
    document.querySelector('.form-status').textContent = 'Đang mở ứng dụng email để gửi lời nhắn…';
    window.location.href = 'mailto:hello@teastation.example?subject=' + subject + '&body=' + body;
  });
});
