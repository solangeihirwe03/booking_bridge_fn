import { useEffect, useState } from "react"
import logo from "../../../public/assets/Hotelstar.svg"
import Menubar from "./Menubar"
import { IoMenu, IoSearch } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import 'tailwindcss/tailwind.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 300) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleToogle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={`text-white flex justify-between px-6 w-full items-start md:items-center fixed z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-none"}`}>
            <div className="flex gap-2 md:text-3xl items-center">
                <img src={logo} alt="Logo" className="w-16 py-2 z-50" />
                <p className="font-semibold hidden md:block">Booking
                    <span className="text-[#28A745] uppercase">Bridge</span>
                </p>
            </div>
            <button
                className="float-right py-4 bg-black p-3 absolute right-5 md:hidden"
                onClick={handleToogle}
            >
                <IoMenu fontSize={35} />
            </button>
            {isActive && (
                <div className="w-full">
                    <Menubar toogleNav={handleToogle} isOpen={isActive} />
                </div>
            )}
            <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
                <li>
                    <NavLink to={"/"}
                        className={({ isActive }) =>
                            isActive
                                ? 'border-[#28A745] px-2 py-2 w-28 border-b-4'
                                : 'text-white hover:border-[#28A745] px-2 py-2 hover:border-b-4 w-28 transition-colors duration-300'
                        }>
                        HOME
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/about"}
                        className={({ isActive }) =>
                            isActive
                                ? 'border-[#28A745] px-2 py-2 w-24 border-b-4'
                                : 'text-white hover:border-[#28A745] px-2 py-2 hover:border-b-4 w-24 transition-colors duration-300'
                        }>
                        ABOUT US
                    </NavLink>

                </li>
                <li>ROOM</li>
                <li>ROOMS</li>
                <li>CONTACT US</li>
                <li>
                    <IoSearch fontSize={25}/>
                </li>
            </ul>
        </div>
    )
}
export default Header
