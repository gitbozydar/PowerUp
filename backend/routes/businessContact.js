import express from "express";
import { poolPromise } from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    agentEmail,
    nip,
    customerCompanyName,
    customerEmail,
    customerPhone,
    customerRepoPath,
    user,
  } = req.body;

  try {
    const pool = await poolPromise;

    await pool
      .request()
      .input("agentEmail", agentEmail)
      .input("nip", nip)
      .input("customerCompanyName", customerCompanyName)
      .input("customerEmail", customerEmail)
      .input("customerPhone", customerPhone)
      .input("customerRepoPath", customerRepoPath)
      .input("user", user).query(`INSERT INTO BusinessContact
              (agentEmail, nip, customerCompanyName, customerEmail, customerPhone, customerRepoPath, [user])
              VALUES (@agentEmail, @nip, @customerCompanyName, @customerEmail, @customerPhone, @customerRepoPath, @user)`);

    res.status(201).json({ message: "Created business contact" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server failed" });
  }
});

export default router;
