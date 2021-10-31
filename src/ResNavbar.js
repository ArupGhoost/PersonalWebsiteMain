import React from 'react';
import {Link} from 'react-router-dom';

const ResNavbar = ({open, mainOpen}) => {
    return (
        <>
                <div onClick={mainOpen}>
                
                { open ? 
                    <nav className='absolute bg-green-700 grid grid-cols-1 gap-2 place-content-center right-0 h-full z-10 text-center w-full '>
                      
                      <Link to='/about' className='-mt-16 text-3xl text-gray-400'>About</Link>
                       <Link to='/project' className='mt-6 text-3xl text-gray-400'>Projects</Link>
                       <Link to='/feedback' className='mt-16 text-3xl text-gray-400'>Feedback</Link>
                    
                  
                 </nav> : ''
           
                }
             </div>
        </>
    )
}

export default ResNavbar;
