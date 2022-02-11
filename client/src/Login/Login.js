import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/Navbar';


class Login extends React.Component {
    state = {
        email:"",
        password:"",

        error: ""
}

 handleFormSubmit = (event)=>{
            event.preventDefault();
            const email= this.state.email;
            const password= this.state.password;
            const error = this.state.error;
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

          </form>
        </div>
    )
  
     
    

}
}






export default Login;