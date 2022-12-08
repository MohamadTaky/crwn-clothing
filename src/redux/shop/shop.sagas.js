import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

function* fetchCollectionsAsync() {
	try {
		const collectionRef = collection(db, "collections");
		const snapshot = yield call(getDocs, collectionRef);
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export default function* shopSagas() {
	yield all([fetchCollectionsStart]);
}
