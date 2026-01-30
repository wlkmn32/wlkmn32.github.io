gallery = document.getElementById("gallery");
galleryTitle = document.getElementById("gallery-title");
loaderContainer = document.getElementById("loader-container");
closebutton = document.getElementById("gallery-close");
isGalleryOpen = false;
window.onload = function () {
  gallery.style.opacity = "0";
  galleryTitle.style.opacity = "0";
  gallery.style.zIndex = "-1";
  setTimeout(() => {
    loaderContainer.style.opacity = "0";
  }, 600);
  setTimeout(() => {
    loaderContainer.style.display = "block";
    loaderContainer.style.display = "none";
  }, 1000);
};
function toggleGallery() {
  galleryTitle.style.opacity = isGalleryOpen ? "0" : "1";
  gallery.style.opacity = !isGalleryOpen ? "1" : "0";
  gallery.style.zIndex = !isGalleryOpen ? "8" : "-1";
  closebutton.style.transform = !isGalleryOpen
    ? "translateX(0px) translateY(-15px)"
    : "translateX(-300px) translateY(-15px)";
  closebutton.style.opacity = !isGalleryOpen ? "1" : "0";
  isGalleryOpen = !isGalleryOpen;
  if (isGalleryOpen) {
    window.history.pushState({ action: "gallery_open" }, "");
  }
}
window.addEventListener("popstate", function (event) {
  if (isGalleryOpen) {
    toggleGallery();
  }
});
landingPage = document.getElementById("landing-page-background");
landingPage.onclick = toggleGallery;
