import "dotenv/config";
import express from "express";
import businessContactRouter from "./routes/businessContact.js";
import { poolPromise } from "./db.ts";
const app = express();
app.use(express.json());
poolPromise
    .then(() => console.log("✅ Połączenie z bazą działa!"))
    .catch((err) => console.error("❌ Nie udało się połączyć z bazą", err));
app.get("/", (req, res) => {
    res.send("Server działa!");
});
app.use("/api/business-contact", businessContactRouter);
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
//# sourceMappingURL=server.js.map