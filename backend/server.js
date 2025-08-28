import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apiRoutes from './routes/Router.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors({
    origin: [
        process.env.FRONTEND_URL,
        process.env.FRONTEND_URL2,
    ],
    credentials: true,
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('', apiRoutes);
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));

const mongoUri = `${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`;
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
        console.log(`Server running on port ${process.env.PORT}`)
    );
}).catch(err => console.error('MongoDB connection error:', err));
