// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOaWM38PhwJyhJnzkqHoiML7aqsVSeZOY',
  authDomain: 'little-craft-stand-573d1.firebaseapp.com',
  projectId: 'little-craft-stand-573d1',
  storageBucket: 'little-craft-stand-573d1.appspot.com',
  messagingSenderId: '311287960201',
  appId: '1:311287960201:web:2e3a2b76b2bc1d49566c58',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(
  app,
  'gs://little-craft-stand-573d1.appspot.com'
)
