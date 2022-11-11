import { Route, Routes } from 'react-router';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentUser } from 'reduxe/Authorization/AuthOperetions';
import authSelectors from 'reduxe/Authorization/AuthSelectors';
import RegistrationPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import AppBar from 'pages/AppBar/AppBar';
import HomePage from 'pages/HomePage/HomePage';
import PublickRouter from 'components/PublicRoute';
import PriveteRout from 'PrivateRoute';

import { PhonebookWrapper } from './App.styled';


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
              <Route path="/contacts" element={<PriveteRout />}>
                <Route path="/contacts" element={<ContactsPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      )};
    </PhonebookWrapper>
  );
};
