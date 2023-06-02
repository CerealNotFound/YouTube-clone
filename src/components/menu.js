import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

// const recommendedCategories = [
//   "All",
//   "Gaming",
//   "Music",
//   "Live",
//   "Comedy",
//   "Mixes",
//   "Podcast",
//   "Motivation",
//   "Biology",
//   "Computer Programming",
//   "Tools",
// ];

let recommendedCategories = [];

fetch("https://youtube-clone-server.onrender.com/api/videos")
  .then((response) => response.json())
  .then((res) => {
    videos = res;
    filtersHandler();
    console.log("res", res);
  })
  .catch((err) => console.log("err", err));

const menuWrapper = document.querySelector("#menu-wrapper");

const filtersHandler = () => {
  recommendedCategories.map((category) => {
    const menuCategory = htmlComponent([
      divComponent("menu-category", category),
    ]);

    appendElements([menuCategory], menuWrapper);
  });
};
