import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey            : 'AIzaSyAuqpGQEatPaksNiqcxnfT6palvgKA8JFM',
	authDomain        : 'fir-9-23f3e.firebaseapp.com',
	projectId         : 'fir-9-23f3e',
	storageBucket     : 'fir-9-23f3e.appspot.com',
	messagingSenderId : '372551332706',
	appId             : '1:372551332706:web:da94f0f2f54145c133b23b'
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };
