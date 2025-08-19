import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get restaurants 
export const getRestaurants = createAsyncThunk("restaurant/getRestaurants", async (__, { rejectWithValue }) => {
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
    try {
        const options = {
            url: 'https://yelp-business-api.p.rapidapi.com/search',
            params: {
                location: 'Paris',
                search_term: 'Restaurants',
                limit: '10',
                offset: '0',
                business_details_type: 'basic'
            },
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'yelp-business-api.p.rapidapi.com'
            }
        };
        const response = await axios.get(`${options.url}`,{params:options.params,headers:options.headers})
        console.log('response get restaurant', response);
        localStorage.setItem('restaurants',JSON.stringify(response.data.business_search_result))
        return response.data;
    }
    catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message);
    }

});



export const RestaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurants: [],
        isloading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurants.pending, (state, action) => {
                state.isloading = true;
                state.error = null;
                console.log('Action pending',action);

            })
            .addCase(getRestaurants.fulfilled, (state, action) => {
                state.isloading = false;
                console.log('Action fulfilled',action.payload.business_search_result);
                
                state.restaurants = action.payload.business_search_result;
                state.error = null;
            })
            .addCase(getRestaurants.rejected, (state, action) => {
                state.isloading = false;
                console.log('Action rejected',action);

                // state.posts.push(action.payload);
                // state.error = action.payload;
            })
    }
})

export default RestaurantSlice.reducer;
