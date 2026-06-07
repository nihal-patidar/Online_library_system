import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../redux/bookSlice";
const appStore = configureStore({
    reducer : {
        book : bookSlice 
    }
})

export default appStore ;
