import React, { useState } from 'react';
import './App.css';
import Hotels from './Hotels';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const DUMMY_HOTELS= [
    {
      id:'H1',
      boolValue: isLoggedIn,
      name: 'Hotel 1',
      price: '1000',
      ratings: '4',
      address: 'abc efg',
      image:'https://picsum.photos/325/350?random=1'
    },
    {
      id:'H2',
      isLoggedIn,
      name: 'Hotel 2',
      price: '2000',
      ratings: '1',
      address: 'abc efg',
      image:'https://picsum.photos/325/350?random=2'
    },
    {
      id:'H3',
      isLoggedIn,
      name: 'Hotel 3',
      price: '3000',
      ratings: '2',
      address: 'abc efg',
      image:'https://picsum.photos/325/350?random=3'
    },
    {
      id:'H4',
      name: 'Hotel 4',
      price: '4000',
      ratings: '3',
      address: 'abc efg',
      image:'https://picsum.photos/325/350?random=4'
    }
  ]

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleHotelClick = () => {
    setShowHotels(true);
  };

  // const handleAddHotel = (event) => {
  //   event.preventDefault();
  //   const hotelName = event.target.elements.hotelName.value;
  //   const location = event.target.elements.location.value;
  //   setHotels([...hotels, { hotelName, location }]);
  //   event.target.reset();
  // };

  // const handleDeleteHotel = (index) => {
  //   const updatedHotels = [...hotels];
  //   updatedHotels.splice(index, 1);
  //   setHotels(updatedHotels);
  // };

  // const handleEditHotel = (index, updatedHotel) => {
  //   const updatedHotels = [...hotels];
  //   updatedHotels[index] = updatedHotel;
  //   setHotels(updatedHotels);
  // };

  // const hotelForm = (
  //   <div>
  //     <h2>Hotels</h2>
  //     <form onSubmit={handleAddHotel}>
  //       <label htmlFor="hotelName">Hotel Name:</label>
  //       <input type="text" id="hotelName" name="hotelName" /><br />
  //       <label htmlFor="location">Location:</label>
  //       <input type="text" id="location" name="location" /><br />
  //       <button type="submit">Add Hotel</button>
  //     </form>
  //     {hotels.map((hotel, index) => (
  //       <div id={index}>
  //         <h3>{hotel.hotelName}</h3>
  //         <p>{hotel.location}</p>
  //         <button onClick={() => handleDeleteHotel(index)}>Delete</button>
  //         <button onClick={() => handleEditHotel(index, { ...hotel, location: 'New Location' })}>Edit</button>
  //       </div>
  //     ))}
  //   </div>
  // );

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
        </div>
      </header>
      <main>
      <div>
              <Hotels hotels_list={DUMMY_HOTELS} loginStatus={isLoggedIn}/>
            </div>
      </main>
      <footer>
        <p>&copy; 2023 My Travel App</p>
      </footer>
    </div>
  );
}

export default App;
