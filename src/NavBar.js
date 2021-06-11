import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CurrUserContext from './currUserContext';

/** NavBar component
 *
 * Props: handleLogout (function)
 *
 * App -> NavBar
 */
function NavBar({ handleLogout }) {
  const currUser = useContext(CurrUserContext);

  function logout(evt) {
    evt.preventDefault();
    handleLogout();
  }

  return (
    <Navbar>
      <NavItem>
        <NavLink className="nav-link" to="/">
          ShareBnB
        </NavLink>
      </NavItem>
      {!currUser && (
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </NavItem>
        </Nav>
      )}
      {currUser && (
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/listings">
              Listings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/listings/new">
              Add a new listing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={logout} className="nav-link" to="/">
              Logout {currUser}
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;
