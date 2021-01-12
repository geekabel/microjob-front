
import React, { Component } from 'react'
import axios from 'axios';
import "./App.css";
class App extends  Component {
  // State of your application
  state = {
    microjobs: [],
    error: null,
    query: '',
  };

  // Fetch your microjobs immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/microjobs');
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
           <img className="card-img-top" src={`http://localhost:1337${microjob.image.formats.thumbnail.url}`} alt="les thumnails"/>

            <h5>{microjob.title} -{microjob.location}</h5>

            <div className="card-body"> 
              <p className="card-text">{microjob.description}</p>
              <p><span>a partir de </span>{microjob.price} <span>FRCFA</span></p>
              <h2 className="card-text"></h2>
            </div>
            
            </div>
        ))}
      </div>
    );
  }
}

export default App;