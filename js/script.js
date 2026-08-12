/* ============================================================
   FRASER GRANT MUSIC — site settings

   The only bit you'd ever need to change by hand is the block
   directly below. Everything under "SITE BEHAVIOUR" runs the
   menu and buttons — leave that alone.
   ============================================================ */


/* ---- 1. BOOKING LINKS ---------------------------------------
   Paste your five Cal.com links between the quote marks.
   They'll look like: https://cal.com/fraser-grant/1-hour-lesson
   Keep the quote marks and the commas exactly where they are.
------------------------------------------------------------- */

const BOOKING_LINKS = {
  "consultation": "https://YOUR-BOOKING-LINK-HERE/free-consultation",
  "lesson-30":    "https://YOUR-BOOKING-LINK-HERE/30-minute-lesson",
  "lesson-60":    "https://YOUR-BOOKING-LINK-HERE/1-hour-lesson",
  "lesson-90":    "https://YOUR-BOOKING-LINK-HERE/90-minute-lesson",
  "lesson-120":   "https://YOUR-BOOKING-LINK-HERE/2-hour-lesson"
};


/* ---- 2. INSTAGRAM ------------------------------------------ */

const INSTAGRAM_URL = "https://instagram.com/frasergrant_music";


/* ============================================================
   SITE BEHAVIOUR — no need to edit below this line
   ============================================================ */

// Point every "Book" button at the right Cal.com link.
// Any link still on a placeholder is left disabled so it can't
// send a visitor to a dead page.
document.querySelectorAll(".booking-link").forEach(function (link) {
  var key = link.getAttribute("data-booking");
  var url = BOOKING_LINKS[key];

  if (url && url.indexOf("YOUR-BOOKING-LINK-HERE") === -1) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.href = "#lessons";
    link.setAttribute("aria-disabled", "true");
    link.title = "Booking link not set up yet";
  }
});

// Instagram
var instaLink = document.getElementById("instagramLink");
if (instaLink) {
  instaLink.href = INSTAGRAM_URL;
  instaLink.target = "_blank";
  instaLink.rel = "noopener";
}

// Header gains a solid background once you scroll past the hero
var header = document.getElementById("siteHeader");
function updateHeader() {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", updateHeader);
updateHeader();

// Mobile menu open/close
var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// Copyright year, updates itself every January
document.getElementById("year").textContent = new Date().getFullYear();
