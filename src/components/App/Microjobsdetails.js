import React from 'react'
import categorie from './Category';
const Categoriepage = ({ match, location }) => {
    const {
      params: { id }
    } = match;
  
    return (
      <>
        <p>
          <strong>Categorie ID: </strong>
          {id}
        </p>
        <p>
          <strong>Categorie Name: </strong>
          {categorie[id - 1].name}
        </p>
        <p>
          <strong>Categorie Infos: </strong>
        </p>
      </>
    );
  };
  

  export default Categoriepage;