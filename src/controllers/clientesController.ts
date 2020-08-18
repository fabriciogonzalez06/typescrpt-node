import { returnData, globalResponseInterface } from "../utils/globalResponse";

export interface clienteInterface{
    id:number,
    nombre:string,
    edad:number,
    tipoCliente:string
}


 class Clientes{

    private clientes:clienteInterface[];
    constructor(){
        this.clientes=[];
    }

  
  async getClientes(parametros?:any):Promise<globalResponseInterface>{
        try {     
            return returnData(this.clientes,1);
        } catch (error) {
            return returnData(null,0);
        }
    }   

  async postCliente(parametros:clienteInterface):Promise<globalResponseInterface>{
        try {     
            this.clientes.push(parametros);
            return returnData(this.clientes,1);
        } catch (error) {
            return returnData(null,0);
        }
    }   



}
 
export default  Clientes;