import type { Request, Response } from "express";

const indexController = {
  get: (req: Request, res: Response) => {
    return res.json({
      name: "StockSavvy Backend",
      author: "Hemit Patel",
      date_created: "December 24 2024",
      message: "The backend that powers the StockSavvy educational platform",
    });
  },
};

export default indexController;
