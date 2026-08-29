import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "ai-image-genreator.firebaseapp.com",
  projectId: "ai-image-genreator",
  storageBucket: "ai-image-genreator.firebasestorage.app",
  messagingSenderId: "355012119791",
  appId: "1:355012119791:web:71ea91c4182baf13fd9f1a",
  measurementId: "G-5M4551VJZC"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const analytics = getAnalytics(app);
export {app,auth}