import { Router } from 'express';
import accountRoutes from './account.routes.js'; // Reemplaza con la ubicación real de tus archivos de rutas
import roleRoutes from './role.routes.js';

const router = Router();

router.use('/accounts', accountRoutes);
router.use('/roles', roleRoutes);

// Middleware de ruta de error
router.use((req, res) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});

export function mainRoutes(app) {
    app.use('/api', router);
}