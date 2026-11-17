import { configureStore } from "@reduxjs/toolkit";
import SliceSearch from "./searchSlice";
import CollectionSlice from "./CollectonSlice";

export const MediaStore = configureStore({
    reducer:{
        SliceStore:SliceSearch,
        CollectionStore:CollectionSlice
        
    }
})