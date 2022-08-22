
// import './index.css';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import "react-app-polyfill/stable";
//////////////////////////////////////////////

import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";



//const reactContentRoot = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

//ReactDOM.render(<App />, root);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  let kidfod = document.getElementById("bobio")

//  kidfod.style.display = "none"




