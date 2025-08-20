import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
// get restaurants 
export const getRestaurants = createAsyncThunk("restaurant/getRestaurants", async (__, { rejectWithValue }) => {
    
    try {
        const options = {
            url: 'https://yelp-business-api.p.rapidapi.com/search',
            params: {
                location: 'New York, NY',
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
        return response.data.business_search_result;
    }
    catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.message);
    }

});


// get restaurant details 
export const getRestaurantDetails = createAsyncThunk('restaurant/getRestaurantDetails', async (id, { rejectWithValue }) => {
    try {
        let data = await JSON.parse(localStorage.getItem('restaurants'));
        let restaurant = await data.filter((res) => res.id == id)
        console.log('Restaurant filterd :', restaurant);

        return restaurant;
    }
    catch (error) {
        console.log('Error while getting restaurant details :', error);
        return rejectWithValue(error.response.data.message);
    }
})


// get restaurant's menu
export const getRestaurantMenu = createAsyncThunk('restaurant/getRestaurantMenu', async (id, { rejectWithValue }) => {
    // const apiUrl = "https://yelp-business-api.p.rapidapi.com/get_menus";
    try {
        console.log('restaurant menu id :',id);
        
        const options = {
            url: "https://yelp-business-api.p.rapidapi.com/get_menus",
            params: {
                business_id: id,
            },
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'yelp-business-api.p.rapidapi.com'
            }
        };
        let response = await axios.get(options.url, { params: options.params, headers: options.headers });
        console.log('Restaurant menu response :', response);
        let get20Menu = response.data.menus.slice(0,21);
        return get20Menu;
    } catch (error) {
        console.log('Error while getting restaurant menu :',error);
        return rejectWithValue(error.response);
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
        resturantMenu:{
            menu:[],
            isloading:false,
            error:null
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
                console.log("restaurant details fulfilled : ", action);

                state.restaurantDetails.data = action.payload[0];
            })
            .addCase(getRestaurantDetails.rejected, (state, action) => {
                state.restaurantDetails.isloading = false
                state.restaurantDetails.error = action.payload
                console.log('Action rejected', action);
            })

            //get restaurant's menu

            .addCase(getRestaurantMenu.pending,(state,action)=>{
                console.log('restaurant menu pending :' , action);
                state.resturantMenu.isloading=true;
            })
            .addCase(getRestaurantMenu.fulfilled,(state,action)=>{
                console.log('restaurant fulfilled :', action);
                state.resturantMenu.isloading=false;
                state.resturantMenu.menu=action.payload;
                
            })
            .addCase(getRestaurantMenu.rejected,(state,action)=>{
                console.log('Restaurant menu rejected :',action);
                // state.resturantMenu.error=
                state.resturantMenu.isloading=false; 
            })




    }
})

export default RestaurantSlice.reducer;
