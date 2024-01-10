// import { db_places } from "../../../../lib/db_places";
// import { db_comments } from "../../../../lib/db_comments";
import Place from "../../../../db/models/Place";
import dbConnect from "../../../../db/connect";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();
  if (req.method === `GET`) {
    const place = await Place.findById(id);
    return res.status(200).json({ place: place});
  }
  if (req.method === `PATCH`) {
    const place = await Place.findByIdAndUpdate(id, {
      $set: req.body,
    });

    return res.status(200).json({ place: place, mesg: "yeiiiii update"});
  }
}
