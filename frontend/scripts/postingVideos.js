const endpoint = "http://127.0.0.1:3680/videos";

export const postVideos = (video) => {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  })
    .then((data) => {
      res.status(200).send("created!!☕");
    })
    .catch((error) => {
      res.status(400).send(`posting of video failed`);
    });
};
