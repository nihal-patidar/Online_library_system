import { createSlice } from "@reduxjs/toolkit";
import books from "../data/booksData";

const bookSlice = createSlice({
    name : "book",
    initialState : {
        items : [...books]
    },
    reducers : {
        addBook : (state,action)=>{
            state.items.unshift(action.payload);
        }
    }
})

export const {addBook } = bookSlice.actions ;
export default bookSlice.reducer ; 