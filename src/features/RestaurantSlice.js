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

        if (localStorage.getItem('restaurants')) {
            let data = JSON.parse(localStorage.getItem('restaurants'));
            return data;
        }
        const response = await axios.get(`${options.url}`, { params: options.params, headers: options.headers })
        console.log('response get restaurant', response);
        localStorage.setItem('restaurants', JSON.stringify(response.data.business_search_result))
        return response.data;
    }
    catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message);
    }

});


// get restaurant details 

export const getRestaurantDetails = createAsyncThunk('restaurant/getRestaurantDetails', async(id, { rejectWithValue }) => {
    try {
        let data = await JSON.parse(localStorage.getItem('restaurants'));
        let restaurant = await data.filter((res)=> res.id == id)
        console.log('Restaurant filterd :',restaurant);
        
        return restaurant;
    }
    catch (error) {
        console.log('Error while getting restaurant details :', error);
        return rejectWithValue(error.response.data.message);
    }
})



export const RestaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurants: [],
        restaurantDetails: {
            data: {},
            isloading: false,
            error: null
        },
        isloading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRestaurants.pending, (state, action) => {
                state.isloading = true;
                state.error = null;
                console.log('Action pending', action);

            })
            .addCase(getRestaurants.fulfilled, (state, action) => {
                state.isloading = false;
                console.log('Action fulfilled', action.payload);

                state.restaurants = action.payload;
                state.error = null;
            })
            .addCase(getRestaurants.rejected, (state, action) => {
                state.isloading = false;
                console.log('Action rejected', action);
            })

            // get restaurant details 

            .addCase(getRestaurantDetails.pending, (state, action) => {
                state.restaurantDetails.isloading = true
            })
            .addCase(getRestaurantDetails.fulfilled, (state, action) => {
                state.restaurantDetails.isloading = false
                console.log("restaurant details fulfilled : " , action);
                
                state.restaurantDetails.data = action.payload[0];
            })
            .addCase(getRestaurantDetails.rejected, (state, action) => {
                state.restaurantDetails.isloading = false
                state.restaurantDetails.error = action.payload
                console.log('Action rejected', action);
            })

    }
})

export default RestaurantSlice.reducer;
