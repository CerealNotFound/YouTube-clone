const navigationFields = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    navigationField: "Home",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    navigationField: "Shorts",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    navigationField: "Subscriptions",
  },
];

const playlists = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    playlist: "Library",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    playlist: "History",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    playlist: "Your videos",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    playlist: "Watch later",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR6T5us_l0hUqn6Lm4ASR_sVFtbmnUHJkaQ&usqp=CAU",
    playlist: "Liked videos",
  },
];

const subscriptions = [
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    name: "Nikhil Kamath",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    name: "Samay Raina",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    name: "Shwetabh Gangwar",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    name: "Varun Mayya",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    name: "Andrew Huberman",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    name: "Aevy Tv",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3RFDZM21teuCMFYx_AROjt-AzUwDBROFww&usqp=CAU",
    name: "100x Engineers",
  },
];

const asideWrapper = document.querySelector("#aside-wrapper");

navigationFields.map((field) => {
  const navigationField = document.createElement("div");
  navigationField.classList.add("aside-link");

  const navigationFieldLogo = document.createElement("img");
  navigationFieldLogo.src = field.logo;
  const navigationFieldTitle = document.createElement("span");
  navigationFieldTitle.innerText = field.navigationField;

  navigationField.appendChild(navigationFieldLogo);
  navigationField.appendChild(navigationFieldTitle);

  asideWrapper.appendChild(navigationField);
});

const separator1 = document.createElement("hr");
asideWrapper.appendChild(separator1);

playlists.map((field) => {
  const playlist = document.createElement("div");
  playlist.classList.add("aside-link");

  const playlistLogo = document.createElement("img");
  playlistLogo.src = field.logo;
  const playlistTitle = document.createElement("span");
  playlistTitle.innerText = field.playlist;

  playlist.appendChild(playlistLogo);
  playlist.appendChild(playlistTitle);

  asideWrapper.appendChild(playlist);
});

const separator2 = document.createElement("hr");
asideWrapper.appendChild(separator2);

subscriptions.map((field) => {
  const subscription = document.createElement("div");
  subscription.classList.add("aside-link");

  const avatar = document.createElement("img");
  avatar.src = field.avatar;
  const channelName = document.createElement("span");
  channelName.innerText = field.name;

  subscription.appendChild(avatar);
  subscription.appendChild(channelName);

  asideWrapper.appendChild(subscription);
});
