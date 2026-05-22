const express = require('express');
const app = express();
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes'); // Added for authentication

app.use(express.json());

// Link the routes to their respective endpoints
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes); 
app.use('/api/auth', authRoutes); // Added for Task 11

app.get('/', (req, res) => {
    res.send("GiftLink Backend is Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
