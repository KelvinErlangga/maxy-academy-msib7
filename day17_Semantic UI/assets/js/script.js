$(document).ready(function () {
  // Fade in all sections on page load
  $(".fade-in-section").addClass("visible");
  // Initialize rating
  $(".ui.rating").rating();
  // Smooth scroll
  $("a[href='#popular-books']").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#popular-books").offset().top,
      },
      800
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeInSections = document.querySelectorAll(".fade-in-section");
  fadeInSections.forEach((section) => {
    section.classList.add("fade-in");
  });
});

function addToWishlist(bookTitle) {
  alert(`${bookTitle} successfully added to wishlist!`);
}
