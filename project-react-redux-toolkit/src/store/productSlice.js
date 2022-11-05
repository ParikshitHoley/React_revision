import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    ERROR : "error",
    SUCESS : "sucess",
    LOADING : "loading"
})



 const productSlice = createSlice({
    name : 'products',
    initialState :{
        data : [],
        status : STATUSES.SUCESS
    },
    reducers:{
        setProduct(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status=action.payload

        }
    }
})


const {setProduct,setStatus} = productSlice.actions

export function fetchProductThunk(){
    
    return  async function getProduct(dispatch,getState)
    {
      try{
         dispatch(setStatus(STATUSES.LOADING));
         const data = await fetch("https://fakestoreapi.com/products");
         const res= await data.json();
         console.log(res)
         dispatch(setProduct(res));
         dispatch(setStatus(STATUSES.SUCESS))
      }
      catch(err)
      {
          dispatch(setStatus(STATUSES.ERROR))
      }
    }
}

export default productSlice.reducer;