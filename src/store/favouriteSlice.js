import { createSlice } from '@reduxjs/toolkit';

const  initialState={
    favouritesss: {},

}
export const favouritesSlice= createSlice({
    name: 'favorites',
    initialState,
    reducers:{
            updateFavourite: (state, action) => {
                const productId = action.payload;
                if (state.favouritesss[productId]) {
                    delete state.favouritesss[productId]; // Remove from favorites
                } else {
                    state.favouritesss[productId] = true; // Add to favorites
                }
            },
    },
    
})

