import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    query,
    where,
  } from "firebase/firestore";
  
  import db from "./firebase";
  
  // skapa
  export const addTodosDB = async (todo) => {
    try {
      const docRef = await addDoc(collection(db, "todos"), todo);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  // läser
  export const fetchFromDB = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const docs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return docs;
    } catch (error) {
      console.error("Error fetching documents: ", error);
      throw error;
      return [];
    }
  };
  
  // uppdatera
  export const updateTodosDB = async (id, todo) => {
    try {
      const docRef = doc(db, "todos", id);
      await updateDoc(docRef, todo);
    } catch (error) {
      console.error("Error updateing document: ", error);
    }
  };
  
  // ta bort
  export const deleteTodoDB = async (id) => {
    try {
      const docRef = doc(db, "todos", id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };