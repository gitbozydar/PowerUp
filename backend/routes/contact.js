import express from "express";
import multer from "multer";
import { sendMail } from "../services/sendMail.js";
import { contactLimiter } from "../middleware/limiter.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post(
  "/",
  contactLimiter,
  upload.array("invoice", 10),
  async (req, res) => {
    try {
      await sendMail(req.body, req.files);

      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false });
    }
  },
);

export default router;
