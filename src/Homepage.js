import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';

/** Homepage component
 *
 * Routes -> Homepage
 */

function Homepage() {
  const currUser = useContext(CurrUserContext);
  console.log('currUser in homepage= ', currUser);
  return (
    <div>
      <h1>ShareBnB</h1>
      <p>The Uber for AirBnB's!</p>
      {currUser && <h2>Welcome Back, {currUser}</h2>}
      {!currUser && (
        <div>
          <Button href="/login">Log in</Button>
          <Button href="/signup">Sign up</Button>
        </div>
      )}
    </div>
  );
}

export default Homepage;
