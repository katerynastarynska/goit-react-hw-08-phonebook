import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useEffect } from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import {

  selectIsLoading,
  // selectError,
  // selectContacts,
} from 'redux/contacts/selectors';
import Filter from '../../components/Filter/Filter';
import LinearIndeterminate from '../../components/Loader/LinearIndeterminate';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';


const Contacts = () => {
  // const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {dispatch(fetchContacts())}, [dispatch])
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login'); 
    } else {
      dispatch(fetchContacts());
    }
  }, [dispatch, navigate, isLoggedIn]);

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 4,
          pb: 0,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#1a6bc7"
            gutterBottom
          >
            Phonebook
          </Typography>
        </Container>
      </Box>

      <ContactForm />
      <Filter />
      {isLoading && <LinearIndeterminate />}
      {/* {error && <p>{error}</p>} */}
      {isLoggedIn && <ContactList />}

      {/* {items?.length >= 1 && <ContactList />} */}
                   
     </>
  );
};

export default Contacts;