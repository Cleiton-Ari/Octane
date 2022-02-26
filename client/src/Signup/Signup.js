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
        axios.post('http://localhost:5005/api/signup', this.state)
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
            <div className="form"> 
                <h1>Sign up</h1>
                

                    <p>INCRIVEZ-VOUS AVEC...</p>

                    <p>GOOGLE</p> <p>FACEBOOK</p>

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

                    </form>
 
            </div>
        )
    }
}

export default Signup;

