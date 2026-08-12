// =====================================================
//  EDIT THIS SECTION — your booking + social links
// =====================================================
// Paste the booking links from whichever booking tool you choose
// (Cal.com, Calendly, TidyCal — any of them work, they're just web links).
// Keep the quote marks around each link.

const BOOKING_LINKS = {
  "consultation":   "https://YOUR-BOOKING-LINK-HERE/consultation",
  "single-lesson":  "https://YOUR-BOOKING-LINK-HERE/single-lesson",
  "lesson-package": "https://YOUR-BOOKING-LINK-HERE/lesson-package"
};

// Your Instagram profile link
const INSTAGRAM_URL = "https://instagram.com/YOUR-HANDLE";

// =====================================================
//  Nothing below here needs editing
// =====================================================

document.querySelectorAll(".booking-link").forEach((link) => {
  const key = link.getAttribute("data-booking");
  if (BOOKING_LINKS[key]) {
    link.href = BOOKING_LINKS[key];
    link.target = "_blank";
    link.rel = "noopener";
  }
});

const instaLink = document.getElementById("instagramLink");
if (instaLink) {
  instaLink.href = INSTAGRAM_URL;
  instaLink.target = "_blank";
  instaLink.rel = "noopener";
}

const header = document.getElementById("siteHeader");
function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", updateHeader);
updateHeader();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
