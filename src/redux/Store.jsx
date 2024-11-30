import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './Slice/CartSlice'
import productReducer from './Slice/ProductSlice';


export const store = configureStore({
  reducer: {
    Cart: cartSlice,
    product: productReducer,


  },
})