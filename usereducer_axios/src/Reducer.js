
// creating actions

 export const GETDATA = "GETDATA";
 export const LOADING = "LOADING";
 export const SUCESS = "SUCESS";
 export const ERROR = "ERROR";

// creating initialstate

export const initialstate={
    data : [],
    status : "success"
}





 export const reducer=(state,{type,payload})=>{
    switch(type){
        case GETDATA : return {...state,data:payload}
        case LOADING : return {...state,data:[],status:payload}
        case SUCESS : return {...state,status : payload}
        case ERROR : return {...state,status : payload}
        default : return state
    }


 }


 