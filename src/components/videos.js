import { formatDistanceToNow } from "../node_modules/date-fns/esm/formatDistanceToNow/index.d.ts";
import { htmlComponent, appendElements } from "../scripts/htmlComponent.js";

// console.log(formatDistanceToNow);

let videos = [
  {
    title:
      "Controlling Your Dopamine For Motivation, Focus & Satisfaction | Huberman Lab Podcast #39",
    thumbnail:
      "https://i.ytimg.com/vi/QmOF0crdyRU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAW4xtwXSjRputPJbW-ku0DmJhMIw",
    duration: "12:34",
    creator: "Andrew Huberman",
    avatar:
      "https://yt3.ggpht.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s68-c-k-c0x00ffffff-no-rj",
    views: 1000000,
    uploadedOn: "May 10, 2023",
    verified: true,
  },
  {
    title: "God level animation!?!",
    thumbnail:
      "https://i.ytimg.com/vi/uST5wFsjUjg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnIHPNdTNNofUX5oDY8QpQ-0D6qA",
    duration: "06:28",
    creator: "Yami Sukehiro",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZP1JpfaK3iiTPZFlR7_yWyhNkwh6gp7sE3g&usqp=CAU",
    views: 500000,
    uploadedOn: "May 09, 2023",
    verified: false,
  },
  {
    title: "Exams.",
    thumbnail:
      "https://i.ytimg.com/vi/sfgI6LI1wMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqGCJzXNkXymNCVmiySe72SDYeIw",
    duration: "20:15",
    creator: "Spike Spigel",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2Fd4tN_2KmO4HqzodSXiDkzol9o3G43B4A&usqp=CAU",
    views: 250000,
    uploadedOn: "May 08, 2023",
    verified: false,
  },
  {
    title: "Neuroscience Meets Psychology | Dr. Andrew Huberman | EP 296",
    thumbnail:
      "https://i.ytimg.com/vi/z-mJEZbHFLs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBC-jc8lm3sLK6x62S088bS7FMYqQ",
    duration: "15:42",
    creator: "Jordan B Peterson",
    avatar:
      "https://yt3.ggpht.com/Ko0UXEQL6PLt4CE_nQkI8aL6llY_GtWu-rQoZ3tgh1Gsmy7qKOrvazU4nBQOZ3kl0TZ3bivz4wM=s68-c-k-c0x00ffffff-no-rj",
    views: 800000,
    uploadedOn: "May 07, 2023",
    verified: true,
  },
  {
    title:
      "AutoGPT Replaced Software Devs?, GPT Robots, One-Click VFX and More! ft. Tanmay Bhat & Varun Mayya",
    thumbnail:
      "https://i.ytimg.com/vi/JDYpGnlWuPY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMIGzH3naZtS3sk3bZ1oxgAjXMQg",
    duration: "09:16",
    creator: "Overpowered",
    avatar:
      "https://yt3.ggpht.com/9JfjNA8x4Bx_lMNfbac7mA69nlVVRKS7q86_rFrRR6hVDYCyflStTi9E1zWrhOvIzUkJ1Gsv=s68-c-k-c0x00ffffff-no-rj",
    views: 350000,
    uploadedOn: "May 06, 2023",
    verified: true,
  },
  {
    title: "5 SECRET AI Tools For EVERY Student",
    thumbnail:
      "https://i.ytimg.com/vi/ZA5XcrxICuI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOllmCSmJTF8s3v3V8B-qA8JRj0g",
    duration: "18:39",
    creator: "100x Engineers",
    avatar:
      "https://yt3.ggpht.com/C3fKB0jsA7Axt8Bb1nmxSMWIhmgx1RRd324HDcqxx9S6X6jIlcsI9LegIyn5pG6Q-mq5szyViA=s68-c-k-c0x00ffffff-no-rj",
    views: 600000,
    uploadedOn: "May 05, 2023",
    verified: true,
  },
  {
    title: "Captain Levi Workout",
    thumbnail:
      "https://i.ytimg.com/vi/8oS42fo_Gyo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaQ6QukMk_08Ze8q1BP0_fYOcx5Q",
    duration: "30:00",
    creator: "Yami Sukehiro",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZP1JpfaK3iiTPZFlR7_yWyhNkwh6gp7sE3g&usqp=CAU",
    views: 900000,
    uploadedOn: "May 04, 2023",
    verified: false,
  },
  {
    title: "The DARK TRUTH About Layoffs",
    thumbnail:
      "https://i.ytimg.com/vi/t6jI6BvJzjU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOTViydwU42Bz-f7uPZHkAZQo4WQ",
    duration: "14:52",
    creator: "100x Engineers",
    avatar:
      "https://yt3.ggpht.com/C3fKB0jsA7Axt8Bb1nmxSMWIhmgx1RRd324HDcqxx9S6X6jIlcsI9LegIyn5pG6Q-mq5szyViA=s68-c-k-c0x00ffffff-no-rj",
    views: 700000,
    uploadedOn: "May 03, 2023",
    verified: true,
  },
  {
    title: "Attack on Titan Seaon 1 Rewind!",
    thumbnail:
      "https://i.ytimg.com/vi/bT9csxkth8g/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF0oUjAP&rs=AOn4CLAQbYQIGgu5jkRokTtBdxkOMkhjcg",
    duration: "11:20",
    creator: "Captain Levi",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5JKRCKWX_N9IcfCID6e349Ch3gzXwDah0Q&usqp=CAU",
    views: 400000,
    uploadedOn: "May 02, 2023",
    verified: false,
  },
];

const formatNumberOfViews = (views) => {
  let formattedViews;
  if (views >= 1000000) {
    formattedViews = (views / 1000000).toFixed(1);
    return formattedViews.endsWith(".0")
      ? formattedViews.slice(0, -2) + "M"
      : formattedViews + "M";
  } else if (views >= 1000) {
    formattedViews = (views / 1000).toFixed(1);
    return formattedViews.endsWith(".0")
      ? formattedViews.slice(0, -2) + "K"
      : formattedViews + "K";
  }
};

const videoWrapper = document.querySelector("#videos");

videos.map((video) => {
  // const videoTile = document.createElement("div");
  // videoTile.classList.add("video-tile");

  const videoTile = htmlComponent("div", [
    { attribute: "class", value: "video-tile" },
  ]);
  const videoThumbnailWrapper = htmlComponent("div", [
    { attribute: "class", value: "video-thumbnail-wrapper" },
  ]);

  appendElements([videoThumbnailWrapper], videoTile);
  appendElements([videoTile], videoWrapper);

  // videoTile.appendChild(videoThumbnailWrapper);
  // videoWrapper.appendChild(videoTile);

  // const videoThumbnailWrapper = document.createElement("div");
  // videoThumbnailWrapper.classList.add("video-thumbnail-wrapper");
  // const videoThumbnail = document.createElement("img");
  // videoThumbnail.src = video.thumbnail;
  // videoThumbnail.classList.add("video-thumbnail");
  // const videoDuration = document.createElement("div");
  // videoDuration.innerText = video.duration;
  // videoDuration.classList.add("video-duration");
  // videoThumbnailWrapper.appendChild(videoThumbnail);
  // videoThumbnailWrapper.appendChild(videoDuration);

  // const videoInfoWrapper = document.createElement("div");
  // videoInfoWrapper.classList.add("video-info-wrapper");
  // const videoCreatorAvatar = document.createElement("img");
  // videoCreatorAvatar.classList.add("creator-avatar");
  // videoCreatorAvatar.src = video.avatar;
  // const videoTitleWrapper = document.createElement("div");
  // videoTitleWrapper.classList.add("video-title-wrapper");
  // const videoTitle = document.createElement("h4");
  // videoTitle.innerText = video.title;
  // const channelName = document.createElement("div");
  // channelName.classList.add("channel-name-wrapper");
  // const videoCreator = document.createElement("div");
  // videoCreator.innerText = video.creator;
  // if (video.verified == true) {
  //   const creatorVerified = document.createElementNS(
  //     "http://www.w3.org/2000/svg",
  //     "svg"
  //   );
  //   creatorVerified.setAttribute("viewBox", "0 0 24 24");
  //   creatorVerified.setAttribute("width", "24");
  //   creatorVerified.setAttribute("height", "24");
  //   creatorVerified.setAttribute("class", "verified-icon");

  //   const verifiedIcon = document.createElementNS(
  //     "http://www.w3.org/2000/svg",
  //     "path"
  //   );
  //   verifiedIcon.setAttribute(
  //     "d",
  //     "M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
  //   );
  //   verifiedIcon.setAttribute("fill", "#aaa");
  //   creatorVerified.appendChild(verifiedIcon);

  //   channelName.appendChild(videoCreator);
  //   channelName.appendChild(creatorVerified);
  // } else {
  //   channelName.appendChild(videoCreator);
  // }
  // const viewsUploadWrapper = document.createElement("div");
  // viewsUploadWrapper.classList.add("views-uploadedon-wrapper");
  // const videoViews = document.createElement("span");
  // videoViews.innerText = formatNumberOfViews(video.views);
  // const separator = document.createElement("span");
  // separator.innerText = "·";
  // separator.classList.add("separator");
  // const videoDateUploaded = document.createElement("span");
  // videoDateUploaded.innerText = video.uploadedOn;
  // viewsUploadWrapper.appendChild(videoViews);
  // viewsUploadWrapper.appendChild(separator);
  // viewsUploadWrapper.appendChild(videoDateUploaded);

  // videoTitleWrapper.appendChild(videoTitle);
  // videoTitleWrapper.appendChild(channelName);
  // videoTitleWrapper.appendChild(viewsUploadWrapper);
  // videoInfoWrapper.appendChild(videoCreatorAvatar);
  // videoInfoWrapper.appendChild(videoTitleWrapper);
  // document.querySelector(".video-tile").appendChild(videoThumbnailWrapper);
  // document.querySelector(".video-tile").appendChild(videoInfoWrapper);
  // videoWrapper.appendChild();
});
