import hotel from "../../public/assets/hotel.jpg"
import { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import room from "../../public/assets/interior-hotel-room-260nw-264444794.webp"

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
  const date = generateDates()

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: string) => {
    const selectedDate = new Date(date);
    setSelectedDate(selectedDate);
  };
  return (
    <>
      <div className="bg-hotel h-screen  bg-center w-full bg-cover flex items-center justify-center ">
        <div className="absolute inset-0 bg-opacity-40 bg-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-8xl font-medium">Find Your Best Stay</h1>
        </div>
      </div>

      <form className="flex border-b-2 items-center pb-6 justify-center">
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
        <h1 className="text-[#1E1E1E] text-8xl font-semibold font-nautigal">Serena Hotel</h1>
        <div className="flex gap-20 items-center justify-center">
          <div className="w-1/3">
            <img src={hotel} />
          </div>
          <div className="w-2/5">


            <p className="text-3xl leading-normal text-[#1E1E1E] font-regular">
              Welcome to our hotel! We are pleased to offer a variety of rooms that are designed to provide a
              comfortable and relaxing stay for our guests. Whether you are traveling for business or leisure,
              we have the perfect room to meet your needs.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1>Our Rooms</h1>
        <div>
          <div>
            <img src={room}/>
            <div>
              <h1 className="uppercase">serena luxury suite</h1>
              <div>
                <p>
                  <FaUser fontSize={25}/>
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Hotel
