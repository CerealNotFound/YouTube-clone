import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

const recommendedCategories = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Comedy",
  "Mixes",
  "Podcast",
  "Motivation",
  "Biology",
  "Computer Programming",
  "Tools",
];

const menuWrapper = document.querySelector("#menu-wrapper");

recommendedCategories.map((category) => {
  const menuCategory = htmlComponent([divComponent("menu-category", category)]);

  appendElements([menuCategory], menuWrapper);
});
