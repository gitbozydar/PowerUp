import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.js";

const app = express();

// Middleware do parsowania JSON
app.use(express.json());

// Ścieżka dla auth
app.use("/auth", authRoutes);

// Uruchomienie serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
