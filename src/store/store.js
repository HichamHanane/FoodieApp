import { configureStore } from "@reduxjs/toolkit";
import RestaurantSlice  from "../features/RestaurantSlice";
import PanierSlice  from "../features/PanierSlice";

export const store = configureStore({
    reducer:{
        restaurant : RestaurantSlice,
        panier:PanierSlice
        
    }
});