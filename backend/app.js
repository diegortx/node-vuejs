const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const app = express();

// Middleware
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
