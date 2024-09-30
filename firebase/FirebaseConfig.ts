// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB64akH52L8uAV8Wb3E-JaXEpETcpYXv7M',
  authDomain: 'login-64416.firebaseapp.com',
  projectId: 'login-64416',
  storageBucket: 'login-64416.appspot.com',
  messagingSenderId: '751272423707',
  appId: '1:751272423707:web:9e392d3eec2ed00fece3be',
  measurementId: 'G-G7PS291Z1R'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)
