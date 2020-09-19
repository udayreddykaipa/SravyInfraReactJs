import React from 'react';
import './App.css';
import Navi from './components/HeaderNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import BodyFirst from './components/BodyFirst'
import OutReach from './components/OutReach'
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHbvQy0CWIzMEIgt5WY_NV4W9yTOupOgk",
  authDomain: "sravyainfraprojectspvtltd.firebaseapp.com",
  databaseURL: "https://sravyainfraprojectspvtltd.firebaseio.com",
  projectId: "sravyainfraprojectspvtltd",
  storageBucket: "sravyainfraprojectspvtltd.appspot.com",
  messagingSenderId: "894447798891",
  appId: "1:894447798891:web:20b350572be6587034ff2e",
  measurementId: "G-PNDEVCSWJ4"
};
firebase.initializeApp(firebaseConfig)
function App() {

  return (
    <div className="App">
      <Navi></Navi>
      <BodyFirst></BodyFirst>
      <OutReach></OutReach>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
