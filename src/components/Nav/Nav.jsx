import { NavLink } from 'react-router-dom';
import { Menu } from 'components/Menu/Menu';

import { useSelector } from 'react-redux';
import authSelectors from 'reduxe/Authorization/AuthSelectors';

import { NavWrapp, NavThumb } from './Nav.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <NavWrapp>
      
      <NavLink to="/">
        <NavThumb>
           Home
        </NavThumb>
         
        </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <NavThumb>
            Contacts
          </NavThumb>
          </NavLink>
        )}
      
      {isLoggedIn ? (
        <Menu />
      ) : (
        <>
            <NavLink to="/register">
              <NavThumb>
                Registration
              </NavThumb>
          </NavLink>
            <NavLink to="/login">
              <NavThumb>
                Log in
              </NavThumb>
          </NavLink>
        </>
      )}
    </NavWrapp>
  );
};