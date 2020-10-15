import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./App.css";

// API TMDB : 3ed5e0806e866ace9aac608d2020949e

// const firebaseConfig = {
//  apiKey: "AIzaSyBYlW3grhzYxxMdLJUVKeUYoAMlcWmvivM",
//  authDomain: "streamazing-stream.firebaseapp.com",
//  databaseURL: "https://streamazing-stream.firebaseio.com",
//  projectId: "streamazing-stream",
//  storageBucket: "streamazing-stream.appspot.com",
//  messagingSenderId: "901358342273",
//  appId: "1:901358342273:web:0cd06aa13e110ccbe57d80",
//  measurementId: "G-V0PVLE9X8S"
// };

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
