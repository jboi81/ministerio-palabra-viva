/* Ministerio Palabra Viva SC — site interactions
   Full-screen mobile menu, desktop "Más" dropdown, smart live
   player, auto year. Everything else is content. */
(function () {
  /* --- Full-screen menu (mobile) --- */
  var toggle = document.getElementById("nav-toggle");
  var overlay = document.getElementById("menu-overlay");
  var closeBtn = document.getElementById("menu-close");
  function setMenu(open) {
    if (overlay) {
      overlay.classList.toggle("open", open);
      overlay.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.style.overflow = open ? "hidden" : "";
    }
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (toggle) toggle.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (overlay) overlay.addEventListener("click", function (e) {
    if (e.target.tagName !== "A") return;
    var href = e.target.getAttribute("href");
    setMenu(false);
    if (href && href.charAt(0) === "#") {
      /* While the menu is open the page behind it is scroll-locked, and
         mobile browsers can swallow the default anchor jump as the lock
         releases. Close first, then scroll to the section explicitly. */
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        setTimeout(function () {
          target.scrollIntoView({ behavior: "smooth" });
          if (window.history && history.replaceState) history.replaceState(null, "", href);
        }, 40);
      }
    }
  });

  /* --- Desktop "Más" dropdown --- */
  var dd = document.querySelector(".nav-dropdown");
  var ddToggle = document.getElementById("dropdown-toggle");
  function closeDropdown() {
    if (dd) dd.classList.remove("open");
    if (ddToggle) ddToggle.setAttribute("aria-expanded", "false");
  }
  if (ddToggle) ddToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = dd.classList.toggle("open");
    ddToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.addEventListener("click", function (e) {
    if (dd && !dd.contains(e.target)) closeDropdown();
  });
  if (dd) dd.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeDropdown();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setMenu(false); closeDropdown(); }
  });
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Smart live player: during service windows (church local time,
     America/New_York) the En Vivo box carries the YouTube live embed;
     the rest of the week it shows the channel's latest uploads —
     i.e., the most recent service. Windows include a small buffer
     before and after each service. */
  var player = document.getElementById("live-player");
  var status = document.getElementById("live-status");
  if (player) {
    var et = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
    var mins = et.getHours() * 60 + et.getMinutes();
    var day = et.getDay(); /* 0 = Sunday, 2 = Tuesday */
    var live = (day === 0 && mins >= 585 && mins < 780) ||   /* Sun 9:45 AM - 1:00 PM */
               (day === 2 && mins >= 1215 && mins < 1350);  /* Tue 8:15 PM - 10:30 PM */
    if (live) {
      player.src = "https://www.youtube.com/embed/live_stream?channel=UCacVwwlQ1P9p6HZ0Nu82a8A";
      if (status) status.innerHTML = "<strong>EN VIVO AHORA</strong> — estás viendo la transmisión en directo.";
    }
  }
})();
