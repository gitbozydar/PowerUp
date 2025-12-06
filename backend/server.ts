import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.js";
import businessContactRouter from "./routes/businessContact.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server działa! /api/auth i /api/business-contact są aktywne");
});

//endpoints
app.use("/api/business-contact", businessContactRouter);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
