import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

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
                toast.success('New Plate was Added successfully To Panier ')


            } catch (error) {
                console.log("Error while adding to panier : ", error);
            }
        },
        Delete: (state, action) => {
            try {
                console.log('dispatch delete :' , action);
                let filterdArray = state.panier_list.filter((p)=> p?.['Food Name'] != action.payload);
                state.panier_list = filterdArray,
                state.number_of_commands -= 1
                toast.success('Plate was deleted successfully ')
                
            } catch (error) {
                console.log('Error while deleting a menu from panier : ', error);

            }
        }
    }
    // extraReducers
})

export const { Add , Delete } = PanierSlice.actions
export default PanierSlice.reducer
