import React from "react";
function Hotels(props){
    return(
        <div class = "hotels">
            {props.hotels_list.map((hotel)=>(
                <Hotels key={hotel.id} name={hotel.name} image={hotel.image}/>
            )
            )}
        </div>
    );
}
export default Hotels;