import React from 'react'

interface HotelsProps{
    id: number,
    hotelName: string,
    hotelImage: string,
    country: string,
    location: string
}

const Hotels:React.FC<HotelsProps> = ({id, hotelName,hotelImage,country, location}) => {
  return (
    <div>
        <img src={hotelImage} alt={hotelName} />
        <p>{hotelName}</p>
        <p>{country}</p>
        <p>{location}</p>
    </div>
  )
}

export default Hotels