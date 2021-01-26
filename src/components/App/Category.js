import React,{Component} from 'react';
import axios from 'axios';
//import { Link } from "react-router-dom";
//import Microjobs from './Microjob';



class Category extends Component {
  // State of your application
  state = {
    categories: {},
    loading:true,
    error: null,
  };

  // recuperer la categorie
  componentDidMount = async () => {
    try {
      await axios
        .get(`https://microjobs-api.herokuapp.com/categories`)
        .then((response) => {
          // le 0 c'est pour recuperer que le premier  tableau de mon objet parce que  ça ne fonctionne pas
          const categories = response.data;
          //console.log("categories", categories);
          this.setState({ categories: categories, loading: false });
             // console.log("id des categorie", );
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
  
    const { error, loading, categories } = this.state;
    
    // Print errors if any
    if (error) {
      return <div>Une erreur est survenue : {error.message}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    } else {
      const categoriesList = categories.map((category,index) => (
        <a  key={category.id} href={`/categorie/${index + 1}`} >
          <li >{category.name}</li>
        </a>
        
  
              
        
      ));
     
    return (
      <div className="container"> 
        <h1>Liste des catégories</h1>
          <ul>{categoriesList}</ul>

          
      </div>
      
    );
  }
}
}
export default Category;