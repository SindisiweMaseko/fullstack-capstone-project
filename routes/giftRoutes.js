const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Route to get all gifts (serving /api/gifts)
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const gifts = await db.collection("gifts").find({}).toArray();
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Route to get a specific gift by ID (serving /api/gifts/:id)
router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const gift = await db.collection("gifts").findOne({ id: req.params.id });
        if (!gift) {
            return res.status(404).send("Gift not found");
        }
        res.json(gift);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
