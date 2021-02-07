import React, { Component } from 'react';
import axios from 'axios';
import Card from '../Card/Card'
class microjobsList extends Component {
  constructor(props) {
    super(props);
    this.state.id = props.match.params.id;
  }

  // State of your application
  state = {
    category: {},
    loading: true,
    error: null
  };

  // recuperer la categorie
  componentDidMount = async () => {
    try {
      await axios
        .get(`https://microjobs-api.herokuapp.com/categories/${this.state.id}`)
        .then((response) => {
          // le 0 c'est pour recuperer que le premier  tableau de mon objet parce que  ça ne fonctionne pas
          const category = response.data;
          //console.log("categories", categories);
          console.log(category);
          this.setState({ category: category, loading: false });
          console.log("categories", category.id);
        });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, loading, category } = this.state;
    //console.log(this.state.categories);
    // Print errors if any
    console.log("le titre", this.state.category);
    if (error) {
      return <div>Une erreur est survenue : {error.message}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    } else {
      const microjobsList = category.microjobs.map((job) => (
     
            <Card key={job.id} title ={job.title}
            image={`https://microjobs-api.herokuapp.com${job.image.url}`}
            description ={job.description}
            name={job.title}
            price={job.price}
            /> 
        
      ));

      return (
        <div className="container">
          <h3>Liste des Microjobs</h3>
          <article className="d-flex">{microjobsList}</article>
        </div>
      );
    }
  }
}
export default microjobsList;