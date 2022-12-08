import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getFirestore, setDoc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAtR0YgLS-gCIa6hGS0dQS3p6J3QD7oJUk",
	authDomain: "crwn-db-c95c9.firebaseapp.com",
	projectId: "crwn-db-c95c9",
	storageBucket: "crwn-db-c95c9.appspot.com",
	messagingSenderId: "487454560788",
	appId: "1:487454560788:web:64ceb3bdaa092b5de10d01",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const createUserProfileDocument = async (user, additionalData) => {
	if (!user) return;
	const userRef = doc(db, `users/${user.uid}`);
	const snapshot = await getDoc(userRef);
	if (snapshot.exists()) return userRef;

	const { displayName, email } = user;
	const createdAt = new Date();

	try {
		await setDoc(userRef, { displayName, email, createdAt, ...additionalData });
	} catch (error) {
		console.log("error creating user ", error.message);
	}
	return userRef;
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			userAuth => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};

export const convertCollectionsSnapshotToMap = collections => {
	return collections.docs
		.map(doc => {
			const { title, items } = doc.data();
			return {
				routeName: encodeURI(title.toLowerCase()),
				id: doc.id,
				title,
				items,
			};
		})
		.reduce((accumulator, collection) => {
			accumulator[collection.title.toLowerCase()] = collection;
			return accumulator;
		}, {});
};

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach(object => {
		const docRef = doc(collectionRef);
		batch.set(docRef, object);
	});
	return await batch.commit();
};

export const googleProvider = new GoogleAuthProvider();
export const SignInWithGoogle = async () => {
	try {
		const resualt = await signInWithPopup(auth, googleProvider);
	} catch (error) {}
};
