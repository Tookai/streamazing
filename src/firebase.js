import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYlW3grhzYxxMdLJUVKeUYoAMlcWmvivM",
  authDomain: "streamazing-stream.firebaseapp.com",
  databaseURL: "https://streamazing-stream.firebaseio.com",
  projectId: "streamazing-stream",
  storageBucket: "streamazing-stream.appspot.com",
  messagingSenderId: "901358342273",
  appId: "1:901358342273:web:0cd06aa13e110ccbe57d80",
  measurementId: "G-V0PVLE9X8S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
