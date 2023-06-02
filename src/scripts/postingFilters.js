const endpoint = "http://127.0.0.1:3680/filters";

export const postFilters = (filter) => {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filter),
  })
    .then((data) => {
      console.log(data);
      res.status(200).send("filters added!!☕");
    })
    .catch((error) => {
      res.status(400).send(`posting of filters failed`);
    });
};
