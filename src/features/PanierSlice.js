import { createSlice } from "@reduxjs/toolkit";





export const PanierSlice = createSlice({
    name:"panier",
    initialState:{
        commands:[],
        number_of_commands:100,
        isLoading:false,
        error:null
    },
    reducers:{}
    // extraReducers
})

export default PanierSlice.reducer