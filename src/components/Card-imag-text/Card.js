import React from 'react';
import './Card.css';
const Card = (props) => {
  return (
    <div>
      <div className="card mb-3 mt-5 w-100" dir={props.dir}>
        <div className="row g-0">
          <div className="col-md-3 col-sm-12">
            <img
              src={props.image}
              className="img-fluid rounded-start  w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h4 className="card-title  mb-3">Name : {props.name}</h4>
              <h4 className="card-text mb-3"> BrithDay:{props.Brith}</h4>
              <h4 className="card-text mb-3">
                {' '}
                appearance: {props.appearance}
              </h4>
              <h4 className="card-text mb-3">
                {' '}
                occupation: {props.occupation}
              </h4>
              <h4 className="card-text mb-3"> portrayed: {props.portrayed}</h4>
              <h4 className="card-text mb-3"> status: {props.status}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
