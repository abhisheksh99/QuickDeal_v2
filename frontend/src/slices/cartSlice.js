import { createSlice } from "@reduxjs/toolkit"
import { updateCart } from "../utils/cartUtils"

// Initial state: Load cart from localStorage or set default
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] }


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => { // reducers take state and action, for now state = initial state and action is the data
      const item = action.payload // assigning data to a variable item

      // checking if item already exists
      const existItem = state.cartItems.find((x) => x._id === item._id)

      // mainly if item exists we want to update its qty
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        )
      } else {
        state.cartItems = [...state.cartItems, item]
      }

      return updateCart(state)

      
    },
    removeFromCart: (state,action) =>{
        state.cartItems = state.cartItems.filter((x) => x._id!==action.payload)
        return updateCart(state)
    }
  },
})

// Export the addToCart action
export const { addToCart, removeFromCart } = cartSlice.actions

// Export the reducer
export default cartSlice.reducer