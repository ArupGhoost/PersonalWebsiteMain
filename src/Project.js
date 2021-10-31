import React from 'react';
import {Link} from 'react-router-dom';

const Project = () => {
    return (
        <>
          <div className='mt-10 '>
            <p className='text-2xl text-green-700 text-center'>Thanks for coming to the Projects section.</p>
            <p className='text-3xl pt-4 text-gray-400 text-center'>Here are some projects which has been deployed on netlify:-</p>
          
         <div className='mt-2 p-2'> 
          <div className='bg-gray-300 p-3 transform skew-y-1 hover:skew-y-0 transition-all shadow'>
           
           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
              <div className=' bg-red-400 p-4 rounded'>
                 <p className='text-2xl text-white'>Covid 19</p>
               <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/Covid19' className='text-white'>Github</a>
                 <a href='https://reactcovid19about.netlify.app' className='float-right' title='website'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
              </div>
              </div>

              <div className='bg-black p-4 rounded'>
                 <p className='text-2xl text-indigo-300'>Wallpapers</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/WallPapers' className='text-indigo-300 '>Github</a>
                 <a href='https://reactwallpapers.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>

              <div className='bg-white p-4 rounded'>
                 <p className='text-2xl text-gray-400'>CarsOMania</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/Carparts' className='text-gray-400 '>Github</a>
                 <a href='https://reactcarparts.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>

              <div className='bg-white p-4 rounded'>
                 <p className='text-2xl text-indigo-600'>Illustrations</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/Illustrations' className='text-indigo-600 '>Github</a>
                 <a href='https://reactillustrations.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>

              <div className='bg-gray-400 p-4 rounded'>
                 <p className='text-2xl text-white'>React Interview Questions</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/ReactInterviewQs' className='text-white '>Github</a>
                 <a href='https://reactinterviewqs.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>

              <div className='bg-green-400 p-4 rounded'>
                 <p className='text-2xl text-black'>Weather</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/GhostWeatherApp' className='text-black '>Github</a>
                 <a href='https://ghostweather.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>

              <div className='bg-indigo-300 p-4 rounded'>
                 <p className='text-2xl text-white'>ReactTodo</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/GhostTodo' className='text-white '>Github</a>
                 <a href='https://ghostreacttodo.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>
              
              <div className='bg-red-700 p-4 rounded'>
                 <p className='text-2xl text-white'>Marvel</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/Marvel' className='text-white '>Github</a>
                 <a href='https://reactmarvel.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>
              
              <div className='bg-indigo-700 p-4 rounded'>
                 <p className='text-2xl text-black'>Join Gaming Community</p>
                 <div className='mt-10'>
                 <a href='https://github.com/ArupGhoost/EyeButton' className='text-black '>Github</a>
                 <a href='https://reactjoin.netlify.app' className='float-right ' >  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg></a>
               </div>
              </div>
              
              
            </div>
            
           
           </div>
           
           <div className='text-center pt-8'>
               <p className='text-2xl'>To see more projects here my Github Link<a href='https://github.com/ArupGhoost' className='text-green-700'>(ArupGhoost Github).</a></p>
               <p className='pt-2 text-xl text-gray-500'>I have about 2-3 months proper hands-on practise, so you can rely on me.</p>
               <p className='pt-2 text-gray-500 text-xl'>I wanted to be a full-stack later, so some Node.js, Express and MongoDB projects are coming soon in
               Github as well in this website.</p>
            </div>
        
         <div className='pt-4 text-center'> 
             <p className='text-2xl'>If you want to contact me click on <Link to='/feedback' className=' text-xl text-green-700 bg-gray-400 rounded p-1 hover:text-gray-400 hover:bg-green-700'>Feedback</Link></p>
          </div>
         
          </div>
          </div>
        </>
    )
}

export default Project
