export const pizzaCount = (id) => ({
  type: 'INCREMENT_COUNT',
  payload: id,
});

export const dropCount = () => ({
  type: 'DROP_COUNTER',
});

export const removeCounter = (id) => ({
  type: 'REMOVE_COUNTER',
  payload: id,
});

export const pizzaSizesAction = (size) => ({
  type: 'SET_PIZZA_SIZE',
  payload: size,
});
export const pizzaTypesAction = (activeType) => ({
  type: 'SET_PIZZA_TYPE',
  payload: activeType,
});
