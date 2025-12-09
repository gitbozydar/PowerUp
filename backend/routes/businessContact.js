import express from "express";
import { prisma } from "../lib/prisma.ts";

const router = express.Router();

// Tworzenie BusinessContact
router.post("/", async (req, res) => {
  console.log("body request", req.body);
  const {
    agentEmail,
    nip,
    customerEmail,
    customerCompanyName,
    customerPhone,
    customerRepoPath,
  } = req.body;

  try {
    const newContact = await prisma.businessContact.create({
      data: {
        agentEmail,
        customerCompanyName,
        nip,
        customerEmail,
        customerPhone,
        customerRepoPath,
        user: null,
      },
    });

    res.status(201).json({});
  } catch (err) {
    console.error("Błąd Prisma:", err);
    res.status(500).json({
      error: "Nie udało się utworzyć BusinessContact",
      details: err.message,
    });
  }
});

export default router;
