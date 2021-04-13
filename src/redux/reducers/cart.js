const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => {
  return arr.reduce((sum, obj) => obj.price + sum, 0);
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART': {
      const savedPizzas = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newPizzas = {
        ...state.items,
        [action.payload.id]: {
          items: savedPizzas,
          totalPrice: getTotalPrice(savedPizzas),
        },
      };

      const totalCount = getTotalSum(newPizzas, 'items.length');
      const totalPrice = getTotalSum(newPizzas, 'totalPrice');

      return {
        ...state,
        items: newPizzas,
        totalCount,
        totalPrice,
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        items: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
