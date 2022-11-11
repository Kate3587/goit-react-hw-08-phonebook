import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'reduxe/Authorization/AuthOperetions';

import authSelectors from 'reduxe/Authorization/AuthSelectors';
import { MenuContainer, MessageText, MenuBtn } from './Menu.styled';


export const Menu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <MenuContainer>
      <MessageText>Welcome, {name}!</MessageText>
      <MenuBtn
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </MenuBtn>
    </MenuContainer>
  );
};