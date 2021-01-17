export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      console.log('Removing From cart(Reducer)');
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id : ${action.id}) since it is not in cart!`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      };
    default:
      return;
  }
};
export default reducer;
