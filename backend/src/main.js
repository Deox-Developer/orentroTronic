// Importaciones 
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { mainRoutes } from './routes/main.routes.js'; // Reemplaza con la ubicación real de tu archivo de rutas principales

function main() {
    
    //Configuraciones
    dotenv.config();
    const app = express();

    //midelwords -> Backend
    app.use(express.json())
    app.use(morgan('dev'));

    // Monta todas las rutas principales
    mainRoutes(app);

    // Define un puerto por defecto si PORT_BACK no está configurado
    const port = process.env.PORT_BACK || 3000;

    app.listen(port, () => {
        console.log('Backend ACTIVO - OrenTronic Port:', port, 'by FortiGuard App');
    });
}

main(); // Llama a la función main para iniciar el servidor