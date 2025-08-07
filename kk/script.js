// Toggle More About Section with arrow icon and text change
function toggleMore(event) {
  event.preventDefault();
  const moreAbout = document.getElementById("moreAbout");
  const toggleText = document.getElementById("toggleText");
  const arrow = document.getElementById("arrow");

  if (moreAbout.style.display === "block") {
    moreAbout.style.display = "none";
    toggleText.textContent = "Know more about me";
    arrow.classList.remove("fa-chevron-up");
    arrow.classList.add("fa-chevron-down");
  } else {
    moreAbout.style.display = "block";
    toggleText.textContent = "Show less";
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-up");
    moreAbout.scrollIntoView({ behavior: "smooth" }); // Optional scroll
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Toggle "Know more" section
  const toggleBtn = document.getElementById("toggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleMore);
  }

  // Form Submit Alert and reset
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    // Close nav menu when clicking a link (for mobile)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });
  }

  // Resume Download
  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const link = document.createElement('a');
      link.href = 'resume.pdf';
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
