const searchBar = document.querySelector("#search-bar");
const searchIcon = document.querySelector(".search-icon-wrapper");
searchBar.addEventListener("focus", () => {
  searchIcon.classList.remove("none");
  searchIcon.classList.add("inline-flex");
});
searchBar.addEventListener("blur", () => {
  searchIcon.classList.add("none");
  searchIcon.classList.remove("inline-flex");
});
