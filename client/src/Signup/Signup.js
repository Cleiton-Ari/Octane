import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import axios from "axios";
import "./Signup.css";
 


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
            <div className="formulaire"> 
                <div className="head">
                     <h1>SIGN UP</h1> 
                </div>
                 <p className="p">Signup to discover the best aquatic experiences!</p>
                
                
                    <form onSubmit={this.handleFormSubmit}>

                        <div className="form">
                        <label className="label">Firtname</label>
                        <div className="control">
                            <input type="firstname" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                        </div>
                        </div>

                        <div className="form">
                        <label className="label">Lastname</label>
                        <div className="control">
                            <input type="lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                        </div>
                        </div>

                        <div className="form">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        </div>


                        <div className="form">
                        <label className="label">Password</label>
                        <div className="control">
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        </div>

                        <button>SIGNUP</button>

                        <div className="passeport">
                            <div className="go"> Google</div>
                            <div className="fb"> Facebook</div>
                         </div>

                    </form>

                    
 
            </div>
        )
    }
}

export default Signup;

