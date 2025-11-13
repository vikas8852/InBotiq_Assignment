import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db';          //  new import
import authRoutes from './routes/auth';

dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB(); //  connect to MongoDB when server starts

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser()); // enables reading cookies if needed for JWT

// Routes
app.use('/auth', authRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running with MongoDB ' });
});

// Start server
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
