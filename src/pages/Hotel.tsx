import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { useLocation, useParams } from "react-router-dom";
import hotelItems from "../components/hotels/hotel";
import frame from "../../public/assets/Frame.svg"

interface DateObject {
  date: Date;
  isSelected: boolean;
}

const generateDates = (): DateObject[] => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const dates: DateObject[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    dates.push({ date, isSelected: false });
  }

  return dates;
};

const Hotel = () => {
  const { id } = useParams()
  if (!id) {
    return <div>Hotel ID not found</div>;
  }
  const location = useLocation()
  const hotel = location.state?.hotel || hotelItems.find(hotel => hotel.HotelId === parseInt(id))
  const date = generateDates()

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: string) => {
    const selectedDate = new Date(date);
    setSelectedDate(selectedDate);
  };
  return (

    <>
      <form className="flex border-b-2 items-center pt-20 pb-6 justify-center">
        <div className="border-r-2 px-6 border-[#6E7A73]">
          <p className="text-3xl text-[#6E7A73]">Check In</p>
          <div className="flex gap-2 items-center">
            <p>August 12, 2024</p>
            <p>
              <IoCaretDown />
            </p>
          </div>
        </div>
        <div className="border-r-2 px-10 border-[#6E7A73]">
          <p className="text-3xl text-[#6E7A73]">Check Out</p>
          <div className="flex gap-2 items-center">
            <p>August 12, 2024</p>
            <p>
              <IoCaretDown />
            </p>
          </div>
        </div>
        <div className="border-r-2 px-10 border-[#6E7A73]">
          <p className="text-3xl text-[#6E7A73]">Room</p>
          <div className="flex gap-2 items-center">
            <p>August 12, 2024</p>
            <p>
              <IoCaretDown />
            </p>
          </div>
        </div>
        <div className="border-r-2 px-10 border-[#6E7A73]">
          <p className="text-3xl text-[#6E7A73]">Guest</p>
          <div className="flex gap-2">
            <p>Adults</p>
            <p>Children</p>
          </div>
        </div>
        <div className="px-10">
          <button className="px-6 py-3 bg-[#28A745] text-white text-2xl">Check Availability</button>
        </div>
      </form>
      <div className="flex w-full justify-center gap-12 items-center px-9 flex-col">
        <h1 className="text-[#1E1E1E] text-8xl font-semibold font-nautigal">{hotel.HotelName}</h1>
        <div className="flex gap-20 items-center justify-center">
          <div className="w-1/3">
            <img src={hotel.hotelImage} />
          </div>
          <div className="w-2/5">


            <p className="text-3xl leading-normal text-[#1E1E1E] font-regular">
              {hotel.Description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center font-medium text-5xl pb-12">Our Rooms</h1>
        <div className="flex justify-center flex-col gap-24">
          {hotel?.Rooms.map((room: any, index: number) => (
            <div key={index} className="flex gap-20 items-center">
              <img src={room.roomImage} alt={room.Description} className="w-[50vw] h-[50vh] max-w-md" />
              <div>
                <h2 className="uppercase text-2xl mt-4 font-semibold">{room.Description}</h2>
                <div className="flex items-center gap-5 mt-2 text-2xl">
                  <p>{room.BedOptions}</p>
                  <img src={frame} />
                  <p>{room.size}</p>
                </div>
                <button className="text-xl bg-[#28A745] px-6 py-2.5 text-white font-medium rounded-lg mt-5">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hotel
