import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useAuthContext } from '../hooks/useAuthContext';

export default function BookForm() {
  const {user} = useAuthContext()
	const [ newBook, setNewBook ] = useState('');

	const handleSubmit = async (e) => {
		const ref = collection(db, 'books');
		e.preventDefault();
		await addDoc(ref, { title: newBook,  uid: user.uid});

		setNewBook('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>Add a new book title:</span>
				<input required type="text" onChange={(e) => setNewBook(e.target.value)} value={newBook} />
			</label>
			<button>Add</button>
		</form>
	);
}
// https://share.tutflix.org/#9/waF2lK34AYlPCBTTooE2e6g0567P+7vRSPkNsW3WZxbU8MnSkUiENYyNWgBDUDmGvnq52DvlVoMkmOvA==
// https://share.tutflix.org/#nxzutHYr5PRk3fxOs+0I4J0JzQrFhhe3NW3ZFYG+O6OVUes7oOI++F0oP/qZk3DWLkVDrrXUz1oe5xMkng==
