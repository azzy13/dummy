import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Nav className='blue' tabs>
        <NavItem>
          <NavLink href='/' active>
            Brand here
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='/about'>About</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Header;
