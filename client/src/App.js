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
import JetSki from "./JetSki/JetSki";


class App extends React.Component{
  state = {
    userId: "",
    email: "",
    jetskiId: ""
  }

  userHandleLogin = (userId, email) =>{
    this.setState({
     userId: userId,
     email: email
    })
  }

  userHandleSignup = (userId, email) =>{
    this.setState({
     userId: userId,
     email: email
    })
  }

  
  jetskiHandle = (chosenJetskiId) => {
    this.setState({
      jetskiId: chosenJetskiId
    })
  }

  render = () => {

    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/static" component={Static} />
          <Route path="/capvert" component={Capvert} />
          <Route path="/experience" component={Experience} />
          <Route path="/panier" component={Panier} />
          <Route path="/reservation" render={(props) => <Reservation {...props} jetskiId={this.state.jetskiId}/>} />
          <Route path="/login" render={(props) => <Login {...props} userHandleChange={this.userHandleLogin}/>} />
          <Route path="/signup" render={(props) => <Signup {...props} userHandleChange={this.userHandleSignup}/>} />
          <Route path="/jetski" render={(props) => <JetSki {...props} chooseJetski={this.jetskiHandle}/>} />
        </Switch>
        <Footer />
      </div>
    );

  }
}


export default App;
