'use client'

import { useState } from "react"

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
        
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
            {showMenu && (
                <div>
                    <ul className="flex flex-col items-center text-white bg-blue-dark text-2xl font-sugo antialiased">
                        <li className="py-1.5">Home</li>
                        <li className="py-1.5">Social</li>
                        <li className="py-1.5">Vertentes</li>
                        <li className="py-1.5">Contate-nos</li>
                    </ul>
                </div>
            )}
        </>
    )
};
