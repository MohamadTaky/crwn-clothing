import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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

const provider = new GoogleAuthProvider();
export const SignInWithGoogle = async () => {
	try {
		const resualt = await signInWithPopup(auth, provider);
	} catch (error) {}
};
