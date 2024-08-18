// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim.");
    this.reset();
  });
});
