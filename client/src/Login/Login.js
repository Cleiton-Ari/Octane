import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/Navbar';


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
        <div>
          <NavBar />  
       
          <h1>Log in</h1>

          <p>Vous avez un compte? Connectez-vous.</p>

          <form onSubmit={this.handleFormSubmit}>

            <p>
              <label>
                <em>email: </em>
                <input type="email:" name="email" value={this.state.email} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Password: </em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

            <button>LOGIN</button>

          </form>
        </div>
    )
  
     
    

}
}






export default Login;