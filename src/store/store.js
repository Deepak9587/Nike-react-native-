import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';
import { CartSlice } from './cartSlice';



const store = configureStore({
    reducer: {
        productss:productsSlice.reducer,
        cart:CartSlice.reducer,
    }
});
export default store;