import "dotenv/config";
import express from "express";
import businessContactRouter from "./routes/businessContact.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server działa!");
});

app.use("/api/business-contact", businessContactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
