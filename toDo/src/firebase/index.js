import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyBAqjVIYkM4IoGF1Ev6OyRtS-U9kkvMJtU',
  authDomain: 'badass-todo-751b6.firebaseapp.com',
  projectId: 'badass-todo-751b6',
  storageBucket: 'badass-todo-751b6.appspot.com',
  messagingSenderId: '589005889705',
  appId: '1:589005889705:web:722c7d7eb4a3bfb65289b8'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export {
      db
}