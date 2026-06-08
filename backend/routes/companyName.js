import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { nip } = req.body;

    if (!nip) {
      return res.status(400).json({ error: "Brak NIP" });
    }

    const clean = nip.replace(/[\s-]/g, "");
    const date = new Date().toISOString().split("T")[0];

    const response = await fetch(
      `https://wl-api.mf.gov.pl/api/search/nip/${clean}?date=${date}`,
    );

    if (!response.ok) {
      throw new Error("MF API failed");
    }

    const data = await response.json();

    return res.json(data?.result?.subject);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
