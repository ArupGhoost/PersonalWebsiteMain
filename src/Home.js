import React from 'react';
import { Link } from 'react-router-dom';
import Svg1 from './Svg/Svg1';
import Svg2 from './Svg/Svg2';


const Home = () => {
    return (
        <>
             <div className='p-2 '>
            <div className='bg-first-image  bg-cover bg-center border-2 solid shadow transform skew-y-1 transition-all hover:skew-y-0'>
              <div className='text-center px-1 py-48 md:w-full md:w-full md:px-5 md:py-52 lg:w-full lg:h-full lg:px-52 lg:py-52'>
                <h1 className='text-4xl rounded-xl  py-3 text-gray-300 bg-green-700 border-white solid  shadow sm:text-4xl lg:text-5xl'>Hello!,  I'm Ghost a Frontend-Developer</h1>
              </div>
            </div>
          </div>
            <div className='text-center pt-8'>
              <h1 className='text-2xl text-gray-400 sm:text-2xl md:text-3xl lg:text-4xl'>Slide <span className='text-green-700'>Down</span></h1>
              </div>
              <div className='flex justify-center pt-3'>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400 animate-bounce"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
              </div>
               
            <div className='pt-16 text-center mb-16 '>
              <p className='text-gray-400  italic text-2xl sm: text-2xl md:text-3xl lg:text-4xl lg:px-48 lg:m-auto'>"Programming isn't about what you know; it's about what you can figure out.”</p>
              <div className='text-center ml-64 sm:ml-64 md:ml-80 lg:ml-80'>
                <p className='text-xl sm:text-xl md:text-2xl lg:text-3xl text-green-700'>- Chris Pine</p>
              </div>
            </div>
              
            <div className=' p-2'>   
            <div className='grid grid-cols-1 transform skew-y-1 transition-all hover:skew-y-0 bg-green-700 shadow border solid border-gray-300 md:grid-cols-1 lg:grid-cols-3'>
            
             <Svg1 />
             <div className='text-start lg:pt-16 px-4'>
                  <p className='text-gray-300 text-xl'>Actually my real name is <span className='text-indigo-800'>Arup Kumar Behera</span> and im from Angul, Odisha, India.
                   </p>
                  <p className='text-gray-300 text-xl'>Nice To meet You.</p>
                  <p className='text-gray-300 text-xl'>Welcome to my Personal Website, here you will know more about me,
                  my projects, strength, hobbies and many more so continue watching... </p>
             </div>
            <Svg2 />
            </div> 

              
            <div className='pt-16 text-center mb-16 '>
              <p className='text-gray-400  italic text-2xl sm: text-2xl md:text-3xl lg:text-4xl lg:px-48 lg:m-auto'>"Developing, Programming helps us to see this world in new way”</p>
              <div className='text-center ml-64 sm:ml-64 md:ml-80 lg:ml-80'>
                <p className='text-xl sm:text-xl md:text-2xl lg:text-3xl text-green-700'>- Ghost</p>
              </div>
            </div>
             
           <div className='grid grid-cols-1 pt-6 gap-2 mb-10 md:grid-cols-2 lg:grid-cols-2'>
            
             <div  className='bg-green-700 px-5 py-5 transform skew-y-2 transition-all hover:skew-y-0 rounded-3xl lg:w-1/2 lg:ml-72'>
               <p className='text-4xl text-center text-gray-300 md:mt-9 lg:mt-9'>Why Choose Ghost?</p>
             </div>
            
             <div className='bg-green-700  px-5 py-5 lg:w-1/2 rounded-3xl transform skew-y-2 transition-all hover:skew-y-0'>
             <p className='text-2xl text-center text-gray-300'>
               When i was in Gaming, my members gave this name bcoz  my skills were equivalent to COD character Ghost thats it..
             </p>
           </div>
           </div>
           
          <div className='text-center text-2xl mb-8 pt-6'>
            <p className='text-gray-400 transition-all'>To Know more about me click here <Link to='/about' className='text-green-700 bg-gray-400 rounded p-1 hover:text-gray-400 hover:bg-green-700'>About</Link></p>
          </div>

         </div>  
        </>
    )
}

export default Home
