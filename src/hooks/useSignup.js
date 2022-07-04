import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const {dispatch} = useAuthContext()
	const [ error, setError ] = useState(null);
	const [ isPending, setIspending ] = useState(false);

	const signup = (email, password) => {
		setIspending(true);
		setError(null);
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				dispatch({type: 'LOGIN', payload: res.user})
                setIspending(false)
                setError(null)
			})
			.catch((err) => {
				setError(err.message);
				setIspending(false);
			});
	};

	return { error, isPending, signup };
};
