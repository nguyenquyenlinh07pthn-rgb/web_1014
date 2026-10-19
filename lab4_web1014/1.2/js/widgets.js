// Lightbox (thư viện GLightbox)
GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });

// Google Map -> Leaflet + OpenStreetMap (đổi toạ độ tại đây)
var pos = [21.0380, 105.7470];
var map = L.map('map').setView(pos, 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker(pos).addTo(map).bindPopup('Here we are').openPopup();
