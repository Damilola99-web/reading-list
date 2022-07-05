import { auth } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';

export const useLogin = () => {
	const { dispatch } = useAuthContext();
	const [ error, setError ] = useState(null);
	const [ isPending, setIspending ] = useState(false);

	const googleSignUp = () => {
		console.log('hey');
		const provider = new GoogleAuthProvider();
		setIspending(true);
		setError(null);
		signInWithRedirect(auth, provider)
			.then((res) => {
				dispatch({ type: 'LOGIN', payload: res.user });
				setIspending(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIspending(false);
			});
	};
	const githubSignUp = () => {
		const provider = new GithubAuthProvider();
		setIspending(true);
		setError(null);
		signInWithPopup(auth, provider)
			.then((res) => {
				dispatch({ type: 'LOGIN', payload: res.user });
				setIspending(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIspending(false);
			});
	};

	const login = (email, password) => {
		setIspending(true);
		setError(null);
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				dispatch({ type: 'LOGIN', payload: res.user });
				setIspending(false);
				setError(null);
			})
			.catch((err) => {
				setIspending(false);
				setError(err.message);
			});
	};

	return { login, error, isPending, googleSignUp, githubSignUp };
};
