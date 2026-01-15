import "dotenv/config";
import express from "express";
import businessContactRouter from "./routes/businessContact.js";

const app = express();
app.use(express.json());

app.use("/api/business-contact", (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: "Forbidden - invalid API key" });
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Server działa!");
});

app.use("/api/business-contact", businessContactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
