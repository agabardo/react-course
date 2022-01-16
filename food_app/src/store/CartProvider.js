import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {

  if (action.type == 'ADD') {
    const updateItems = state.items.concat(action.item);
    const updatedTotalAmount = parseInt(state.totalAmount, 10) + (parseInt(action.item.price, 10) * parseInt(action.item.amount, 10));
    return {
      items: updateItems,
      totalAmount: parseInt(updatedTotalAmount, 10)
    }
  }

  return defaultCartState;
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item
    });
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id: id
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: parseInt(cartState.totalAmount, 10),
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;