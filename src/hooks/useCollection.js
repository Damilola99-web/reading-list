import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, where, query } from 'firebase/firestore';
import { useRef } from 'react';

export const useCollection = (c, _q) => {
	const [ documents, setDocuments ] = useState(null);

    const q = useRef(_q).current

	useEffect(
		() => {
			let ref = collection(db, c);

            if (q) {
                ref = query(ref, where(...q))
            }


			const unsub = onSnapshot(ref, (snapshot) => {
				let result = [];
				snapshot.docs.forEach((doc) => {
					result.push({ id: doc.id, ...doc.data() });
				});
				setDocuments(result);
			});

			return () => unsub();
		},
		[ c, q ]
	);

	return { documents };
};
