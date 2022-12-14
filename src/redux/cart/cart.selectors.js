import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((accumalatedPrice, { quantity, price }) => accumalatedPrice + quantity * price, 0)
);

export const selectCarthidden = createSelector([selectCart], cart => cart.hidden);
