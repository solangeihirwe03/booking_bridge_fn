import hotel from "../../public/assets/hotel4.jpg"
import hotel3 from "../../public/assets/hotel3.jpeg"

const About = () => {
  return (
    <>
      <div className="bg-about h-screen  bg-center w-full bg-cover flex items-center justify-center ">
        <div className="absolute inset-0 bg-opacity-40 bg-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-white text-4xl pb-2">About</h1>
          <h1 className="text-white text-5xl">Find Your Best Stay</h1>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center gap-20">
        <h1 className="font-nautigal font-semibold text-6xl">Our Facilities</h1>

        <div className="flex justify-evenly px-28 items-center gap-12 w-full">
          <div className="w-1/2 bg-[#D9D9D9] p-9 h-[64vh]">
            <h1 className="text-[#28A745] font-medium text-2xl pb-6">WELCOME TO BOOKING_BRIDGE</h1>
            <p className="text-xl leading-8">
              Experience a tranquil escape where every
              detail is crafted to enhance your stay.
              At Booking Bridge, your ultimate gateway
              to effortless and enjoyable travel planning.
              We specialize in connecting travelers with the
              finest hotels, ensuring a seamless and delightful
              booking experience. Our platform is designed to
              make your journey as smooth as possible, offering
              a wide range of accommodation options that cater
              to every need and preference.
            </p>
          </div>

          <div className="w-1/2">
            <img src={hotel} alt="hotel" />
          </div>
        </div>

        <div className="flex justify-evenly px-28 items-center gap-12 w-full pt-10">
          <div className="w-1/2">
            <img src={hotel3} alt="hotel image" />
          </div>

          <div className="w-1/2 bg-[#D9D9D9] p-9 h-[64vh]">
            <h1 className="text-[#28A745] font-medium text-2xl pb-6">Our Mission</h1>

            <p className="text-xl leading-8">
              At Booking Bridge, we are committed to providing exceptional customer service,
              reliability, and transparency. Our goal is to help you find the perfect hotel
              that meets your expectations, whether you're exploring the vibrant cities of
              Rwanda or seeking a tranquil retreat. With a focus on convenience and ease
              of use, our user-friendly interface allows you to search, compare, and book
              your ideal stay with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default About
