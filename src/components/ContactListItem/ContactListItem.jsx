import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// import css from './ContactListItem.module.css';

// export default function ContactListItem({ name, number, id }) {
//   const dispatch = useDispatch();

//   const handleDeleteContact = () => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <div className={css.contactListItemWrap}>
//       <p className={css.contactListText}>
//         {name}: {number}
//       </p>
//       <button
//         className={css.contactListBtn}
//         onClick={() => handleDeleteContact(id)}
//       >
//         Delete
//       </button>
//     </div>
//   );
// }

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Box m={2}>
        <Card
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            component="div"
            sx={{
              16: 9,
              pt: '65%',
            }}
            image="https://source.unsplash.com/random?wallpapers"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ fontSize: '15px', color: '#1a6bc7' }}
            >
              <Box component="span">{name}:</Box>
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ fontSize: '15px', color: '#1a6bc7' }}
            >
              <Box component="span">{number}</Box>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              Edit
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
