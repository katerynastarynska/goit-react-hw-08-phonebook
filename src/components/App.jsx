import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// import Home from 'pages/Home/Home';
// import Login from 'pages/Login/Login';
// import Register from 'pages/Register/Register';
// import Contacts from 'pages/Contacts/Contacts';
import Layout from './Layout/Layout';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './UserMenu/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  // const items = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="contacts" element={<Contacts />} /> */}
        {/*       
        <PrivateRoute path="contacts">
        <Contacts />
        </PrivateRoute> */}

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        {/* </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
