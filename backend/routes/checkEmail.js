import express from "express";
import { poolPromise } from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("email", email)
      .query("SELECT id FROM users WHERE email = @email");
    if (result.recordset.length > 0) {
      res.json({
        exists: true,
        userId: result.recordset[0].id,
      });
    } else {
      res.json({
        exists: false,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server failed" });
  }
});

export default router;
