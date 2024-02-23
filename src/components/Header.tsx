export default function Header() {
    return (
        <header className="flex bg-blue-dark px-5 py-3 justify-between">
            <img src="/img/header/logo-coelhoBD.svg" alt="" />

            <button>
                <img className="hover:scale-110 transition-all" src="/img/header/hamburger-menu.svg" alt="" />
            </button>
        </header>
    )
};
