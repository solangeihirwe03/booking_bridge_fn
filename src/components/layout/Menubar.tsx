import React from "react";
import { NavLink } from "react-router-dom";

interface MenuProps {
    toogleNav: () => void;
    isOpen: boolean;
}

const Menubar: React.FC<MenuProps> = ({ toogleNav, isOpen }) => {
    if (!isOpen) return null;

    return (
        <ul onClick={toogleNav} className="flex flex-col md:hidden gap-6 font-medium h-[90vh] justify-center items-center float-right w-[120vw] bg-black">
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
            
            <li>HOTELS</li>
            <li>ROOMS</li>
            <li>CONTACT US</li>
        </ul>
    )

}

export default Menubar
