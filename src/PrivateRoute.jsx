import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'reduxe/Authorization/AuthSelectors';

const PrivateRout = () => {
  const IsLoggedIn = useSelector(authSelectors.getLoggedIn);
  return <>{IsLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};
export default PrivateRout;