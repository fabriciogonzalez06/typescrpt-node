export interface globalResponseInterface{
    ok:boolean,
    body:any[],
}


export const returnData= (data:any,comodin:number):globalResponseInterface=>{

    if(comodin===1){
        return {body:data,ok:true}
    }else{
        return {body:[],ok:false};
    }

}