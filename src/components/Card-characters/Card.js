import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ width: '14rem', margin: '10px' }}>
        <img
          src={props.image}
          className="card-img-top"
          width={'100px'}
          height={'200px'}
          alt="..."
        />
        <div className="card-body" style={{ height: '150px' }}>
          <h5 className="card-title">Name :{props.name}</h5>
          <p className="card-text">
            <h6>BrithDay :{props.brithday}</h6>
            <h6>appearance :{props.appearance.join(', ')}</h6>
            <h6>status :{props.status}</h6>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
