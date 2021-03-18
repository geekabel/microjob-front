import React, { Component } from 'react';
import Formservice from "./Formulaire/Formservice";
import axios from "axios";

class Devenirvendeur extends Component {
    
    handleSendInfos = (message) =>{
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
                        <h2>Vous souhaiter devenir un  rendre des services ? </h2>
                        
                        <h2>Inscrivez vous sur cette page</h2>
                        <Formservice sendMail = {this.handleSendInfos}/>
                    </div>
            </>
         );
    }
}
 
export default Devenirvendeur;