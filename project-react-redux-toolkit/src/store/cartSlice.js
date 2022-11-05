
import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const CartSlice= createSlice({
    name : "cart",
    initialState,
    reducers: {
        additem(state,action){
            state.push(action.payload)

        },
        removeitem(state,action){
            return state.filter((item)=>item.id!==action.payload)

        }
    }
})


export const {additem,removeitem} = CartSlice.actions;

export default CartSlice.reducer;