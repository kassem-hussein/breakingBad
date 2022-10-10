import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li class="nav-item">
      <Link className="me-4" aria-current="page" to={props.link}>
        {props.item}
      </Link>
    </li>
  );
};

export default NavItem;
