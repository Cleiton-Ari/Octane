
import './App.css';
import HomePage from './HomePage/HomePage.js'
import Signup from './Signup/Signup.js';
import Login from './Login/Login.js';
import {Switch, Route} from 'react-router-dom'
import React, { Component } from "react";
import NavBar from './NavBar/Navbar';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route  path="/" exact component={HomePage} />
          <Route  path="/signup" exact component={Signup} />
          <Route  path="/login" exact component={Login} />
        </Switch>
     <Footer />  
    </div>
  );
}

export default App;
