import { useState, useRef, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode';
import NavBar from './NavBar';
import Routes from './Routes';
import { SharebnbApi } from './api';
import 'axios';
import './App.css';
import axios from 'axios';
import CurrUserContext from './currUserContext';

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [listings, setListings] = useState([]);


  async function handleSignup(signupFormData) {
    try {
      //let token = await SharebnbApi.signup(signupFormData);
      let resp = await axios.post(
        'http://localhost:5000/signup',
        signupFormData,
        {
          'Content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        }
      );
      console.log('axios resp, status=', resp, resp.status);
    } catch (err) {
      console.warn('error=== ', err);
    }
  }

  async function handleLogin(loginData) {
    try {
      let token = await SharebnbApi.login(loginData);
      setToken(token);
      setIsLoaded(false);
    } catch (err) {
      console.log('handlelogin err = ', err);
      return err;
    }
  }

  async function addListing(newListingData) {
    try {
      let listings = await SharebnbApi.createListing(newListingData)
      setListings(listings);
    } catch (err) {
      console.log('addListing err = ', err);
      return err;
    }
  }

  function handleLogout() {
    setToken('');
    setCurrUser(null);
    localStorage.removeItem('token');
  }

  useEffect(
    function getCurrUser() {
      async function getUserFromApi() {
        //TODO: try catch here, error handle
        if (token) {
          const { username } = jwt_decode(token);
          SharebnbApi.token = token;
          localStorage.setItem('token', token);
          console.log('localstorage token= ', localStorage.getItem('token'));
          //const user = await SharebnbApi.getUser(username);
          setCurrUser(username);
        }
        setIsLoaded(true);
      }
      getUserFromApi();
    },
    [token]
  );

  if (!isLoaded) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <CurrUserContext.Provider value={currUser}>
          <NavBar handleLogout={handleLogout} />
          <Routes
            handleSignup={handleSignup}
            handleLogin={handleLogin}
            addListing={addListing}
            listings={listings}
          />
        </CurrUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
