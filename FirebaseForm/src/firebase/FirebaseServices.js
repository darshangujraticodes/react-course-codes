import db from "./FirebaseConfig.js";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");

class BookDataServices {
  addBook = (newbookdata) => {
    return addDoc(bookCollectionRef, newbookdata);
  };

  updateBook = (id, updatedbookdata) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedbookdata);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  getSingleBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };
}
const bookService = new BookDataServices();

export default bookService;
