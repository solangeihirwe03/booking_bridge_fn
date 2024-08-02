import hotelItems from "../components/hotels/hotel";

const Home = () => {

  const displayedHotels = hotelItems.slice(0, 2);
  return (
    <>
      <div className="bg-bgImg h-screen  bg-center w-full bg-cover flex items-center justify-center ">
        <div className="absolute inset-0 bg-opacity-40 bg-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-8xl font-semibold font-nautigal">Find Your Best Stay</h1>
        </div>
      </div>
      <div className="p-10 flex justify-evenly items-center">
        <div className="relative ">
          <div className="border-t-8 border-r-8 border-[#28A745] w-40 h-40 absolute right-[-6px]"></div>
          <div className="flex py-1.5 gap-9">
            {displayedHotels.map((hotel) => (
              <div key={hotel.HotelId}>
                <img src={hotel.hotelImage} alt={hotel.HotelName} className="w-80 h-[70vh]" />
              </div>
            ))}
          </div>
          <div className="border-l-8 border-b-8 border-[#28A745] w-40 h-40 absolute bottom-[-1.5px] left-[-7px]"></div>
        </div>

        <div>

          <h2 className="pb-4 text-4xl">Discover Your Perfect Stay,
            <br /> find the ideal hotel effortless
          </h2>

          <div className="w-24 border-[#28A745] border-4"></div>

          <p className="pt-4 text-2xl font-light">
            Effortlessly find and book top hotels with <br />
            Booking Bridge.Your ideal stay is just <br/> a click away.
          </p>

          <button className="bg-[#28A745] text-white px-6 py-2 text-2xl font-roboto mt-7">Find More</button>

        </div>
      </div>
    </>

  )
}

export default Home
