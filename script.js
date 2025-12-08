document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const offcanvasNavbar = document.getElementById("offcanvasNavbar");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    });
  });
});
