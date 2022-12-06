import ShopActionTypes from "./shop.types";

export const updateCollections = collectinsMap => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectinsMap,
});
