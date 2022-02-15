import axios from "axios";
import React, { Component } from "react";
import bulma from "react";
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Navbar';
import "./Login.css";


class Login extends React.Component {
    state = {
        email:"",
        password:""
}

 handleFormSubmit = (event)=>{
            event.preventDefault();
            // submit username and password to server
            axios.post('http://localhost:5005/api/auth/login', this.state)
            .then(response =>{
              console.log(response)
            })

            .catch(error =>{
              console.log(error)
            })
            
}
  handleChange = (event) =>{  
    // prendre l'input de client et changer la state
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
}
       
render(){
    return(
        <div className="form">
         
          <h1>Log in</h1>

          <p>Please enter your email and password!</p>

          <form onSubmit={this.handleFormSubmit}>
                <div className="form">
                  <label className="label">Email</label>
                  <div className="control">
                  <input type="email:" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                </div>

                <div class="form">
                  <label className="label">Password</label>
                  <div className="control">
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>
                </div>
            <button>LOGIN</button>
          </form>
          <Footer /> 
        
        </div>
    )
  
     
    

}
}


export default Login;