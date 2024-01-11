import { Outlet } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './Navbar.styled';

export const Navbar = () => {
 

  return (
    <div>
     
      <HeaderWrapper>
        
        <ul>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
        <li>
          {/* <NavLink to="contacts">something</NavLink> */}
        </li>
      </ul>
      <div>
       
      </div>

     
    </HeaderWrapper>
      <Outlet />
    </div>
  );
};
