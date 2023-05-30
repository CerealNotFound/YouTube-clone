import { supabase } from "../middleware/middleware.js";

export const getVideos = async (req, res) => {
  const { data, error } = await supabase.from("videos").select();
  if (error) {
    res.status(404).send("failed to fetch data");
  }
  res.status(200).send(JSON.stringify(data));
};
