import { useDispatch } from 'react-redux';
import { filterContactsByName } from 'redux/contacts/FilterSlice';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const filterContacts = e => {
    dispatch(filterContactsByName(e.currentTarget.value));
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
          Find contacts by name
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            autoFocus
            onChange={filterContacts}
            sx={{ width: '300px' }}
          />
        </Box>
      </Box>
    </>
  );
}
