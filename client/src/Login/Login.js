import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/Navbar';


class Login extends Component {
    state = {
        username:"",
        password:"",

        error: ""
}

 handleFormSubmit = (event)=>{
            event.preventDefault();
            const firstname= this.state.firstname;
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
                <em>Firstname</em>
                <input type="text" name="firsname" value={this.state.firsname} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Password</em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

          
            </form>
        </div>
    )
  
     
    

}
}






export default Login;