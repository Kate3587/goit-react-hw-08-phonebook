import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'reduxe/Authorization/AuthSelectors';

const PriveteRout = () => {
  const IsLoggedIn = useSelector(authSelectors.getLoggedIn);
  return <>{IsLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};
export default PriveteRout;