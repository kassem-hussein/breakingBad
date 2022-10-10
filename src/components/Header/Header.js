import React from 'react';
import './Header.css';
import {
  NavContainer,
  ToggleButton,
  Collapse,
  ItemContainer,
  NavItem,
  Brand,
} from './Components/exportFile';
const Header = () => {
  return (
    <>
      <NavContainer>
        <div class="container-fluid">
          <Brand />
          <ToggleButton />
          <Collapse>
            <ItemContainer>
              <NavItem link={'/breakingBad/characters'} item={'Characters'} />
              <NavItem link={'/breakingBad/seasons'} item={'Seasons'} />
              <NavItem link={'/breakingBad/about'} item={'About'} />
            </ItemContainer>
          </Collapse>
        </div>
      </NavContainer>
    </>
  );
};

export default Header;
