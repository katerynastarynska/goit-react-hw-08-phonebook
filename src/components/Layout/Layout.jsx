import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

import AppBar from '../UserMenu/AppBar';
import LinearIndeterminate from 'components/Loader/LinearIndeterminate';

const Layout = () => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AppBar />
      </Toolbar>

      <main>
        <Suspense fallback={<LinearIndeterminate />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
