// Function to add decimals to a number
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  
export const updateCart = (state) =>{
    // Calculate Items price
    const itemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    state.itemsPrice = addDecimals(itemsPrice)

    // Calculate Shipping price (if order is over 100 then free else 10 usd shipping)
    const shippingPrice = itemsPrice > 100 ? 0 : 10
    state.shippingPrice = addDecimals(shippingPrice)

    // Calculate tax price (15%)
    const taxPrice = Number(0.15 * itemsPrice)
    state.taxPrice = addDecimals(taxPrice)

    // Calculate total price
    const totalPrice = Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)
    state.totalPrice = addDecimals(totalPrice)

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(state))

    return state

}