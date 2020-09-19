import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCHbvQy0CWIzMEIgt5WY_NV4W9yTOupOgk",
//   authDomain: "sravyainfraprojectspvtltd.firebaseapp.com",
//   databaseURL: "https://sravyainfraprojectspvtltd.firebaseio.com",
//   projectId: "sravyainfraprojectspvtltd",
//   storageBucket: "sravyainfraprojectspvtltd.appspot.com",
//   messagingSenderId: "894447798891",
//   appId: "1:894447798891:web:20b350572be6587034ff2e",
//   measurementId: "G-PNDEVCSWJ4"
// };
// firebase.initializeApp(firebaseConfig)


serviceWorker.unregister();
