// VietTrip - JavaScript tương tác giao diện (không dùng máy chủ/database)
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(opened));
      menuButton.textContent = opened ? "×" : "☰";
    });
  }

  const homeSearch = document.querySelector("#home-search");
  if (homeSearch) {
    homeSearch.addEventListener("submit", event => {
      event.preventDefault();
      const destination = document.querySelector("#destination").value;
      const date = document.querySelector("#departure").value;
      const people = document.querySelector("#people").value;
      const message = document.querySelector("#search-message");
      sessionStorage.setItem("viettripSearch", JSON.stringify({destination, date, people}));
      const params = new URLSearchParams();
      if (destination) params.set("q", destination);
      window.location.href = "tours.html" + (params.toString() ? "?" + params.toString() : "");
    });
  }

  const filterForm = document.querySelector("#tour-filter");
  if (filterForm) {
    const cards = Array.from(document.querySelectorAll("#tour-list .tour-card"));
    const queryInput = document.querySelector("#tour-query");
    const typeInput = document.querySelector("#tour-type");
    const sortInput = document.querySelector("#tour-sort");
    const count = document.querySelector("#tour-count");
    const noTours = document.querySelector("#no-tours");
    const urlQuery = new URLSearchParams(window.location.search).get("q");
    if (urlQuery) queryInput.value = urlQuery;

    const applyFilter = event => {
      if (event) event.preventDefault();
      const q = queryInput.value.trim().toLocaleLowerCase("vi");
      const type = typeInput.value;
      let visibleCards = [];
      cards.forEach(card => {
        const matchesQuery = card.dataset.name.toLocaleLowerCase("vi").includes(q);
        const matchesType = !type || card.dataset.type === type;
        const show = matchesQuery && matchesType;
        card.hidden = !show;
        if (show) visibleCards.push(card);
      });
      if (sortInput.value === "low") visibleCards.sort((a,b) => Number(a.dataset.price)-Number(b.dataset.price));
      if (sortInput.value === "high") visibleCards.sort((a,b) => Number(b.dataset.price)-Number(a.dataset.price));
      const list = document.querySelector("#tour-list");
      visibleCards.forEach(card => list.appendChild(card));
      count.textContent = `Tìm thấy ${visibleCards.length} tour phù hợp.`;
      noTours.hidden = visibleCards.length !== 0;
    };
    filterForm.addEventListener("submit", applyFilter);
    sortInput.addEventListener("change", applyFilter);
    applyFilter();
  }

  const bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    const dateInput = document.querySelector("#booking-date");
    dateInput.min = new Date().toISOString().slice(0,10);
    bookingForm.addEventListener("submit", event => {
      event.preventDefault();
      document.querySelector("#booking-message").textContent =
        "Đã kiểm tra biểu mẫu! Đây là bản demo, yêu cầu chưa được gửi đến công ty. Hãy liên hệ trực tiếp để đặt tour thực tế.";
      bookingForm.reset();
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      document.querySelector("#contact-message").textContent =
        "Cảm ơn bạn đã liên hệ! Đây là bản demo giao diện, dữ liệu chưa được gửi lên máy chủ.";
      contactForm.reset();
    });
  }

  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(item => item.classList.toggle("selected", item === button));
      document.querySelectorAll(".account-panel").forEach(panel => {
        panel.hidden = panel.id !== button.dataset.tab;
      });
    });
  });

  document.querySelectorAll("#login-panel, #register-panel").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const note = form.querySelector(".form-note");
      if (form.id === "register-panel") {
        const passwords = form.querySelectorAll('input[type="password"]');
        if (passwords[0].value !== passwords[1].value) {
          note.textContent = "Mật khẩu xác nhận chưa trùng khớp.";
          passwords[1].focus();
          return;
        }
        note.textContent = "Biểu mẫu hợp lệ! Chức năng tạo tài khoản thật cần máy chủ và cơ sở dữ liệu.";
      } else {
        note.textContent = "Biểu mẫu hợp lệ! Chức năng đăng nhập thật cần máy chủ và cơ sở dữ liệu.";
      }
      form.reset();
    });
  });

  const reviewForm = document.querySelector("#review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", event => {
      event.preventDefault();
      const fields = reviewForm.querySelectorAll("input, textarea");
      const name = fields[0].value.trim();
      const message = fields[1].value.trim();
      const rating = Number(document.querySelector("#rating").value);
      const item = document.createElement("article");
      item.className = "review-item";
      const title = document.createElement("strong");
      title.textContent = name + " ";
      const stars = document.createElement("span");
      stars.textContent = "★".repeat(rating) + "☆".repeat(5-rating);
      title.appendChild(stars);
      const paragraph = document.createElement("p");
      paragraph.textContent = message;
      item.append(title, paragraph);
      document.querySelector("#review-list").prepend(item);
      document.querySelector("#review-message").textContent = "Đã thêm đánh giá vào giao diện hiện tại.";
      reviewForm.reset();
    });
  }
});