import React from 'react';
import Ghost from './img/ghost.jpg';
import Html from './img/html-5.png';
import Css from './img/css-3.png';
import Js from './img/javascript.png';
import react from './img/react.png';
import Bootstrap from './img/bootstrap.png';
import Sass from './img/sass.png';
import Tailwind from './img/tailwind-css.png';
import {Link} from 'react-router-dom';


const About = () => {
    return (
        <>
        <div>
          <div className='bg-ghost-image grid place-content-center mt-12 '>
            <img src={Ghost} alt='' className='w-64 h-auto  border-4 solid border-green-700 rounded-full '/>
          </div>
           
           <div className='bg-gray-300 mb-10'>
           <div className='px-8 md:px-16 lg:px-64 py-4 pt-2'>
             
             <p className='text-xl font-serif px-2 '>Hii Its Arup(Ghost as you know before) thanks for coming to the About section here you will know more about me.
             Im from Kaniha, Talcher, Angul, Odisha, a self-taught front-end developer and im  25 years old and its going 
             all well.
             </p>
             
             <p className='text-xl font-serif pt-2 bg-green-700  text-gray-300 px-2 rounded transform skew-y-1 transition-all hover:skew-y-0'>Started with python in December 2020, but it was not my cup of tea. Then i came across HTML, CSS and I loved it.
             Then i created my first website which was small actually and it was about cars and bikes(It is in Github)
             Styling, Detailing, Animations were going all right then started using Javascript(It was dificult in start, Then
             i got used to it) gradually React(Hooks), Tailwind CSS and SCSS, Bootstrap,etc</p>
             
             <p className='text-xl font-serif pt-2 px-2'>But during May, June i was away from programming as i got covid, but im back now</p>
             
             <p className='text-xl font-serif  text-gray-300 pt-2 bg-green-700 px-2 rounded transform skew-y-1 transition-all hover:skew-y-0'>Other than that im  really hard working man, highly creative, quick learner, very friendly with others and in
             future i would like to become a Full-stack Developer but im more focused on Front-end now</p>
             
             <p className='text-xl font-serif pt-2 px-2 '>Beside programming I love to paly Football, mobile and pc games, loves travelling new places but stuck due to
             covid and money is also a big problem bcoz i dont have that now.</p>
             
             <p className='text-xl text-gray-300 font-serif lg:pt-2 bg-green-700 px-2 rounded transform skew-y-1 transition-all hover:skew-y-0'>So, I just want you see my talent what i can do in Developing World and everything goes right i can work for
             you.i just bet you will astonished with my improvement and  advantages that i can bring to your comapany or firm... Thank you for reading :)</p>
           </div>
           
          <div className='mt-10 text-center px-4 ml-4 sm:px-4 md:px-8 lg:px-16'>
            <p className='text-5xl text-gray-400'>I can do projects with these libraries and language which are :-</p>
          
          <div className='grid p-4 gap-4 grid-cols-3 lg:grid-cols-4 pt-8 bg-white mb-4 transform skew-y-1 transition-all hover:skew-y-0 shadow'>
             
               <img src={Html} alt='' className=' w-4/6 h-auto' />
               <img src={Css} alt=''  className=' w-4/6 h-auto'/>
               <img src={Js} alt=''  className=' w-4/6 h-auto '/>
               <img src={react} alt=''  className=' w-4/6 h-auto '/>
               <img src={Bootstrap} alt=''  className=' w-4/6 h-auto mt-4 '/>
               <img src={Sass} alt=''  className=' w-4/6 h-auto mt-4 '/>
               <img src={Tailwind} alt=''  className=' w-4/6 h-auto mt-4 lg:mt-16 '/>
             </div>
            
          </div>
          <div className='text-center text-2xl mb-8 pt-6'>
            <p className='text-gray-400 transition-all'>To see my projects click here <Link to='/project' className='text-green-700 bg-gray-400 rounded p-1 hover:text-gray-400 hover:bg-green-700'>Projects</Link></p>
          </div>
       </div>
        </div>
        </>
    )
}

export default About;
