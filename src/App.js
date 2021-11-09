
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
// import Header from './Component/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  
  );
}

export default App;
