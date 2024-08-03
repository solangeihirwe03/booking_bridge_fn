import React from "react";

interface MenuProps {
    toogleNav: () => void;
    isOpen: boolean;
}

const Menubar: React.FC<MenuProps> = ({ toogleNav, isOpen }) => {
    if (!isOpen) return null;

    return (
        <ul onClick={toogleNav} className="flex flex-col md:hidden gap-6 font-medium h-[90vh] justify-center items-center float-right w-[120vw] bg-black">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>HOTELS</li>
            <li>ROOMS</li>
            <li>RESERVATION</li>
            <li>CONTACT US</li>
        </ul>
    )

}

export default Menubar
