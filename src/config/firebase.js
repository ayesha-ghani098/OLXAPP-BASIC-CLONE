import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB0E9tTmDPwEw2VqMq1VBP0TxUj-ySoqb8",
  authDomain: "olxxx-reactjs.firebaseapp.com",
  projectId: "olxxx-reactjs",
  storageBucket: "olxxx-reactjs.appspot.com",
  messagingSenderId: "209315939066",
  appId: "1:209315939066:web:436de329dc908f8321ff43",
  measurementId: "G-PC6T208HJY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider,storage };
export default db;

