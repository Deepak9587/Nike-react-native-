import {createSlice} from '@reduxjs/toolkit'
import products from '../data/products.json'
const  initialState={
    productsss:products,
    selectedProduct:null,
}

export const productsSlice= createSlice({
    name:'productspp',
    initialState,
    reducers:{
        setSelectedProduct:(state,action)=>{
            // console.log("action   ",action);

            state.selectedProduct = state.productsss.find((p) => p.id === action.payload)}
    },
})