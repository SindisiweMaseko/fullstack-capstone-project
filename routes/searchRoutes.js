const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Route to filter items by category
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        let query = {};
        
        // Filter by category if provided in the URL query string
        if (req.query.category) {
            query.category = req.query.category;
        }

        const gifts = await db.collection("gifts").find(query).toArray();
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
