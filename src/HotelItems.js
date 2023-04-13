import React, { useState } from 'react';
import Card from './Card';
// import './HotelItems.css';

function HotelItems(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [hotelName, setHotelName] = useState(props.name);
  const [hotelImage, setHotelImage] = useState(props.image);
  const [hotelRatings, setHotelRatings] = useState(props.ratings);
  const [hotelPrice,setHotelPrice] = useState(props.price);
  const [hotelAddress, setHotelAddress] = useState(props.address);
  
  const handleEditClick = () => {
  setIsEditing(true);
  };
  
  const handleSaveClick = (event) => {
  event.preventDefault();
  props.onSave({
  id: props.id,
  name: hotelName,
  image: hotelImage,
  ratings: hotelRatings,
  price: hotelPrice,
  address: hotelAddress,
  });
  setIsEditing(false);
  };
  
  const handleCancelClick = () => {
  setIsEditing(false);
  setHotelName(props.name);
  setHotelImage(props.image);
  setHotelRatings(props.ratings);
  setHotelPrice(props.price);
  setHotelAddress(props.address);
  };
  
  const handleNameChange = (event) => {
  setHotelName(event.target.value);
  };
  
  const handleImageChange = (event) => {
  setHotelImage(event.target.value);
  };
  
  const handleRatingsChange = (event) => {
  setHotelRatings(event.target.value);
  };
  
  const handlePriceChange = (event) => {
  setHotelPrice(event.target.value);
  };
  
  const handleAddressChange = (event) => {
  setHotelAddress(event.target.value);
  };
  
  if (isEditing) {
  return (
  <Card className='card'>
  <form onSubmit={handleSaveClick}>
  <label htmlFor='hotelName'>Name:</label>
  <input
           type='text'
           id='hotelName'
           name='hotelName'
           value={hotelName}
           onChange={handleNameChange}
         />
  <label htmlFor='hotelImage'>Image:</label>
  <input
           type='text'
           id='hotelImage'
           name='hotelImage'
           value={hotelImage}
           onChange={handleImageChange}
         />
  <label htmlFor='hotelRatings'>Ratings:</label>
  <input
           type='text'
           id='hotelRatings'
           name='hotelRatings'
           value={hotelRatings}
           onChange={handleRatingsChange}
         />
  <label htmlFor='hotelPrice'>Price:</label>
  <input
           type='text'
           id='hotelPrice'
           name='hotelPrice'
           value={hotelPrice}
           onChange={handlePriceChange}
         />
  <label htmlFor='hotelAddress'>Address:</label>
  <input
           type='text'
           id='hotelAddress'
           name='hotelAddress'
           value={hotelAddress}
           onChange={handleAddressChange}
         />
  <button type='submit'>Save</button>
  <button onClick={handleCancelClick}>Cancel</button>
  </form>
  </Card>
  );
  } else {
  return (
  <Card className='card'>
  <img src={props.image} alt={props.name} className='card-img' />
  <h2 className='card-name'>{props.name}</h2>
  <h3 className='card-address'>{props.address}</h3>
  <p className='card-ratings'>rating: {props.ratings}/5</p>
  <h3 className='card-price'>price: ${props.price} per night</h3>
  {props.loginStatus ? (
  <>
  <button onClick={handleEditClick}>Edit</button>
  <button>Delete</button>
  </>
  ) : null}
  </Card>
  );
  }
  }
  
  export default HotelItems;
