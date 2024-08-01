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
      <div>
        <div className="border-l-8 border-b-8 border-[red]"></div>
        <div>
          {displayedHotels.map(hotel => (
            <div key={hotel.HotelId}>
              <h2>{hotel.HotelName}</h2>
              <p>{hotel.Description}</p>
              <p>{hotel.Description_fr}</p>
            </div>
          ))}
        </div>
        <div className="border-r-8 border-t-8 border-[red]"></div>
      </div>
    </>

  )
}

export default Home
