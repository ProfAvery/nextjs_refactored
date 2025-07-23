import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { findByZip } from "./../../../../mongoose/weather/services";
import dbConnect from "./../../../../middleware/db-connect";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
  let data = await findByZip(req.query.zipcode as string);
  return res.status(200).json(data);
}

const connectDB =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    return await fn(req, res);
  };

export default connectDB(handler);
