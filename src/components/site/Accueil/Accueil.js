import React, { Component } from 'react';
import banderole from '../../../assets/images/banderole.jpg';

class Accueil extends Component {
  
    render() { 
        return ( 
            <div>
             <img src={banderole} alt="banderole" className="img-fluid"/>
              
                <div className="container">
                    <h2>Caterogies</h2>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis voluptatum vel aliquam doloribus ? 
                Totam facere a alias dicta qui, enim delectus sapiente unde porro inventore provident? Provident, magnam sunt ?
                </p>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis voluptatum vel aliquam doloribus ? 
                Totam facere a alias dicta qui, enim delectus sapiente unde porro inventore provident? Provident, magnam sunt ?
                </p>
               <section className="row no-gutters align-items-center">
                    <div className="col-12 col-md-4">
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis voluptatum vel aliquam doloribus ? 
                    Totam facere a alias dicta qui, enim delectus sapiente unde porro inventore provident? Provident, magnam sunt ?
                    </p>
                    </div>
                </section>
                </div>
            </div>
         );
    }
}
 
export default Accueil;