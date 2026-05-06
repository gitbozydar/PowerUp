import express from "express";
import { poolPromise } from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await poolPromise;

    const userExists = await pool
      .request()
      .input("email", email)
      .query("SELECT id FROM users WHERE email = @email");
    console.log(userExists.recordset);

    const hashedPassword = await bcrypt.hash(password, 10);
    const instertUser = await pool
      .request()
      .input("email", email)
      .input("password", hashedPassword)
      .query(
        `INSERT INTO users (email, password_hash) OUTPUT INSERTED.id VALUES (@email, @password)`,
      );
    return res.status(201).json({
      message: "User created",
      userId: instertUser.recordset[0].id,
    });
  } catch (err) {
    console.log(err);
  }
});
export default router;
