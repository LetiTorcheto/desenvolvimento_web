import { reducer as userReducer } from "../slices/receptorSlice";
import { reducer as productReducer } from "../slices/produtoSlice";
import { reducer as orderReducer } from "../slices/pedidoSlice";
import { reducer as cartReducer } from "../slices/carrinhoSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer , 
  order: orderReducer,
  cart: cartReducer,
});