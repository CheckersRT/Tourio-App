import  dbConnect  from '../../../db/connect';
import Place from '../../../db/models/Place';


export default async function handler(req, res) {
  await dbConnect();
  if (req.method === `GET`) {
    const places = await Place.find();
    return res.status(200).json(places);
  }

}
