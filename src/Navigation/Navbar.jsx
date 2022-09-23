import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="m-5 ">
            <ul className="flex flex-row justify-center gap-3">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/drumkit">Drumkit</Link>
                </li>
                <li>
                    <Link to="/quotes">Quote Generator</Link>
                </li>
                <li>
                    <Link to="/calculator">Calculator</Link>
                </li>
                <li>
                    <Link to="/pomodoro">Pomodoro Clock</Link>
                </li>
                <li>
                    <Link to="/markdown">Markdown Previewer</Link>
                </li>
            </ul>
        </nav>
    ); 
}
export default Navbar; 