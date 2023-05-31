import { supabase } from "../middleware/middleware.js";

export const deleteVideo = async (req, res) => {
  const { error } = await supabase
    .from("videos")
    .delete()
    .eq("id", req.body.id);
  if (error) {
    res.status(400).send(`deletion of video failed`);
  }
  res.status(200).send("video deleted successfully 👌");
};
