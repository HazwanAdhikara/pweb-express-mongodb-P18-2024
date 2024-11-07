import { Request, Response } from "express";
import { MechanismService } from "../services/mechanism.service";

class MechanismController {
  // Fungsi untuk menangani peminjaman buku
  async borrowBook(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const result = await MechanismService.borrowBook(id);
      res.status(200).json({
        status: "success",
        message: result.message,
        remainingQty: result.remainingQty,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Fungsi untuk menangani pengembalian buku
  async returnBook(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const result = await MechanismService.returnBook(id);
      res.status(200).json({
        status: "success",
        message: result.message,
        availableQty: result.availableQty,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}

export default new MechanismController();
