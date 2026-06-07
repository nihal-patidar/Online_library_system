import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name : "book",
    initialState : {
        items : []
    },
    reducers : {
        addBook : (state,action)=>{
            state.items.unshift(action.payload);
        }
    }
})

export const {addBook } = bookSlice.actions ;
export default bookSlice.reducer ; 