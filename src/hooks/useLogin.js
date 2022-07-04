import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
export const useLogin = () => {
	const { dispatch } = useAuthContext();
	const [ error, setError ] = useState(null);
	const [ isPending, setIspending ] = useState(false);

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

	return { login, error, isPending };
};
