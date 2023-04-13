import React from "react";
import HotelItems from "./HotelItems";
import './Hotels.css'


function Hotels(props){
    return(
        <div className = "hotels">
            {props.hotels_list.map((hotel)=>(
                <HotelItems key={hotel.id} name={hotel.name} image={hotel.image} ratings={hotel.ratings} price={hotel.price} address={hotel.address} loginStatus={props.loginStatus} />
            
                )
            )}
        </div>
    );
}
export default Hotels;
