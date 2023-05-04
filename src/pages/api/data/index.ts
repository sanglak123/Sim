import { Data_Controller } from "@/data/controller/data";
import { Request, Response } from "express";
import nextConnect from "next-connect";

const apiRoute = nextConnect({
  onError(error: any, req: Request, res: Response) {
    res.status(501).json({
      error: `Sorry something Happened! ${error.message}`,
    });
  },
  onNoMatch(req: Request, res: Response) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(Data_Controller.Load_Data);

export default apiRoute;
