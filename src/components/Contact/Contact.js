import React, { Component } from 'react';
import Formulaire from "./Formulaire/Formulaire";
import axios from "axios";

class Contact extends Component {
    
    handleSendMail = (message) =>{
        axios.post("",message)
             .then(response=>{
                 console.log(response);
             })
             .catch(error =>{
                 console.log(error);
             })
        console.log(message);
    }
    render() { 
        return ( 
            <>
                    <div className="container">
                        <h2>Adresse : </h2>
                        xxxxxxxxxxxxxxxxxxxxxxxx
                        <h2>Telephone</h2>
                        00 00 00 00 00
                        <h2>Vous préférez nous écrire ?</h2>
                        <Formulaire sendMail = {this.handleSendMail}/>
                    </div>
            </>
         );
    }
}
 
export default Contact;