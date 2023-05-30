// import { formatDistanceToNow } from "../node_modules/date-fns/esm/formatDistanceToNow/index.d.ts";
import {
  htmlComponent,
  appendElements,
  divComponent,
} from "../scripts/htmlComponents.js";

// import { app } from "../../app.js";
// import { supabase } from "../middleware/middleware.js";
// import { getVideos } from "../api/getVideos.js";

// console.log(formatDistanceToNow);

// let videos = [
//   {
//     "id": "100",
//     "title":
//       "Controlling Your Dopamine For Motivation, Focus & Satisfaction | Huberman Lab Podcast #39",
//     "thumbnail":
//       "https://i.ytimg.com/vi/QmOF0crdyRU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAW4xtwXSjRputPJbW-ku0DmJhMIw",
//     "duration": "12:34",
//     "creator": "Andrew Huberman",
//     "avatar":
//       "https://yt3.ggpht.com/5ONImZvpa9_hYK12Xek2E2JLzRc732DWsZMX2F-AZ1cTutTQLBuAmcEtFwrCgypqJncl5HrV2w=s68-c-k-c0x00ffffff-no-rj",
//     "views": 1000000,
//     "uploaded_on": "2023-05-10",
//     "verified": true,
//   },
//   {
//     "title": "God level animation!?!",
//     "thumbnail":
//       "https://i.ytimg.com/vi/uST5wFsjUjg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnIHPNdTNNofUX5oDY8QpQ-0D6qA",
//     "duration": "06:28",
//     "creator": "Yami Sukehiro",
//     "avatar":
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZP1JpfaK3iiTPZFlR7_yWyhNkwh6gp7sE3g&usqp=CAU",
//     "views": 500000,
//     "uploaded_on": "2023-05-09",
//     "verified": false,
//   },
//   {
//    "id": 102,
//     "title": "Exams.",
//     "thumbnail":
//       "https://i.ytimg.com/vi/sfgI6LI1wMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqGCJzXNkXymNCVmiySe72SDYeIw",
//     "duration": "20:15",
//     "creator": "Spike Spigel",
//     "avatar":
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2Fd4tN_2KmO4HqzodSXiDkzol9o3G43B4A&usqp=CAU",
//     "views": 250000,
//     "uploaded_on": "2023-05-08",
//     "verified": false,
//   },
//   {
//     "id": 103,
//     "title": "Neuroscience Meets Psychology | Dr. Andrew Huberman | EP 296",
//     "thumbnail":
//       "https://i.ytimg.com/vi/z-mJEZbHFLs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBC-jc8lm3sLK6x62S088bS7FMYqQ",
//     "duration": "15:42",
//     "creator": "Jordan B Peterson",
//     "avatar":
//       "https://yt3.ggpht.com/Ko0UXEQL6PLt4CE_nQkI8aL6llY_GtWu-rQoZ3tgh1Gsmy7qKOrvazU4nBQOZ3kl0TZ3bivz4wM=s68-c-k-c0x00ffffff-no-rj",
//     "views": 800000,
//     "uploaded_on": "2023-05-07",
//     "verified": true,
//   },
//   {
//     "id": 104,
//     "title":
//       "AutoGPT Replaced Software Devs?, GPT Robots, One-Click VFX and More! ft. Tanmay Bhat & Varun Mayya",
//     "thumbnail":
//       "https://i.ytimg.com/vi/JDYpGnlWuPY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMIGzH3naZtS3sk3bZ1oxgAjXMQg",
//     "duration": "09:16",
//     "creator": "Overpowered",
//     "avatar":
//       "https://yt3.ggpht.com/9JfjNA8x4Bx_lMNfbac7mA69nlVVRKS7q86_rFrRR6hVDYCyflStTi9E1zWrhOvIzUkJ1Gsv=s68-c-k-c0x00ffffff-no-rj",
//     "views": 350000,
//     "uploaded_on": "2023-05-06",
//     "verified": true,
//   },
//   {
//     "title": "5 SECRET AI Tools For EVERY Student",
//     "thumbnail":
//       "https://i.ytimg.com/vi/ZA5XcrxICuI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOllmCSmJTF8s3v3V8B-qA8JRj0g",
//     "duration": "18:39",
//     "creator": "100x Engineers",
//     "avatar":
//       "https://yt3.ggpht.com/C3fKB0jsA7Axt8Bb1nmxSMWIhmgx1RRd324HDcqxx9S6X6jIlcsI9LegIyn5pG6Q-mq5szyViA=s68-c-k-c0x00ffffff-no-rj",
//     "views": 600000,
//     "uploaded_on": "2023-05-05",
//     "verified": true,
//   },
//   {
//     "title": "Captain Levi Workout",
//     "thumbnail":
//       "https://i.ytimg.com/vi/8oS42fo_Gyo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaQ6QukMk_08Ze8q1BP0_fYOcx5Q",
//     "duration": "30:00",
//     "creator": "Yami Sukehiro",
//     "avatar":
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZP1JpfaK3iiTPZFlR7_yWyhNkwh6gp7sE3g&usqp=CAU",
//     "views": 900000,
//     "uploaded_on": "2023-05-04",
//     "verified": false,
//   },
//   {
//     "title": "The DARK TRUTH About Layoffs",
//     "thumbnail":
//       "https://i.ytimg.com/vi/t6jI6BvJzjU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOTViydwU42Bz-f7uPZHkAZQo4WQ",
//     "duration": "14:52",
//     "creator": "100x Engineers",
//     "avatar":
//       "https://yt3.ggpht.com/C3fKB0jsA7Axt8Bb1nmxSMWIhmgx1RRd324HDcqxx9S6X6jIlcsI9LegIyn5pG6Q-mq5szyViA=s68-c-k-c0x00ffffff-no-rj",
//     "views": 700000,
//     "uploaded_on": "2023-05-03",
//     "verified": true,
//   },
//   {
//     "title": "Attack on Titan Seaon 1 Rewind!",
//     "thumbnail":
//       "https://i.ytimg.com/vi/bT9csxkth8g/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF0oUjAP&rs=AOn4CLAQbYQIGgu5jkRokTtBdxkOMkhjcg",
//     "duration": "11:20",
//     "creator": "Captain Levi",
//     "avatar":
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5JKRCKWX_N9IcfCID6e349Ch3gzXwDah0Q&usqp=CAU",
//     "views": 400000,
//     "uploaded_on": "2023-05-02",
//     "verified": false,
//   },
// ];

// fetch("http://127.0.0.1:3680/videos")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

let videos = [];

//backend [] => JSON => String (network) => FE => String to JSON => [] 

//GET
fetch("http://127.0.0.1:3680/videos")
  .then(response => response.json())
  .then(res => {
    videos = res;
    console.log("res", res)
  }
  ).catch(err => console.log("err", err));


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
  const videoTile = htmlComponent([divComponent("video-tile")]);

  const videoThumbnailWrapper = htmlComponent([
    divComponent("video-thumbnail-wrapper"),
  ]);

  const videoThumbnail = htmlComponent([
    {
      typeOfElement: "img",
      attributes: [
        {
          attribute: "class",
          value: "video-thumbnail",
        },
        {
          attribute: "src",
          value: video.thumbnail,
        },
      ],
    },
    divComponent("video-duration", video.duration),
  ]);

  const videoInfoWrapper = htmlComponent([divComponent("video-info-wrapper")]);

  const creatorAvatar = htmlComponent([
    {
      typeOfElement: "img",
      attributes: [
        {
          attribute: "class",
          value: "creator-avatar",
        },
        {
          attribute: "src",
          value: video.avatar,
        },
      ],
    },
  ]);

  const videoTitleWrapper = htmlComponent([
    divComponent("video-title-wrapper"),
  ]);

  const channelName = htmlComponent([divComponent("channel-name-wrapper")]);

  const creator = htmlComponent([divComponent("creator", video.creator)]);

  const videoTitle = htmlComponent([
    {
      typeOfElement: "h4",
      attributes: [
        {
          attribute: "innerText",
          value: video.title,
        },
      ],
    },
  ]);

  if (video.verified == true) {
    const creatorVerified = htmlComponent([
      {
        typeOfElement: "svg",
        attributes: [
          {
            attribute: "viewBox",
            value: "0 0 24 24",
          },
          {
            attribute: "width",
            value: "24",
          },
          {
            attribute: "height",
            value: "24",
          },
          {
            attribute: "class",
            value: "verified-icon",
          },
        ],
      },
    ]);

    const verifiedIcon = htmlComponent([
      {
        typeOfElement: "path",
        attributes: [
          {
            attribute: "d",
            value:
              "M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z",
          },
          {
            attribute: "fill",
            value: "#aaa",
          },
        ],
      },
    ]);

    appendElements([verifiedIcon], creatorVerified[0]);
    appendElements([creator, creatorVerified], channelName[0]);
  } else {
    appendElements([creator], channelName[0]);
  }

  const viewsUploadWrapper = htmlComponent([
    divComponent("views-uploadedon-wrapper"),
  ]);

  const viewsUploadWrapperContent = htmlComponent([
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "innerText",
          value: formatNumberOfViews(video.views),
        },
      ],
    },
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "innerText",
          value: "·",
        },
        {
          attribute: "class",
          value: "separator",
        },
      ],
    },
    {
      typeOfElement: "span",
      attributes: [
        {
          attribute: "innerText",
          value: video.uploadedOn,
        },
      ],
    },
  ]);
  appendElements([viewsUploadWrapperContent], viewsUploadWrapper[0]);
  appendElements([videoThumbnail], videoThumbnailWrapper[0]);
  appendElements([creatorAvatar, videoTitleWrapper], videoInfoWrapper[0]);
  appendElements(
    [videoTitle, channelName, viewsUploadWrapper],
    videoTitleWrapper[0]
  );
  appendElements([videoThumbnailWrapper, videoInfoWrapper], videoTile[0]);
  appendElements([videoTile], videoWrapper);
});
