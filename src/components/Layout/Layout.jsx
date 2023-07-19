import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import css from './Layout.module.css';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Layout = () => {
  return (
    <>
      {/* <header className={css.header}> */}
      {/* <Header />
        <nav>
          <NavLink className={css.headerText} to="/">
            Home
          </NavLink>

          <NavLink className={css.headerText} to="/login">
          Login
          </NavLink>
          <NavLink className={css.headerText} to="/register">
          Register
          </NavLink> */}
      {/* </nav> */}
      {/* </header> */}

      <>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <NavLink className={css.headerText} to="/">
            <Button size="small">Home</Button>
          </NavLink>

          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {/* {title} */}
          </Typography>
          <NavLink className={css.headerText} to="/login">
            <Button variant="outlined" size="small">
              Log in
            </Button>
          </NavLink>
          <NavLink className={css.headerText} to="/register">
            <Button variant="outlined" size="small">
              Register
            </Button>
          </NavLink>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        ></Toolbar>
      </>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
