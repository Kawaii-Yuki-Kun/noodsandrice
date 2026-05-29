// Firebase configuration for Noods N' Rice
const firebaseConfig = {
  apiKey: "AIzaSyCaOr8TtA1UladzdDD4dorHTAPOTgPC1HY",
  authDomain: "noodsnrice-fb710.firebaseapp.com",
  projectId: "noodsnrice-fb710",
  storageBucket: "noodsnrice-fb710.firebasestorage.app",
  messagingSenderId: "899097447006",
  appId: "1:899097447006:web:428cf0984c61dee54c82cf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
