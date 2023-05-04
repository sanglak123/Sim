import { Request, Response } from "express";

import db from "../../db/models";
const DB: any = db;

const { Categorys, Productions, Sims, Reviews } = DB;
export const Data_Controller = {
  Load_Data: async (req: Request, res: Response) => {
    const listCate = await Categorys.findAll();
    const listProduction = await Productions.findAll({
      include: [{ model: Categorys }],
    });
    const listSim = await Sims.findAll({
      include: [{ model: Productions, include: [{ model: Categorys }] }],
    });

    const hot_sim = await Sims.findAll({
      include: [{ model: Productions, include: [{ model: Categorys }] }],
      order: [["selled", "desc"]],
      limit: 6,
    });

    const list_reviews = await Reviews.findAll();

    return res.status(200).json({
      Categorys: listCate,
      Productions: listProduction,
      Sims: listSim,
      Hot_Sims: hot_sim,
      Reviews: list_reviews,
    });
  },
};
