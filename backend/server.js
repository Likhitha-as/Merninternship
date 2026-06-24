import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Skill Exchange Backend Running");
});

app.use("/api", userRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, "0.0.0.0", () => {
        console.log("Server running on port 5000");
    });

})
.catch((err) => {
    console.log("MongoDB Error:", err);
});