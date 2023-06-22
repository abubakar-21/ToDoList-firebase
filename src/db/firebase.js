import { initializeApp } from 'firebase/app';

import {
    getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAA3LyIn7B5wh9iq4FejnzzORgnfpdmGsU",
    authDomain: "todolist-d2006.firebaseapp.com",
    projectId: "todolist-d2006",
    storageBucket: "todolist-d2006.appspot.com",
    messagingSenderId: "1039774985257",
    appId: "1:1039774985257:web:e469c372a1e646567bc038",
    measurementId: "G-1DNNDR9RQQ"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db