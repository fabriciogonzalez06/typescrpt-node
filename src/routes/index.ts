import express from 'express';

import clientesRoutes from './clientesRoutes';
const app= express();

app.use('/administracion',clientesRoutes);




export default app;
