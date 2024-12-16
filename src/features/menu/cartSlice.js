import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  //   cart: [
  //     {
  //       pizzaID: 12,
  //       name: "Mediterranean",
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload is the item that we want to add to the cart
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      // payload here is the pizzaID that we want to delete
      state.cart = state.cart.filter((item) => item.pizzaID !== action.payload);
    },

    increaseItemQuantity(state, action) {
      // payload here is the pizzaID that we want to increase the quantity of
      const item = state.cart.find((item) => item.pizzaID === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      // payload here is the pizzaID that we want to decrease the quantity of
      const item = state.cart.find((item) => item.pizzaID === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
