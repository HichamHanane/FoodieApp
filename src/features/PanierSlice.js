import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AddToPanier = createAsyncThunk('panier/AddToPanier', async (data, { rejectWithValue }) => {
    try {
        console.log('Menu data to add :', data);
        return data;

    }
    catch (error) {
        console.log("Error while adding to panier : ", error);

    }
})



export const PanierSlice = createSlice({
    name: "panier",
    initialState: {
        panier_list: [],
        number_of_commands: 0,
        isLoading: false,
        error: null
    },
    reducers: {
        Add: (state, action) => {
            try {
                state.panier_list.push(action.payload);
                state.number_of_commands += 1
                console.log("dispatch successfully :", action);

            } catch (error) {
                console.log("Error while adding to panier : ", error);
            }
        }
    }
    // extraReducers
})

export const { Add } = PanierSlice.actions
export default PanierSlice.reducer
