
import React, { Component } from 'react'
import axios from 'axios';


class Microjob extends  Component {
  // State of your application
  state = {
    microjobs: [],
    error: null,
    query: '',
  };
  loadData = () => {
    
  }
  // Fetch your microjobs immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('https://microjobs-api.herokuapp.com/microjobs');
      this.setState({ microjobs: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, microjob } = this.state;

    // Print errors if any
    if (error) {
      return <div>Tu as fais: {error.message}</div>;
    }

    return (
      
      <div className="App container d-flex mx-2">
         {this.state.microjobs.map((microjob,id) => (
           <div key={id} className="card taille "> 
           <img className="card-img-top" src={`https://microjobs-api.herokuapp.com${microjob.image.formats.thumbnail.url}`} alt="les thumnails"/>

            <h5 key={microjob.users.id}>{microjob.users.username} -{microjob.location}</h5>

            <div className="card-body"> 
              <p className="card-text"> {microjob.description}</p>
              <p><span>a partir de </span>{microjob.price} <span>FRCFA</span></p>
              <a href="http://www.quackit.com">Voir le details</a>
            </div>
            
            </div>
        ))}
      </div>
    );
  }
}

export default Microjob;