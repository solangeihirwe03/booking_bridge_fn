import React from "react"
import { Hotel } from "../../utils/hotel"

interface HotelProps {
  hotel: Hotel
}


const Hotels: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <>
      <div key={hotel.HotelId}>
        <img src={hotel.hotelImage} alt={hotel.HotelName} className="w-80 h-[70vh]"/>
        <p>{hotel.HotelName}</p>
        <p>{hotel.Address.Country}</p>
      </div>

    </>
  )
}

export default Hotels