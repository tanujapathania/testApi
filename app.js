// server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load config
dotenv.config({ path: './config/.env' });

const app = express();
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
