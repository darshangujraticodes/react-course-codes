import { Default } from "react-toastify/dist/utils";
import db from "./firebaseConfig";

import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// syntax var = collection(firestore-config, firestore_collection_name)
const studentCollectionRef = collection(db, "students");

class StudentDataService {
  addStudent = (newStudentData) => {
    // addDoc(collection_instance, new_insert_data)
    return addDoc(studentCollectionRef, newStudentData);
  };

  // syntax var = collection(firestore-config, firestore_collection_name)
  updateStudent = (id, updateStudentData) => {
    //here we are checking whether data is present or not
    const bookDoc = doc(db, "students", id);
    // updateDoc(getdata, update_data)
    return updateDoc(bookDoc, updateStudentData);
  };

  deleteStudent = (id) => {
    const bookDoc = doc(db, "students", id);

    return deleteDoc(bookDoc);
  };

  getAllStudents = () => {
    return getDocs(studentCollectionRef);
  };

  getStudent = (id) => {
    const bookDoc = doc(db, "students", id);
    return getDoc(bookDoc);
  };
}

export default new StudentDataService();
