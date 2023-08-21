import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';
import { CartSlice } from './cartSlice';
import { favouritesSlice } from './favouriteSlice';



const store = configureStore({
    reducer: {
        productss:productsSlice.reducer,
        cart:CartSlice.reducer,
        favouritee:favouritesSlice.reducer,
    }
});
export default store;