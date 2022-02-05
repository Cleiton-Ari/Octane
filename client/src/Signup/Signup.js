import React, { Component } from "react";



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
        const lasttname= this.state.lasttname;
        const email= this.state.email;
        const password= this.state.password;
    }
   
    render(){
        return(
            <div>
                <p>SIGNUP PAGE</p>
            </div>
        )
    }
}

export default Signup;