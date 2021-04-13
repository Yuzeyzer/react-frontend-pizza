export const addCartAction = (pizzaObject) => ({
  type: 'ADD_CART',
  payload: pizzaObject,
});

export const clearCartAction = () => ({
  type: 'CLEAR_CART',
});
