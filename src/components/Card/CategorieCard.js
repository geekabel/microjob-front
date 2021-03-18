import React from 'react';

export default function CategorieCard(props){
//col-sm-4 d-flex pb-3
  return(
      <div className="row">
        <div className="col-sm-4 col-md-3 pb-3">
          <div className="card">
            <div className="card-body text-center">
              <p>{props.categories}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
