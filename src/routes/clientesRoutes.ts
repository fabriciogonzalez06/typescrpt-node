
import express, { Router, Request, Response } from 'express';
import Clientes from  '../controllers/clientesController';
import { globalResponseInterface } from '../utils/globalResponse';


const router:Router  = Router();

router.get('/', async (req: Request, res: Response) => {

    const clientes = new Clientes();

    clientes.getClientes().then((result: globalResponseInterface) => {
        res.send(result);
    });
});

router.post('/', async (req: Request, res: Response) => {

    const clientes = new Clientes();
    const params=req.body;

    clientes.postCliente(params).then((result:globalResponseInterface)=>{
        res.send(result);
    });
});

export default router;