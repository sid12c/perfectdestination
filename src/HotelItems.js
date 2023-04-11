import React from 'react'
import Card from './Card'
import './HotelItems.css'

function HotelItems (props) {
    return (
        <Card className='card'>
            <img src={props.image} alt={props.name} className='card-img'/>
            <h2 className='card-name'>{props.name}</h2>            
        </Card>
    );
}
export default HotelItems;