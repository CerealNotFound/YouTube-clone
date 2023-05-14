let videos = [
  {
    title: "Me at the zoo",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQ70ZBNY9Rwg4O5ziIc4czAWhgCZrV-74g&usqp=CAU",
    duration: "12:34",
    creator: "John Smith",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    views: 1000000,
    uploadedOn: "May 10, 2023",
    verified: true,
  },
  {
    title: "A day in Turkey!!",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQ70ZBNY9Rwg4O5ziIc4czAWhgCZrV-74g&usqp=CAU",
    duration: "06:28",
    creator: "Jane Doe",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    views: 500000,
    uploadedOn: "May 09, 2023",
    verified: false,
  },
  {
    title: "Exams.",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NQ70ZBNY9Rwg4O5ziIc4czAWhgCZrV-74g&usqp=CAU",
    duration: "20:15",
    creator: "Bob Johnson",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    views: 250000,
    uploadedOn: "May 08, 2023",
    verified: true,
  },
];

const videoWrapper = document.querySelector("#videos-top");

const videoTiles = () => {
  videos.map((video) => {
    const videoTile = document.createElement("div");
    videoTile.classList.add("video-tile");

    const videoThumbnailWrapper = document.createElement("div");
    videoThumbnailWrapper.classList.add("video-thumbnail-wrapper");
    const videoThumbnail = document.createElement("img");
    videoThumbnail.src = video.thumbnail;
    const videoDuration = document.createElement("div");
    videoDuration.innerText = video.duration;
    videoThumbnailWrapper.appendChild(videoThumbnail);
    videoThumbnailWrapper.appendChild(videoDuration);

    const videoInfoWrapper = document.createElement("div");
    videoInfoWrapper.classList.add("video-info-wrapper");
    const videoCreatorAvatar = document.createElement("img");
    videoCreatorAvatar.src = video.avatar;
    const videoTitleWrapper = document.createElement("div");
    videoTitleWrapper.classList.add("video-title-wrapper");
    const videoTitle = document.createElement("h4");
    videoTitle.innerText = video.title;
    const channelName = document.createElement("div");
    channelName.classList.add("channel-name-wrapper");
    const videoCreator = document.createElement("div");
    videoCreator.innerText = video.creator;
    if (video.verified == true) {
      const creatorVerified = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      creatorVerified.setAttribute("viewbox", "0 0 24 24");
      creatorVerified.setAttribute("width", "24");
      creatorVerified.setAttribute("height", "24");

      const verifiedIcon = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      verifiedIcon.setAttribute(
        "d",
        "M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
      );
      verifiedIcon.setAttribute("fill", "grey");
      creatorVerified.appendChild(verifiedIcon);

      channelName.appendChild(videoCreator);
      channelName.appendChild(creatorVerified);
    } else {
      channelName.appendChild(videoCreator);
    }
    const viewsUploadWrapper = document.createElement("div");
    viewsUploadWrapper.classList.add("views-uploadedon-wrapper");
    const videoViews = document.createElement("span");
    videoViews.innerText = video.views;
    const videoDateUploaded = document.createElement("span");
    videoDateUploaded.innerText = video.uploadedOn;
    viewsUploadWrapper.appendChild(videoViews);
    viewsUploadWrapper.appendChild(videoDateUploaded);

    videoTitleWrapper.appendChild(videoTitle);
    videoTitleWrapper.appendChild(channelName);
    videoTitleWrapper.appendChild(viewsUploadWrapper);
    videoInfoWrapper.appendChild(videoCreatorAvatar);
    videoInfoWrapper.appendChild(videoTitleWrapper);
    videoTile.appendChild(videoThumbnailWrapper);
    videoTile.appendChild(videoInfoWrapper);
    videoWrapper.appendChild(videoTile);
  });
};

videoTiles();
