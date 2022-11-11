import { NavLink } from 'react-router-dom';
import { Menu } from 'components/Menu/Menu';

import { useSelector } from 'react-redux';
import authSelectors from 'reduxe/Authorization/AuthSelectors';

import { NavWrapp, NavThumb } from './Nav.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <NavWrapp>
      <NavThumb>
        <NavLink to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            Contacts
          </NavLink>
        )}
      </NavThumb>
      {isLoggedIn ? (
        <Menu />
      ) : (
        <NavThumb>
          <NavLink to="/register">
            Registration
          </NavLink>
          <NavLink to="/login">
            Log in
          </NavLink>
        </NavThumb>
      )}
    </NavWrapp>
  );
};