const recommendedCategories = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Comedy",
  "Mix",
  "Podcast",
  "Motivation",
  "Biology",
  "Computer Programming",
  "Tools",
];

const menuWrapper = document.querySelector("#menu-wrapper");

recommendedCategories.map((category) => {
  const menuCategory = document.createElement("div");
  menuCategory.innerText = category;
  menuWrapper.appendChild(menuCategory);
});
