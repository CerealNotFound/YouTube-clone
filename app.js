import express from "express";
// import { createClient } from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
// import { app, supabase } from "./src/middleware/middleware";
import { getVideos } from "./src/api/getVideos.js";
import { postVideos } from "./src/api/postVideos.js";
import { deleteVideo } from "./src/api/deleteVideo.js";

const app = express();

// using morgan for logs
app.use(morgan("combined"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const supabase = createClient(
//   "https://lnykemhxwaujgjwamird.supabase.co",
//   process.env.SUPABASE_KEY
// );

app.use("/videos", (req, res) => {
  switch (req.method) {
    case "GET":
      getVideos(req, res);
      break;
    case "POST":
      postVideos(req, res);
      break;
    case "DELETE":
      deleteVideo(req, res);
      break;
    default:
      res.status(418).send("I am a teapot 🫖");
      break;
  }
});

const hostname = "127.0.0.1";
const port = 3680;

app.listen(port, hostname, () => {
  console.log(`> Ready on http://${hostname}:${port}`);
});

export { app };
