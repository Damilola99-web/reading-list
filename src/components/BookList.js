import { db } from "../firebase/config"
import { collection, deleteDoc, doc } from "firebase/firestore"
export default function BookList({ books }) {

  const handleClick = async (id) => {
    const docu = doc(db, 'books', id )
    await deleteDoc(docu)
  }

  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}