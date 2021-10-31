import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({mainOpen}) => {
    return (
        <>
             <div>
                 <nav className='flex justify-between items-center px-4 py-4 lg:px-12 lg:py-10 '>
                   <div>
                     <Link to='/' className='text-2xl lg:text-4xl text-green-700 hover:text-gray-400'>Ghost PortFolio</Link>
                   </div>
                   <div className='flex'>
                
                       <Link to='/about' className='pr-4 lg:pr-24 hidden lg:block lg:text-2xl text-gray-400 hover:text-green-700 focus:text-green-700'>About</Link>
                       <Link to='/project' className=' lg:text-2xl hidden lg:block text-gray-400 hover:text-green-700 focus:text-green-700'>Projects</Link>
                       <Link to='/feedback' className=' pl-4 lg:pl-24 hidden lg:block lg:text-2xl text-gray-400 hover:text-green-700 focus:text-green-700'>Feedback</Link>
                     <div onClick={mainOpen}>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block lg:hidden text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                   </div>
                   </div>
                 </nav>
             </div>
        </>
    )
}

export default Navbar
