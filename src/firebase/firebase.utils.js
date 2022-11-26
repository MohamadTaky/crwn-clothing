import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
export const SignInWithGoogle = async () => {
	try {
		const resualt = await signInWithPopup(auth, provider);
	} catch (error) {}
};
