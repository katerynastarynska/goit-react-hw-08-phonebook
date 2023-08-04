import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
// import css from './ContactList.module.css';

import ContactListItem from 'components/ContactListItem/ContactListItem';

// export default function ContactList() {
//   const filteredContacts = useSelector(selectFilteredContacts);

  // return (
  //   <ul className={css.contactList}>
  //     {filteredContacts.map(({ name, number, id }) => (
  //       <li className={css.contactListItem} key={id}>
  //         <ContactListItem
  //           name={name}
  //           number={number}
  //           onDeleteContact={filteredContacts}
  //           id={id}
  //         />
  //       </li>
  //     ))}
  //   </ul>
  // );



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