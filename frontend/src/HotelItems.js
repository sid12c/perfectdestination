import React from 'react'
import {useState} from 'react'
import Card from './Card'
import {editList, deleteList} from './fileHandler'
import {update} from './App'
// import './HotelItems.css'


function HotelItems (props) {
    const [isEditing, setIsEditing] = useState(false);
    const [hotelName, setHotelName] = useState(props.name);
    const [hotelId, setHotelId] = useState(props.id);
    const [hotelImage, setHotelImage] = useState(props.image);
    const [hotelRatings, setHotelRatings] = useState(props.ratings);
    const [hotelPrice,setHotelPrice] = useState(props.price);
    const [hotelAddress, setHotelAddress] = useState(props.address);
    const [isDeleted, setIsDeleted] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleCancelClick = () => {
        setIsEditing(false);
    };
    const handleName = (event) => {
        setHotelName(event.target.value);
    };
    const handleImage = (event) => {
        setHotelImage(event.target.value);
    };
    const handleRatings = (event) => {
        setHotelRatings(event.target.value);
    };
    const handlePrice = (event) => {
        setHotelPrice(event.target.value);
    };
    const handleAddress = (event) => {
        setHotelAddress(event.target.value);
    };
    
    function handleSaveClick(event) {
        event.preventDefault();
        editList(
            hotelId,
            hotelName,
            hotelPrice,
            hotelRatings,
            hotelAddress,
            hotelImage
        );
        setIsEditing(false);
        update();
    }
    function handleDeleteClick(event) {
        event.preventDefault();
        deleteList(hotelId);
        setIsEditing(false);
        update();
        setIsDeleted(true);
    }
    if(isDeleted) {
        return (
            null
        );
    }
    if(props.loginStatus){
        if (isEditing) {
            return (
                <Card className='card'>
                    <form onSubmit={handleSaveClick}>
                        <label htmlFor='hotelName'>Name:</label>
                        <input
                            type='text'
                            id='hotelName'
                            name='hotelName'
                            defaultValue={hotelName}
                            onChange={handleName}
                        />
                        <label htmlFor='hotelImage'>Image:</label>
                        <input
                            type='text'
                            id='hotelImage'
                            name='hotelImage'
                            defaultValue={hotelImage}
                            onChange={handleImage}
                        />
                        <label htmlFor='hotelRatings'>Ratings:</label>
                        <input
                            type='text'
                            id='hotelRatings'
                            name='hotelRatings'
                            defaultValue={hotelRatings}
                            onChange={handleRatings}
                        />
                        <label htmlFor='hotelPrice'>Price:</label>
                        <input
                            type='text'
                            id='hotelPrice'
                            name='hotelPrice'
                            defaultValue={hotelPrice}
                            onChange={handlePrice}
                        />
                        <label htmlFor='hotelAddress'>Address:</label>
                        <input
                            type='text'
                            id='hotelAddress'
                            name='hotelAddress'
                            defaultValue={hotelAddress}
                            onChange={handleAddress}
                        />
                        <button type='submit'>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </form>
                </Card>
            );
    } else {
        return (
            <Card className='card'>
                <img src={hotelImage} alt={hotelName} className='card-img'/>
                <h2 className='card-name'>{hotelName}</h2> 
                <h3 className='card-address'>{hotelAddress}{"\n"}</h3> 
                <p className='card-ratings'>rating: {hotelRatings}/5{"\n"}</p>
                <h3 className='card-price'>price: ${hotelPrice} per night</h3>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </Card>
        );
    }
   }
   else{
    return (
        <Card className='card'>
            <img src={hotelImage} alt={hotelName} className='card-img'/>
                <h2 className='card-name'>{hotelName}</h2> 
                <h3 className='card-address'>{hotelAddress}{"\n"}</h3> 
                <p className='card-ratings'>rating: {hotelRatings}/5{"\n"}</p>
                <h3 className='card-price'>price: ${hotelPrice} per night</h3>
        </Card>
    );
   }
}
export default HotelItems;