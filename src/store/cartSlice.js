import { createSlice ,createSelector } from '@reduxjs/toolkit'


const initialState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom: 200,
};


export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;

            // for checking that item is already in cart. if it is, then push in cart else just add quantity
            const cartItem = state.items.find((item) => item.product.id === newProduct.id);
            if (cartItem) {

                cartItem.quantity += 1;
            }
            else {
                state.items.push({ product: newProduct, quantity: 1 });
                console.log("after are:  ", state.items);

            }
        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            console.log("product id          ", amount);
            console.log("items:         ", state.items);


            const cartItem = state.items.find((item) => item.product.id === productId);
            console.log("cartItem reurn :    ", cartItem);
            if (cartItem) {
                cartItem.quantity += amount
            }
            if (cartItem.quantity <= 0) {
                // then we need to remove that item section from shopping cart
                state.items = state.items.filter((item) => item !== cartItem)
            }

        },
    }

})
export const selectedNumberOfItems = (state) => state.cart.items.length;
export const selectSubTotal = (state) =>
    state.cart.items.reduce((sum, cartItem) => sum + cartItem.product.price * cartItem.quantity, 0); // here reduce is a javascript function , not a redux reducer

const cartSelector=(state)=> state.cart;
// now we need to add deleviry where we need here or depend on above function( selectSubTotal ,cartSelector)in this same file. so now we 
// need redux toolkit function createSeleceter()
export const selectDeliveryPrice = createSelector(
    cartSelector,
    selectSubTotal,
     (cart,subtotal) =>  (subtotal >cart.freeDeliveryFrom ? 0 : cart.deliveryFee)  
);

export const selectTotal=createSelector(
    selectSubTotal,
    selectDeliveryPrice,
    (subtotal,delivery)=> subtotal+ delivery
)