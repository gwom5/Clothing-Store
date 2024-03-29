export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((cartItem) => (cartItem.id === itemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem));
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToClear) => cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);

export const removeItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  if (existingItem.quantity === 1) {
    return clearItemFromCart(cartItems, itemToRemove);
  }
  return cartItems.map((cartItem) => (cartItem.id === itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};
