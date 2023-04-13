import React, { useState } from 'react';
import './App.css';
import Hotels from './Hotels';
import {getList, addList} from './fileHandler'

var dummy_hotels = getList();

export function update() {
  dummy_hotels = getList();
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  //const [hotels, setHotels] = useState(DUMMY_HOTELS);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
  const handleAddClick = () => {
    addList('','','','','');
    update();
    setCounter(counter+1);
  };

  // const handleHotels = () => {
  //   setHotels(DUMMY_HOTELS)
  // }
  // function update() {
  //   handleHotels();
  // }
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Hotels</a></li>
          </ul>
          {isLoggedIn ? (
            <span>Welcome {username}! <button onClick={() => setIsLoggedIn(false)}>Logout</button></span>
          ) : (
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" onChange={handleUsernameChange} /><br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" onChange={handlePasswordChange} /><br />
              <button onClick={handleLoginClick}>Login</button>
            </div>
          )}
        </nav>
        <div className="search-container">
          <h1>Find Your Next Destination</h1>
          <form action="#" method="get">
            <input type="text" name="destination" placeholder="Enter your destination" />
            <button type="submit">Search</button>
          </form>
          {isLoggedIn ? (
            <button onClick={handleAddClick}>New Hotel</button>
          ) : (<></>)}
        </div>
      </header>
      <main>
      <div>
              <Hotels hotels_list={dummy_hotels} loginStatus={isLoggedIn}/>
            </div>
      </main>
      <footer>
        <p>&copy; 2023 My Travel App</p>
      </footer>
    </div>
  );
}

export default App;
