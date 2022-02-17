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
import Reservation from "./Reservation/Reservation";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/static" component={Static} />
        <Route path="/capvert" component={Capvert} />
        <Route path="/experience" component={Experience} />
        <Route path="/panier" component={Panier} />
        <Route path="/reservation" component={Reservation} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
