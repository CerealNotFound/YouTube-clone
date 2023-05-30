import { supabase } from "../middleware/middleware.js";

export const postVideos = async (req, res) => {
  const { error } = await supabase.from("videos").insert({
    id: req.body.id,
    title: req.body.title,
    thumbnail: req.body.thumbnail,
    duration: req.body.duration,
    creator: req.body.creator,
    avatar: req.body.avatar,
    views: req.body.views,
    uploaded_on: req.body.uploaded_on,
    verified: req.body.verified,
  });
  if (error) {
    res.status(400).send(`posting of video failed`);
  }
  res.status(200).send("created!!☕");
};
