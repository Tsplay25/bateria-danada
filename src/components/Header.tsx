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
                {/* logos */}
                <div className="flex mb-1">
                    <img className="md:h-16" src="/img/header/logo-coelhoBD.svg" alt="logotipo bateria danada branca com um coelho e a sigla B.D de fundo" />
                    <img className="hidden md:block" src="/img/header/logo-escrita.svg" alt="logotipo bateria danada escrito por extenso" />
                </div>

                {/* desktop navbar */}
                <nav className="flex items-center pr-10">
                    <ul className="hidden lg:flex items-center text-white bg-blue-dark text-[32px] gap-8 font-sugo antialiased h-full">
                        <li className="group flex justify-center items-center relative z-10">
                            <a className="block z-20 text-center absolute" href="#hero">Home</a>
                            <img className="z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 w-24" src="/img/header/bg-nav-hover.svg"/>
                        </li>
                        <li className="group flex justify-center items-center relative z-10">
                            <a className="block z-20 text-center absolute" href="#vertentes">Vertentes</a>
                            <img className="z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 w-24" src="/img/header/bg-nav-hover.svg"/>
                        </li>
                        <li className="group flex justify-center items-center relative z-10">
                            <a className="block z-20 text-center absolute" href="#social">Social</a>
                            <img className="z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 w-24" src="/img/header/bg-nav-hover.svg"/>
                        </li>
                        <li className="group flex justify-center items-center relative z-10">
                            <a className="block z-20 text-center absolute" href="#fotos">Fotos</a>
                            <img className="z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 w-24" src="/img/header/bg-nav-hover.svg"/>
                        </li>
                        <li className="group flex justify-center items-center relative z-10 whitespace-nowrap">
                            <a className="block z-20 text-center absolute" href="#contato">Contate-nos</a>
                            <img className="z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 w-24" src="/img/header/bg-nav-hover.svg"/>
                        </li>
                    </ul>
                </nav>

                {/* mobile menu button */}
                <button onClick={toggleMenu} className="focus:outline-none focus:scale-110 transition-all lg:hidden">
                    <img className="hover:scale-110 transition-all" src="/img/header/hamburger-menu.svg" alt="" />
                </button>
            </header>

            {/* dropdown menu */}
            <div className={`${showMenu ? "max-h-64" : "max-h-0 invisible"} transition-all duration-500 ease-in-out overflow-hidden`}>
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
                        <a className="flex justify-center" href="#fotos">Fotos</a>
                    </li>
                    <li className="py-1.5 hover:bg-blue-regular transition-all w-full">
                        <a className="flex justify-center" href="#contato">Contate-nos</a>
                    </li>
                </ul>
            </div>
        </>
    )
};
