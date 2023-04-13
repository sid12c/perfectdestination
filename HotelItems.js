import React from 'react'
import Card from './Card'
import app from './App.js'
// import './HotelItems.css'


function HotelItems (props) {
   if(props.loginStatus){
    return (
        <Card className='card'>
            <img src={props.image} alt={props.name} className='card-img'/>
            <h2 className='card-name'>{props.name}</h2> 
            <h3 className='card-address'>{props.address}{"\n"}</h3> 
            <p className='card-ratings'>rating: {props.ratings}/5{"\n"}</p>
            <h3 className='card-price'>price: ${props.price} per night</h3>
            <p>Log in successful</p>
        </Card>
    );
   }
   else{
    return (
        <Card className='card'>
            <img src={props.image} alt={props.name} className='card-img'/>
            <h2 className='card-name'>{props.name}</h2> 
            <h3 className='card-address'>{props.address}{"\n"}</h3> 
            <p className='card-ratings'>rating: {props.ratings}/5{"\n"}</p>
            <h3 className='card-price'>price: ${props.price} per night</h3>
        </Card>
    );
   }
}
export default HotelItems;