import {NavLink} from "react-router";

const Navbar = () => {

    const activeNavButton = () => {
        return "text-white"
    };
    return (
        <nav className="flex items-center justify-between px-6 py-4 ">
            <span className="text-white text-2xl font-bold">🌥 Weather App</span>
            <div className="flex gap-2">
                { /*button that we need to include in here*/}
                <NavLink to="/" className={activeNavButton}>Home</NavLink>
                <NavLink to="/About" className={activeNavButton}>About</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;