
import React from 'react';
import HotelItems from './HotelItems';
import './Hotels.css';

function Hotels(props) {
  const handleDelete = (id) => {
    const updatedHotels = props.hotels_list.filter((hotel) => hotel.id !== id);
    props.setHotels(updatedHotels);
  };

  return (
    <div className="hotels">
      {props.hotels_list.map((hotel) => (
        <HotelItems
          key={hotel.id}
          id={hotel.id}
          name={hotel.name}
          image={hotel.image}
          ratings={hotel.ratings}
          price={hotel.price}
          address={hotel.address}
          loginStatus={props.loginStatus}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Hotels;