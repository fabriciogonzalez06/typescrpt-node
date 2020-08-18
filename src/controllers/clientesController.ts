import { returnData, globalResponseInterface } from "../utils/globalResponse";

export interface clienteInterface{
    id:number,
    nombre:string,
    edad:number,
    tipoCliente:string
}


const clientes:clienteInterface[]=[];

 class Clientes{

    constructor(){
        
    }

  
  async getClientes(parametros?:any):Promise<globalResponseInterface>{
        try {     
            return returnData(clientes,1);
        } catch (error) {
            return returnData(null,0);
        }
    }   

  async postCliente(parametros:clienteInterface):Promise<globalResponseInterface>{
        try {     
            clientes.push(parametros);
            
            return returnData(clientes,1);
        } catch (error) {
            return returnData(null,0);
        }
    }   



}
 
export default  Clientes;