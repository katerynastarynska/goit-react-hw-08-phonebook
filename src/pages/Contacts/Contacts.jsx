import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import { selectIsLoading } from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Filter from '../../components/Filter/Filter';
import LinearIndeterminate from '../../components/Loader/LinearIndeterminate';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      {isLoggedIn && <ContactList />}
    </>
  );
};

export default Contacts;
