import { Request, Response } from "express";

export const initialApp = (req: Request, res: Response) => {
  res.json({ welcome: "Rest api..." });
};
