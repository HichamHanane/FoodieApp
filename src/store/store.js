import { configureStore } from "@reduxjs/toolkit";
import RestaurantSlice  from "../features/RestaurantSlice";

export const store = configureStore({
    reducer:{
        restaurant : RestaurantSlice
    }
});