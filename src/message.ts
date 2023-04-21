import { Request, Response, Router } from "express";
import { client } from "./client";
const router = Router();

router.post("/message", async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const phone: string = "51965208467@c.us";
    await client.sendMessage(phone, message);
    res.json({ success: true });
  } catch (error) {
    return res.status(400);
  }
  // client.sendMessage()
});

export { router as messageRoute };
