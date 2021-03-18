import React, { Component } from 'react';
import banderole from '../../../assets/images/banderole.jpg';
import Category from '../../App/Category';
import Search from '../../Search';
//import CategorieCard from '../../Card/CategorieCard'
class Accueil extends Component {
  
    render() { 
        return ( 
            <div>
             <img src={banderole} alt="banderole" className="img-fluid"/>
              
                <div className="container">
                   
                   
                    <div className="container text-center">
                            <Search />  
                    </div>

                    <h2 className="text-center">Categories</h2>
                    <section className="container">  
                        <Category />  
                    </section>              



                <section className="row no-gutters align-items-center">
                        <div className="col-12">
                            <h1 className="text-center">Qui sommes-nous?</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quaerat reiciendis voluptatum vel aliquam doloribus ?Totam facere a alias dicta qui, 
                        enim delectus sapiente unde porro inventore provident? Provident, magnam sunt ?</p>
                        </div>
                </section>

                </div>   

               
            </div>
         );
    }
}
 
export default Accueil;