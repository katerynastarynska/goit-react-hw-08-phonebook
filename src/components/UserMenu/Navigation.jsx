import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Navigation = () => {
  return (
    <>
      <NavLink to="/">
        <Button size="small">home</Button>
      </NavLink>
      <NavLink to="/contacts">
        <Button size="small">phonebook</Button>
      </NavLink>

      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      ></Typography>
    </>
  );
};
export default Navigation;
