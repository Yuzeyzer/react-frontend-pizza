const initialState = {
  items: {},
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT': {
      const savedCounter = !state.items[action.payload] ? 1 : state.items[action.payload].count + 1;

      const newCounter = {
        ...state.items,
        [action.payload]: {
          count: savedCounter,
        },
      };

      return {
        ...state,
        items: newCounter,
      };
    }
    default:
      return state;
  }
};

export default pizzas;
