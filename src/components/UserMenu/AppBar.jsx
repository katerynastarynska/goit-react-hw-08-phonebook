import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import Navigation from './Navigation';
import AuthNavigation from './AuthNavigation';
import UserMenu from './UserMenu';


const AppBar = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Navigation />
       {isLoggedIn 
      //  &&
        ?  <UserMenu />
        : 
        <AuthNavigation />
       }
    </>
  );
};
export default AppBar;
