'use client'

import { useState } from "react"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <header className="flex bg-blue-dark px-5 py-3 justify-between">
                <img src="/img/header/logo-coelhoBD.svg" alt="" />

                <button onClick={toggleMenu}>
                    <img className="hover:scale-110 transition-all" src="/img/header/hamburger-menu.svg" alt="" />
                </button>
            </header>
            {/* dropdown menu */}
            <div className={`${showMenu ? "max-h-48" : "max-h-0 invisible"} transition-all duration-500 ease-in-out overflow-hidden`}>
                <ul className="flex flex-col items-center text-white bg-blue-dark text-2xl font-sugo antialiased">
                    <li className="py-1.5 hover:bg-blue-regular transition-all w-full">
                        <a className="flex justify-center" href="#hero">Home</a>
                    </li>
                    <li className="py-1.5 hover:bg-blue-regular transition-all w-full">
                        <a className="flex justify-center" href="#vertentes">Vertentes</a>
                    </li>
                    <li className="py-1.5 hover:bg-blue-regular transition-all w-full">
                        <a className="flex justify-center" href="#social">Social</a>
                    </li>
                    <li className="py-1.5 hover:bg-blue-regular transition-all w-full">
                        <a className="flex justify-center" href="#contato">Contate-nos</a>
                    </li>
                </ul>
            </div>
        </>
    )
};
