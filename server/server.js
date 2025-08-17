const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// CORS setup (must be before routes)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

// --- ROUTES ---

// User management routes
app.use('/api/users', require('./routes/userRoutes'));

// Authentication routes
app.use('/api/auth', require('./routes/authRoutes'));

// Memory routes
app.use('/api/memories', require('./routes/memoryRoutes'));

// Adoption routes
app.use('/api/adoptions', require('./routes/adoptionRoutes'));

// Animal Specialists routes
app.use('/api/specialists', require('./routes/animalSpecialistRoutes'));

// Services routes
app.use('/api/services', require('./routes/servicesRoutes'));

// Appointment routes
app.use('/api/appointments', require('./routes/appointmentRoutes'));

// Product routes
app.use('/api/products', require('./routes/productRoutes'));

// Order routes
app.use('/api/orders', require('./routes/orderRoutes'));

// Hostel Order routes
app.use('/api/hostel-orders', require('./routes/hostelOrderRoutes'));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));