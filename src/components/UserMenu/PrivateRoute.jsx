import { useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

// const PrivateRoute = ({ children, ...routeProps }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to="/login" />}
//     </Route>
//   );
// };

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const shouldRedirect = !isLoggedIn   
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };
  
export default PrivateRoute;
