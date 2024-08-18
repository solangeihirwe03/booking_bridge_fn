import React from "react"
import { Hotel } from "../../utils/hotel"
import { IoStarSharp } from "react-icons/io5";
import address from "../../../public/Address.svg"
import { Link } from "react-router-dom";

interface HotelProps {
  hotel: Hotel
}


const Hotels: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <div className=" w-full">
      <div key={hotel.HotelId}>
        <Link to={`/hotel/${hotel.HotelId}`} state={{hotel}}>
          <img src={hotel.hotelImage} alt={hotel.HotelName} className="w-80 h-[70vh]" />
          <div className="flex py-3 text-[#00AC00]">
            <IoStarSharp fontSize={25} />
            <IoStarSharp fontSize={25} />
            <IoStarSharp fontSize={25} />
            <IoStarSharp fontSize={25} />
            <IoStarSharp fontSize={25} />
          </div>
          <p className="font-medium text-xl">{hotel.HotelName}</p>
          <div className="flex items-end gap-1 pt-2">
            <img src={address} alt="location" />
            <p className="text-xl text-[#28A745] font-medium">{hotel.Address.Country}</p>
          </div></Link>
      </div>
    </div>
  )
}

export default Hotels