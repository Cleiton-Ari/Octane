import "./App.css";
import HomePage from "./HomePage/HomePage.js";
import Signup from "./Signup/Signup.js";
import Login from "./Login/Login.js";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import Static from "./Static/Static";
import Capvert from "./Capvert/Capvert";
import Experience from "./Experience/Experience";
import Panier from "./Panier/Panier";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/static" exact component={Static} />
        <Route path="/capvert" exact component={Capvert} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/panier" exact component={Panier} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
