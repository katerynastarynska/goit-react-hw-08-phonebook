import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const AuthNavigation = () => {
  return (
    <>
      <Box sx={{ margin: '0 10px' }}>
        <NavLink to="/login">
          <Button variant="outlined" size="small">
            Log in
          </Button>
        </NavLink>
      </Box>
      <NavLink to="/register">
        <Button variant="outlined" size="small">
          Register
        </Button>
      </NavLink>
    </>
  );
};

export default AuthNavigation;
