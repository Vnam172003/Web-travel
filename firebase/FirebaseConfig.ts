// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBwi5d0i__hi203_tgXMZv1a_FFiFwb-gY',
  authDomain: 'btravel-8b2ec.firebaseapp.com',
  projectId: 'btravel-8b2ec',
  storageBucket: 'btravel-8b2ec.firebasestorage.app',
  messagingSenderId: '808484731636',
  appId: '1:808484731636:web:ee22fdeffe90bce60dfca1',
  measurementId: 'G-X9WJS6X33W'
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)
