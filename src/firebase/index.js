//! 1.- importar métodos
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//! 2.- Pasamos la configuración de nuestra app
initializeApp({
  apiKey: 'AIzaSyCvWzIic8WIZ72NMfwzYD4UkXD_Bgi1F2E',
  authDomain: 'todo-app-acee0.firebaseapp.com',
  projectId: 'todo-app-acee0',
  storageBucket: 'todo-app-acee0.appspot.com',
  messagingSenderId: '890808877056',
  appId: '1:890808877056:web:196d23e3fee273f43f98e5',
});

//! 3.- Instanciar los servicios
export const db = getFirestore();
