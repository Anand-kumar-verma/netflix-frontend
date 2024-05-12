import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBq8WvIvKEFonZLZqGXWJtZiyvb0wK627A",
  authDomain: "testing-movie-project.firebaseapp.com",
  projectId: "testing-movie-project",
  storageBucket: "testing-movie-project.appspot.com",
  messagingSenderId: "534273853757",
  appId: "1:534273853757:web:339955ff4daf5e6b131d54",
  measurementId: "G-476W56EBQ1",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);



 // apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
  // authDomain: "react-auth-6788d.firebaseapp.com",
  // projectId: "react-auth-6788d",
  // storageBucket: "react-auth-6788d.appspot.com",
  // messagingSenderId: "131797845021",
  // appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
  // measurementId: "G-VWPBR1NSLL",



  
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBq8WvIvKEFonZLZqGXWJtZiyvb0wK627A",
//   authDomain: "testing-movie-project.firebaseapp.com",
//   projectId: "testing-movie-project",
//   storageBucket: "testing-movie-project.appspot.com",
//   messagingSenderId: "534273853757",
//   appId: "1:534273853757:web:339955ff4daf5e6b131d54",
//   measurementId: "G-476W56EBQ1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
