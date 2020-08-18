
import express, { Router, Request, Response } from 'express';
import Clientes from  '../controllers/clientesController';
import { globalResponseInterface } from '../utils/globalResponse';


const router:Router  = Router();

router.get('/clientes', async (req: Request, res: Response) => {

    const clientes = new Clientes();

    clientes.getClientes().then((result: globalResponseInterface) => {
        return (result.ok) ? res.status(200).send(result) : res.status(400).send(result);
    });
});

router.post('/clientes', async (req: Request, res: Response) => {

    const clientes = new Clientes();
    const params=req.body;
    const result= await clientes.postCliente(params);

    if(result.body){
        res.status(200).send(result);
    }else{
        res.status(400).send(result);
    }
});

export default router;