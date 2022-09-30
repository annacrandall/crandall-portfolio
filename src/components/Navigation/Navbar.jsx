import React from "react";
import { Link } from "react-router-dom";
import { Popover} from '@headlessui/react'


const Navbar = () => {
    return (
        <nav className="m-3 border-2 border-black p-2">
            <ul className="flex flex-row justify-center gap-20">
                <li>
                    <Link to="/" className="font-medium">Home</Link>
                </li>
                <Popover className="relative z-50">
                    <Popover.Button className="font-medium">Projects</Popover.Button>
                        <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            <a href="https://crandall-drumkit.netlify.app" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Drumkit</a>
                                    <a href="https://breaking-bad-quote-gen.netlify.app" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Breaking Bad Quotes</a>
                                    <a href="https://crandall-calculator.netlify.app" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Calculator</a>
                                    <a href="https://crandall-pomodoro-timer.netlify.app" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Pomodoro Clock</a>
                                    <a href="https://crandall-markdown-previewer.netlify.app" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Markdown Previewer</a>
                                </div>
                                </div>
                        </Popover.Panel>
                </Popover>
                <Link to="/contact" className="font-medium">Contact</Link>
            </ul>
        </nav>
    );
}
export default Navbar; 