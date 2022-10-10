import React from 'react';
const CardSeason = (props) => {
  return (
    <div>
      <div className="card mb-3 mt-5 w-100" dir={props.dir}>
        <div className="row g-0">
          <div className="col-md-3 col-sm-12 h-auto">
            <img
              src={props.image}
              className="img-fluid rounded-start w-100  "
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h3 className="card-title  mb-3"> Season:{props.season}</h3>
              <p className="card-text mb-3"> Description:{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSeason;
