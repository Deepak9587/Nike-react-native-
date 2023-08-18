import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';



const store = configureStore({
    reducer: {
        productss:productsSlice.reducer,
    }
});
export default store;