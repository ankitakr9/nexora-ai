import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

app.use(cors({
    origin: "*"
}));

// Routes
app.use("/api", chatRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Nexora AI Backend Running Successfully.");
});

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with Database!");
    } catch (err) {
        console.log("Failed to connect with Db", err);
    }
};

// Start Server
app.listen(PORT, async () => {
    console.log(`server running on ${PORT}`);
    await connectDB();
});