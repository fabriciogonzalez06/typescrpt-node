import {Router} from 'express';

import clientesRoutes from './clientesRoutes';
const app=   Router();

app.get('/clientes',clientesRoutes);

export default app;
