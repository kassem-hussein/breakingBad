import React from 'react';
import { Link } from 'react-router-dom';

const NavBrand = () => {
  return (
    <>
      <Link className="fs-4" to="/breakingBad/">
        Breaking Bad
      </Link>
    </>
  );
};

export default NavBrand;
