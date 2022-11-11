import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCurrentUser } from 'reduxe/Authorization/AuthOperetions';
import authSelectors from 'reduxe/Authorization/AuthSelectors';
import RegistrationPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';

import { PhonebookWrapper } from './App.styled';


const AppBar = lazy(() => import('pages/AppBar/AppBar'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const PrivateRout = lazy(() => import('PrivateRoute'));
const PublickRouter = lazy(() => import('components/PublicRoute'));

export const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser
  );

  return (
    <PhonebookWrapper>
      {!isFetchingCurrentUser && (
        <Suspense>
          <Routes>
            <Route exact path="/" element={<AppBar />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={<PublickRouter redirectTo="/contacts" restricted />}
              >
                <Route path="/register" element={<RegistrationPage />} />
              </Route>
              <Route
                path="/login"
                element={<PublickRouter redirectTo="/contacts" restricted />}
              >
                <Route path="/login" element={<LoginPage />} />
              </Route>
              <Route path="/contacts" element={<PrivateRout />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      )}
    </PhonebookWrapper>
  );
};