import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';


class Signup extends Component {
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    }

    handleFormSubmit = (event)=>{
        event.preventDefault();
        const firstname= this.state.firstname;
        const lastname= this.state.lastname;
        const email= this.state.email;
        const password= this.state.password;
    }
    handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
        
    }
   
    render(){
        return(
            <div>
            <NavBar />  
                <h1>Sign up</h1>

                    <p>INCRIVEZ-VOUS AVEC...</p>

                    <p>GOOGLE</p> <p>FACEBOOK</p>

                    <form onSubmit={this.handleFormSubmit}>

                    <p>
                    <label>
                        <em>Firstname: </em>
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                    </label>
                    </p>

                    <p>
                    <label>
                        <em>lastname: </em>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                    </label>
                    </p>

                    <p>
                    <label>
                        <em>email: </em>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    </p>

                    <p>
                    <label>
                        <em>Password: </em>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    </p>

                    <button>INSCRIPTION</button>


                    </form>
            </div>
        )
    }
}

export default Signup;