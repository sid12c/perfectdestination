import React, { useState } from 'react';
import './App.css';
import Hotels from './Hotels';
import {getList, addList} from './fileHandler'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import axios from 'axios';

var dummy_hotels = getList();
// const http = require("http");

export function update() {
  dummy_hotels = getList();
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [counter, setCounter] = useState(0)

  const handleLoginClick = (e) => {
    //setIsLoggedIn(true);
    e.preventDefault();
    const sendPostRequest = async () => {
      try {
        const resp = await axios.post('http://localhost:4000/backend/api/User/Login', 
          {
              password:password,
              username:username
          })
          .then(response=>{
            console.log(response);
            setIsLoggedIn(true);
          })
          .catch(error => {
            if (error.response) {
              alert(error.response.data.msg);
              console.log(error.response.data);  // handle errors with response data
            } else if (error.request) {
              console.log(error.request);  // handle errors with no response
            } else {
              console.log(error.message);  // handle other errors
            }
          });
      } catch (e) {
          console.error(e);
      }
    };
    sendPostRequest();
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAddClick = () => {
    addList('','','','','');
    update();
    setCounter(counter+1);
  };
  const handleSignUpClick = () => {
    setIsSignUp(true);
  };
  const handleSignedUpClick = async (e) => {
    e.preventDefault();
    const sendPostRequest = async () => {
      try {
        const resp = await axios.post('http://localhost:4000/backend/api/User/Signup', 
          {
              email:email,
              password:password,
              confirmPassword:confirmPassword,
              username:username
          })
          .then(response=>{
            alert(response);
            console.log(response);
            setIsSignUp(false);
          })
          .catch(error => {
            if (error.response) {
              alert(error.response.data.msg);
              console.log(error.response.data);  // handle errors with response data
            } else if (error.request) {
              console.log(error.request);  // handle errors with no response
            } else {
              console.log(error.message);  // handle other errors
            }
          });
      } catch (e) {
          console.error(e);
      }
    };
    sendPostRequest();
  };
  const handleCancelClick = () => {
    setIsLoggedIn(false);
    setIsSignUp(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignUp(false);
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  }

  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hotels">Hotels</Link></li>
            </ul>
            {isSignUp && !isLoggedIn ? (
              <div>
                <label htmlFor="email">Email:{'\t'}</label>
                <input type="text" id="email" name="email" onChange={handleEmailChange} /><br />
                <label htmlFor="username">Username:{'\t'}</label>
                <input type="text" id="username" name="username" onChange={handleUsernameChange} /><br />
                <label htmlFor="password">Password: {'\t'}</label>
                <input type="password" id="password" name="password" onChange={handlePasswordChange} /><br />
                <label htmlFor="confirm password">Confirm Password: {'\t'}</label>
                <input type="password" id="confirm-password" name="confirm-password" onChange={handleConfirmPasswordChange} /><br />
                <button onClick={handleSignedUpClick}>Sign Up</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
              ) : (<></>)}
            {isLoggedIn && !isSignUp ? (
              <span>Welcome {username}! <button onClick={handleLogout}>Logout</button></span>
            ) : (<></>)}
            {!isLoggedIn && !isSignUp ? (
              <div>
                <label htmlFor="username">Username:{'\t'}</label>
                <input type="text" id="username" name="username" onChange={handleUsernameChange} /><br />
                <label htmlFor="password">Password: {'\t'}</label>
                <input type="password" id="password" name="password" onChange={handlePasswordChange} /><br />
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleSignUpClick}>Sign Up</button>
              </div>
            ) : (<></>)}
          </nav>
          <div className="search-container">
            <h1>Find Your Next Destination</h1>
            <form action="#" method="get">
              <input type="text" name="destination" placeholder="Enter your destination" />
              <button type="submit">Search</button>
            </form>
            {isLoggedIn ? (
              <button onClick={handleAddClick} className='newButton'>New Hotel</button>
            ) : (<></>)}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels hotels_list={dummy_hotels} loginStatus={isLoggedIn}/>} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2023 Perfect Destination</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='class-Home'>
      <h1>Group B</h1>
      <h2>Kishan, Sid, Conlan</h2>
      <h3>Welcome to My Travel App!</h3>
      <p>Use the navigation bar to explore our app.</p>
    </div>
  );
}

export default App;

//                <Login/>

