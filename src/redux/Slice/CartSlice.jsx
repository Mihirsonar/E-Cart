import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [], // Initialize as an array
};
export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    Add: (state,action) => {
     
      state.cartItems.push(action.payload);
    },
    decrement: (state) => {
      state.value -= 1
    },
    AddByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { Add, decrement, AddByAmount } = cartSlice.actions

export default cartSlice.reducer