const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// API Endpoint for User Registration
router.post('/register', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const { email, password } = req.body;
        
        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        await db.collection("users").insertOne({ email, password });
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API Endpoint for User Login
router.post('/login', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const { email, password } = req.body;

        const user = await db.collection("users").findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Mock token for authentication simulation
        const token = "mock-jwt-token-xyz123";
        res.json({ token, message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API Endpoint for Updating User Information
router.put('/update', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const { email, newPassword } = req.body;

        const result = await db.collection("users").updateOne(
            { email },
            { $set: { password: newPassword } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User profile updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
