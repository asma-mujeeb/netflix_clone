console.log("Netflix Clone Loaded");

// Example interaction
document.querySelectorAll(".row-posters img").forEach(img => {
  img.addEventListener("click", () => {
    alert("Movie clicked!");
 });
});