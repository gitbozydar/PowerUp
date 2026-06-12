import "dotenv/config";
import express from "express";
import businessContactRouter from "./routes/businessContact.js";
import checkEmailRouter from "./routes/checkEmail.js";
import registerRouter from "./routes/register.js";
import companyNameRouter from "./routes/companyName.js";
import contactRouter from "./routes/contact.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api/business-contact", (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: "Forbidden - invalid API key" });
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Server working");
});

app.use("/api/business-contact", businessContactRouter);

app.use("/api/check-email", checkEmailRouter);

app.use("/api/register", registerRouter);

app.use("/api/company", companyNameRouter);

app.use("/api/contact", contactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
