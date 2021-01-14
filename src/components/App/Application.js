import React, { Component } from 'react'
import Microjob from './Microjob';

class Application extends Component{
  

    render() {
        return (
            <div>
                L'Application centrale
                <Microjob />
            </div> 
            
        )
    }

}


export default Application;