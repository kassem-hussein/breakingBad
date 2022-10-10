import React from 'react';

const ItemContainer = (props) => {
  return (
    <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">{props.children}</ul>
  );
};

export default ItemContainer;
