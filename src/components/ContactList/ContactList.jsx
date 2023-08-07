import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#074a97',
      },
      text: {
        primary: '#074a97',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <main>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={2} justifyContent="center">
              {filteredContacts.map(({ name, number, id }) => (
                <Grid item key={id} xs={12} sm={6} md={4}>
                  <ContactListItem
                    name={name}
                    number={number}
                    onDeleteContact={filteredContacts}
                    id={id}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default ContactList;
