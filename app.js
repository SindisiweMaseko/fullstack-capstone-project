const express = require('express');
const app = express();
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use(express.json());

// Link the routes to their respective endpoints
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes); 

app.get('/', (req, res) => {
    res.send("GiftLink Backend is Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
