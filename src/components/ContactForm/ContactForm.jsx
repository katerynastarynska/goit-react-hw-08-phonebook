import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { addNewContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (!validateName(name) || !validateNumber(number)) {
      return;
    }

    const isContactExist = items.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!isContactExist) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addNewContact(newContact));
      toast.success(`${newContact.name} successfully added to your phonebook!`);
    } else {
      toast.error(`${name} is already in contacts`);
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const validateName = name => {
    const regex = /^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$/;
    if (!regex.test(name)) {
      toast.error('Please enter a valid name');
      return false;
    }
    return true;
  };

  const validateNumber = number => {
    const regex =
      /^[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;
    if (!regex.test(number)) {
      toast.error('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  return (
    <>
      <Box
        sx={{
          my: 4,
          mx: 4,
          mb: 4,
          mt: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Add contact
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
          color="#1a6bc7"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            value={name}
            id={nameInputId}
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Phone number"
            value={number}
            id={numberInputId}
            autoComplete="number"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
