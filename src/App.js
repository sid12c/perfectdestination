import logo from './logo.svg';
import './App.css';

//import React from "react";
//import "./style.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Flights</a></li>
            <li><a href="#">Activities</a></li>
            <li><a href="#">Cars</a></li>
          </ul>
          <a href="#" className="signin">Sign In</a>
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
        <div className="image-container">
          <Hotels/>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 My Travel App</p>
      </footer>
    </div>
  );
}
      const DUMMY_HOTELS= [
        {
          id:'H1',
          name: 'Hotel 1',
          image:'https://picsum.photos/325/350?random=1'
        },
        {
          id:'H2',
          name: 'Hotel 2',
          image:'https://picsum.photos/325/350?random=2'
        },
        {
          id:'H3',
          name: 'Hotel 3',
          image:'https://picsum.photos/325/350?random=3'
        },
        {
          id:'H4',
          name: 'Hotel 4',
          image:'https://picsum.photos/325/350?random=4'
        }
      ]

export default App;

