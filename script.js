// Loading animation
window.addEventListener("load", function () {
  document.getElementById("loading").classList.add("hide");
  setTimeout(() => {
    document.getElementById("loading").remove();
  }, 300);
});

const container = document.getElementById("parent");
const navDots = document.querySelectorAll(".nav-dot");
const scrollHints = document.querySelectorAll(".scroll-hint");
let currentPage = 0;
let isScrolling = false;

// Update active dot based on scroll position
function updateActiveDot() {
  const scrollPosition = container.scrollTop;
  const pageHeight = window.innerHeight;
  const newPage = Math.round(scrollPosition / pageHeight);

  if (newPage !== currentPage) {
    currentPage = newPage;
    navDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentPage);
    });
    scrollHints.forEach((hint, index) => {
      hint.classList.toggle("show", index === currentPage);
    });
  }
}

// Click navigation dots
navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  });
});

// Listen for scroll events
container.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      updateActiveDot();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

// Touch swipe support
let touchStartY = 0;
let touchEndY = 0;

container.addEventListener("touchstart", (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

container.addEventListener("touchend", (e) => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0 && currentPage < 1) {
      // Swipe up - go to next page
      container.scrollTo({
        top: (currentPage + 1) * window.innerHeight,
        behavior: "smooth",
      });
    } else if (diff < 0 && currentPage > 0) {
      // Swipe down - go to previous page
      container.scrollTo({
        top: (currentPage - 1) * window.innerHeight,
        behavior: "smooth",
      });
    }
  }
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" && currentPage < 1) {
    container.scrollTo({
      top: (currentPage + 1) * window.innerHeight,
      behavior: "smooth",
    });
  } else if (e.key === "ArrowUp" && currentPage > 0) {
    container.scrollTo({
      top: (currentPage - 1) * window.innerHeight,
      behavior: "smooth",
    });
  }
});
