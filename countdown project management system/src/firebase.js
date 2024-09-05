// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyA8V0K4UwjGCEgWHGffgm0TG-x1IAYe9fY",
//   authDomain: "countdown-management-system.firebaseapp.com",
//   projectId: "countdown-management-system",
//   storageBucket: "countdown-management-system.appspot.com",
//   messagingSenderId: "308774998747",
//   appId: "1:308774998747:web:e97b1f40c57baee197b2fe"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBGWuXigJ2tDKpmjH5Bdgjl6ojcgiVVGiQ",
  authDomain: "countdown-b4ede.firebaseapp.com",
  projectId: "countdown-b4ede",
  storageBucket: "countdown-b4ede.appspot.com",
  messagingSenderId: "927277825740",
  appId: "1:927277825740:web:6153b3f3325a62612e8c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
//  const auth = getAuth(app);
// export {db , getAuth}
 const auth = getAuth(app)
 const db = getFirestore(app)
 export {db , auth};

