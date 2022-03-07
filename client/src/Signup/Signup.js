import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
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
        userId:"",
        redirect: null
    }

    handleFormSubmit = (event)=>{ // submit du formulaire
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_APIURL || ""}/api/signup`, this.state) //${process.env.REACT_APP_APIURL || ""
            .then(response =>{
                this.props.userHandleChange(response.data.createdUser._id,response.data.createdUser.email)
                console.log(response);
                this.setState({redirect: '/jetski'})
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
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        return(
            <div className="formulaire"> 
                <div className="head">
                     <h1>SIGNUP</h1> 
                </div>
                 <p className="p">Sign up!<br/>Don't miss any aquatic activity</p>

                
                
                    <form onSubmit={this.handleFormSubmit}>

                        <div className="form">
                        <label className="label">Firstname</label>
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
                        <button className="signup-button" >SIGNUP</button>

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

