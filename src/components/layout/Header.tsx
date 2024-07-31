import { useState } from "react"
import logo from "../../../public/assets/Hotelstar.svg"
import Menubar from "./Menubar"
import { IoMenu } from "react-icons/io5"

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const handleToogle = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="bg-black text-white flex justify-between px-6 w-full items-start md:items-center">
            <div className="flex gap-2 md:text-3xl items-center">
                <img src={logo} alt="Logo" className="w-16 py-2" />
                <p className="font-semibold hidden md:block">Booking
                    <span className="text-[#28A745] uppercase">Bridge</span>
                </p>
            </div>
            <button className="float-right py-4 bg-black p-3 absolute right-5 md:hidden" onClick={handleToogle}>
                <IoMenu fontSize={35} />
            </button>
            {isActive && (
                <div className="w-full">
                    <Menubar toogleNav={handleToogle} isOpen={isActive} />
                </div>
            )}
            <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>HOTELS</li>
                <li>ROOM</li>
                <li>ROOMS</li>
                <li>RESERVATION</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    )
}
export default Header
