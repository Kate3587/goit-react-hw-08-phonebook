import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Nav/Nav';
import { AppBarContainer, AppBarWrapp } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <AppBarContainer>
        <AppBarWrapp>
          <Navigation />
        </AppBarWrapp>
      </AppBarContainer>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default AppBar;