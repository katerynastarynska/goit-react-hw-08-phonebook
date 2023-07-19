import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Routes, Route } from 'react-router-dom';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import Loader from './Loader/Loader';
import LinearIndeterminate from './Loader/LinearIndeterminate'
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
// import Contacts from 'pages/Contacts/Contacts';
import Layout from './Layout/Layout';

const App = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}>
            {/* <Route path="contacts" element={<Contacts />} /> */}
          </Route>
        </Route>
      </Routes>

      {/* <h1>Phonebook</h1> */}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <LinearIndeterminate />}
      {error && <p>{error}</p>}
      {items.length >= 1 && <ContactList />}
    </>
  );
};

export default App;
