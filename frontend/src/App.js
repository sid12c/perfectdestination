import React, { useState } from 'react';
import './App.css';
import Hotels from './Hotels';
import {getList, addList} from './fileHandler'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


var dummy_hotels = getList();

export function update() {
  dummy_hotels = getList();
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [counter, setCounter] = useState(0)

  const handleLoginClick = () => {
    setIsLoggedIn(true);
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
  const handleAddClick = () => {
    addList('','','','','');
    update();
    setCounter(counter+1);
  };
  const hangleSignUpClick = () => {
    setIsSignUp(true);
  };
  const handleSignedUpClick = () => {
    setIsSignUp(false);
  }
  const handleCancelClick = () => {
    setIsSignUp(false);
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
                <label htmlFor="username">Username:{'\t'}</label>
                <input type="text" id="username" name="username" onChange={handleUsernameChange} /><br />
                <label htmlFor="password">Password: {'\t'}</label>
                <input type="password" id="password" name="password" onChange={handlePasswordChange} /><br />
                <label htmlFor="confirm password">Confirm Password: {'\t'}</label>
                <input type="confirm-password" id="confirm-password" name="confirm-password" onChange={handleConfirmPasswordChange} /><br />
                <button onClick={handleSignedUpClick}>Sign Up</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
              ) : (<></>)}
            {isLoggedIn && !isSignUp ? (
              <span>Welcome {username}! <button onClick={() => setIsLoggedIn(false)}>Logout</button></span>
            ) : (<></>)}
            {!isLoggedIn && !isSignUp ? (
              <div>
                <label htmlFor="username">Username:{'\t'}</label>
                <input type="text" id="username" name="username" onChange={handleUsernameChange} /><br />
                <label htmlFor="password">Password: {'\t'}</label>
                <input type="password" id="password" name="password" onChange={handlePasswordChange} /><br />
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={hangleSignUpClick}>Sign Up</button>
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
      <h2>Welcome to My Travel App!</h2>
      <p>Use the navigation bar to explore our app.</p>
    </div>
  );
}

export default App;
