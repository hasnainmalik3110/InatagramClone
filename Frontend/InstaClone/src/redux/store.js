import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./themeSlice/themeslice"

export const store=configureStore({
    reducer:{
        theme:ThemeReducer
    }
})