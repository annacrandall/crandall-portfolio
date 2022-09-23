import React from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'


const Navbar = () => {
    return (
        <nav className="m-3">
            <ul className="flex flex-row justify-center gap-20">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <Popover className="relative">
                    <Popover.Button>Projects</Popover.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0" >

                        <Popover.Panel className="absolute text-center">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                                <Link to="/drumkit" className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">Drumkit</Link>
                                <Link to="/quotes" className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">Quote Generator</Link>
                                <Link to="/calculator" className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">Calculator</Link>
                                <Link to="/pomodoro" className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">Pomodoro Clock</Link>
                                <Link to="/markdown" className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">Markdown Previewer</Link>
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