import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import { conexion } from './services/conexion.js';
import cors from 'cors';



const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Configure CORS to allow multiple domains
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(router)
app.use(express.static(join(__dirname, 'public')))
app.listen(3000)
conexion();
console.log('Server is running on http://localhost:3000');