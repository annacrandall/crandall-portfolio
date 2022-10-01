import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className='tracking-wide text-lg'>
            <div className='text-center bg-red-700 ml-20 mr-20 mt-5 mb-5 p-3 rounded'>
                <h1 className='text-3xl text-white font-error'>Error 404</h1>
            </div>

            <div id='intro' className='text-center font-error-body'>
            <p>Uh oh, I'm sorry... I made a mistake. </p>
             <p>The page you're looking for could have moved, been deleted, or maybe it never existed!! </p>
            <h2 className='mt-10'>This is your last chance, after this there is no going back:</h2>
            </div>


            <div className='mt-5 font-error-body grid grid-cols-2 text-center' id='choices'>
                <div id='home-container'>
                    <p>You can go back to the home page...</p>
                    <Link to='/'><button className='border-2 rounded-full p-3 bg-blue-500/75 mt-5'>Go home.</button></Link>
                </div>
                <div id='contact-container'>
                    <p>or you can contact me and tell me what happened!</p>
                    <Link to='/contact'><button className='border-2 rounded-full p-3 bg-red-500/75 mt-5'>Deliver the bad news.</button></Link>
                 </div>
             </div>
        </div>
    );
}

export default NoPage;