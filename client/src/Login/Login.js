import axios from "axios";
import React, { Component } from "react";
import bulma from "react";
import {Redirect} from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/Navbar';
import "./Login.css";


class Login extends React.Component {
    state = {
        email:"",
        password:"",
        userId: "",
}




 handleFormSubmit = (event)=>{
            event.preventDefault();
            // submit username and password to server
            axios.post('http://localhost:5005/api/auth/login', this.state)
            .then(response =>{
              this.props.userHandleChange(response.data.user._id,response.data.user.email)
              console.log(response)
              this.setState({redirect: '/jetski'})
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
  if (this.state.redirect) {
    return <Redirect to={this.state.redirect}/>
  }  
  
  return(
        <div className="ctn-form">
         
          <h1>Log in</h1>

          <p>Please enter your email and password!</p>

          <form onSubmit={this.handleFormSubmit}>
                <div className="form-input">
                  <label className="label">Email</label>
                  
                  <input type="email:" name="email" value={this.state.email} onChange={this.handleChange} />
                  
                </div>

                <div className="form-input">
                  <label className="label">Password</label>
                  
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                 
                </div>
            <button>LOGIN</button>
          </form>
          
        
        </div>
    )
  
     
    

}
}


export default Login;