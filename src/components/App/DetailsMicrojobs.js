
import React, { Component } from 'react'
import axios from 'axios';


class DetailsMicrojobs extends  Component {

  constructor(props) {
    super(props);
    this.state.id = props.match.params.id;
  }
  // State of your application
  state = {
    microjobs: [],
    error: null,
    query: '',
  };
  loadData = async () => {
    
    try {
      const response = await axios.get(`https://microjobs-api.herokuapp.com/microjobs/${this.state.id}`);
      this.setState({ microjobs: response.data });

      console.log("id",response.data);

    } catch (error) {
      this.setState({ error });
    }
  }
  // Fetch your microjobs immediately after the component is mounted
  componentDidMount = async () => {
    this.loadData();
  };

  render() {
    const { error,microjobs} = this.state;

    // Print errors if any
    if (error) {
      return <div>Tu as fais: {error.message}</div>;
    }

    return (
      
      <div className="container d-flex mx-2">
         {microjobs.map((microjob) => (
           <div key={microjob.id} className="taille "> 
           <img className="img-fluid" src={`https://microjobs-api.herokuapp.com${microjob.image.formats.thumbnail.url}`} alt="les thumnails"/>

            <h5>{microjob.title} -{microjob.location}</h5>

            <div className="details-microjob"> 
              <p className="description"> {microjob.description}</p>
              <p><span>a partir de </span>{microjob.price} <span>FRCFA</span></p>
            </div>
            </div>
        ) ) }
      </div>
    );
  }
}

export default DetailsMicrojobs;