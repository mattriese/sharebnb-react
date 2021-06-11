import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import Listings from './Listings';
import ListingDetail from './ListingDetail';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import CurrUserContext from './currUserContext';

/** Routes component
 *
 * Props: handleLogin (function)
 *        handleSignup
 *
 * App -> Routes -> Homepage
 *               -> Listings
 *               -> ListingDetail
 *               -> LoginForm
 *               -> SignupForm
 *               -> ProfileForm
 */
function Routes({ handleSignup, handleLogin }) {
  const currUser = useContext(CurrUserContext);

  if (currUser) {
    return (
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/listings">
          <Listings />
        </Route>
        <Route path="/listings/:id">
          <ListingDetail />
        </Route>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/login">
        <LoginForm handleLogin={handleLogin} />
      </Route>
      <Route exact path="/signup">
        <SignupForm handleSignup={handleSignup} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
