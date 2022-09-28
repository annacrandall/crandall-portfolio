import React from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'


const Navbar = () => {
    return (
        <nav className="m-3">
            <ul className="flex flex-row justify-center gap-20">
                <li>
                    <Link to="/" className="font-medium">Home</Link>
                </li>
                <Popover className="relative z-50">
                    <Popover.Button className="font-medium">Projects</Popover.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0" >

                        <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                <Link to="https://crandall-calculator.netlify.app" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Drumkit</Link>
                                <Link to="/quotes" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Quote Generator</Link>
                                <Link to="/calculator" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Calculator</Link>
                                <Link to="/pomodoro" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2">Pomodoro Clock</Link>
                                <Link to="/markdown" className="hover:bg-gray-100 focus:outline-none focus focus-visible:ring-opacity-50 rounded p-2" >Markdown Previewer</Link>
                                </div>
                                </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </ul>
        </nav>
    );
}
export default Navbar; 