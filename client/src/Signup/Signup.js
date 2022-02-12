import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import axios from "axios";


class Signup extends Component {
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    }

    handleFormSubmit = (event)=>{ // submit du formulaire
        event.preventDefault();
        axios.post('http://localhost:5005/api/signup', this.state)
            .then(response =>{
                console.log(response);
            })

            .catch(error =>{
                console.log(error);
            })

       
    }
    handleChange = (event) =>{ /// définnir un nouvel etat dans le state
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })

    }
   
    render(){

        return(
            <div> 
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

                    <button>SIGNUP</button>



                    </form>
                <Footer />   
            </div>
        )
    }
}

export default Signup;