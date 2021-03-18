import React from 'react';


export default function Card(props) {
 

  return (
    <div className="card" style={{width: "18rem"}}>
      <img class="card-img-top" src={props.image} alt={props.name}/>
      <div className="card-body">
      <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description.slice(0,150)}...</p>
        <a href={'/'} class="card-link">à partir de {props.price} FR</a>
        <a href={props.details} class="card-link">Details of service</a>
      </div>
    </div>
  );
}
