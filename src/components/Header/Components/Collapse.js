import React from 'react';

const Collapse = (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {props.children}
    </div>
  );
};

export default Collapse;
