import { Navigation } from 'components/Navigation/Navigation.jsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerContainer}>
          <Navigation />
        </div>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default AppBar;