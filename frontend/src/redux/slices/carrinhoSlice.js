import { createSlice } from "@reduxjs/toolkit";
import cartAPI from "../../mocks/carrinho";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    shippingAddress: {},
    paymentMethod: null, // Adicionamos o estado inicial para paymentMethod
  },
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
    },
    removeCartItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((x) => x._id !== id);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setShippingAddress(state, action) {
      state.shippingAddress = action.payload;
      localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
    },
    // Removemos a ação setPaymentMethod do slice
  },
});

export const {
  setCartItems,
  removeCartItem,
  setShippingAddress,
  // Removemos a exportação de setPaymentMethod daqui
} = cartSlice.actions;

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { cartItems } = getState().cart;
    const product = await cartAPI.fetchProduct(id);

    let existingItemIndex = -1;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i]._id === id) {
        existingItemIndex = i;
        break;
      }
    }

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].qty += qty;
      dispatch(setCartItems(updatedCartItems));
    } else {
      dispatch(setCartItems([...cartItems, { ...product, qty }]));
    }
  } catch (error) {
    console.log("Erro ao adicionar item ao carrinho:", error);
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  try {
    dispatch(removeCartItem(id));
  } catch (error) {
    console.log("Erro ao remover item do carrinho:", error);
  }
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch(setShippingAddress(data));
};

// Removemos a exportação de savePaymentMethod

export const { reducer } = cartSlice;
export default cartSlice;
