import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

const initialState = {
  cardData: []
};

export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: [...state.cardData, action.data]
      };
    case REMOVE_TO_CART:
      const updatedCart = [...state.cardData];
      updatedCart.pop();
      return {
        ...state,
        cardData: updatedCart
      };
    default:
      return state;
  }
}
