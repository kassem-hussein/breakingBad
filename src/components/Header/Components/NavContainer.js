import React from 'react';

const NavContainer = (props) => {
  return (
    <nav class="container navbar navbar-expand-lg header">{props.children}</nav>
  );
};

export default NavContainer;
