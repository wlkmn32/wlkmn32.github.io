gallery = document.getElementById("gallery");
galleryTitle = document.getElementById("gallery-title");
loaderContainer = document.getElementById("loader-container");
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
  isGalleryOpen = !isGalleryOpen;
}
landingPage = document.getElementById("landing-page-background");
gallery.onclick = toggleGallery;
landingPage.onclick = toggleGallery;
