import logo from "../../../public/assets/Hotelstar.svg"
import React from "react"
import { FaFacebook, FaPinterest, FaSquareXTwitter, FaInstagram } from "react-icons/fa6"
import { LiaTelegram } from "react-icons/lia";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#626d67] text-white px-40 py-6 flex justify-between items-center w-full gap-24">
      <div className="w-1/3">

        <div className="flex gap-2 text-3xl items-center pb-4">
          <img src={logo} alt="Logo" className="w-16 py-2" />
          <p className="font-semibold hidden md:block">Booking
            <span className="text-[#28A745] uppercase">Bridge</span>
          </p>
        </div>

        <div className="flex gap-2 pb-6">
          <SvgBox>
            <FaFacebook />
          </SvgBox>

          <SvgBox>
            <FaPinterest />
          </SvgBox>

          <SvgBox>
            <FaSquareXTwitter />
          </SvgBox>

          <SvgBox>
            <FaInstagram />
          </SvgBox>
        </div>
        <div className="text-2xl">
          Need assistance? Reach out to us anytime!
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-1/3">
        <h1 className="font-semibold text-3xl">Quick Links</h1>
        <div className="flex gap-8 text-xl leading-9">
          <div>
            <p>Privacy & policy</p>
            <p>Reservation</p>
            <p>Offers</p>
            <p>Live chat</p>
          </div>

          <div>
            <p>FAQ</p>
            <NavLink to={"/about"}
              className="text-white hover:text-[#28A745] transition-colors duration-300"
            >
              About Us
            </NavLink>
            <p>Rooms</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <h1 className="font-semibold text-3xl pb-4">Newsletter</h1>
        <p className="pb-4 text-xl">Get updates, exclusive offers,
          <br />and travel tips delivered to your inbox</p>
        <form className="flex gap-1 ">
          <input type="email" placeholder="Your Email..." className="px-4 py-2 w-[20rem] border-none outline-none" />
          <button className="bg-[#28A745] p-1">
            <LiaTelegram fontSize={32} />
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer

interface SvgProps {
  children?: React.ReactNode
}

export const SvgBox: React.FC<SvgProps> = ({ children }) => {
  return (
    <div className="bg-[#28A745] rounded-full h-[3.5rem] w-[3.5rem] flex items-center justify-center text-4xl">{children}</div>
  )
}
