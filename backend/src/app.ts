import express from 'express';
import cors from 'cors';
import componentsRoutes from './routes/components';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/components', componentsRoutes);

export default app;
