
import React, { Component } from 'react'
import axios from 'axios';


class Microjob extends  Component {
  // State of your application
  state = {
    microjobs: [],
    comments :[],
    categories :[],
    error: null,
    query: '',
  };
  loadData = async () => {
    
    try {
      const response = await axios.get('https://microjobs-api.herokuapp.com/microjobs');
      this.setState({ microjobs: response.data });
    } catch (error) {
      this.setState({ error });
    }
  }
  // Fetch your microjobs immediately after the component is mounted
  componentDidMount = async () => {
    this.loadData();

       axios.get(`https://microjobs-api.herokuapp.com/categories`)
            .then(response => {
                this.setState({categories :Object.values(response.data) });
                console.log("categories", response.data)
            })
       axios.get(`https://microjobs-api.herokuapp.com/comments`)
           .then(response => {
               this.setState({comments :Object.values(response.data) });
               console.log("comments",response.data)
           })
  };

  render() {
    const { error} = this.state;

    // Print errors if any
    if (error) {
      return <div>Tu as fais: {error.message}</div>;
    }

    return (
      
      <div className="App container d-flex mx-2">
         {this.state.microjobs.map((microjob,id) => (
           <div key={id} className="card taille "> 
           <img className="card-img-top" src={`https://microjobs-api.herokuapp.com${microjob.image.formats.thumbnail.url}`} alt="les thumnails"/>

            <h5>{microjob.title} -{microjob.location}</h5>

            <div className="card-body"> 
              <p className="card-text"> {microjob.description}</p>
              <p><span>a partir de </span>{microjob.price} <span>FRCFA</span></p>
              <a href="/microdetails">Voir le details</a>
            </div>
            </div>
        ) ) }
      </div>
    );
  }
}

export default Microjob;