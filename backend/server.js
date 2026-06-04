import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import pool from "./db/db.js";
import claimRoutes from "./routes/claimroutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/claims", claimRoutes);

app.get("/", (req, res) => {
    res.json({ message: "hello from backend" });
});

app.listen(PORT, () => {
    console.log(`app is listening to port ${PORT}`);
});