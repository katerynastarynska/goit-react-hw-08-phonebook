import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';

import { selectUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <>
      <Box sx={{ margin: '0 10px' }}>
        <Stack spacing={2} direction="row">
          <Button variant="text">wellcome {name}!</Button>
        </Stack>
      </Box>

      <NavLink to="/register">
        <Button
          variant="outlined"
          size="small"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </Button>
      </NavLink>
    </>
  );
};

export default UserMenu;
