
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Feedback from './Feedback'
import ResNavbar from './ResNavbar';


function App() {

  const[open, setOpen] = useState(false);

  const mainOpen = () => {
    setOpen(!open);
  }

  useEffect(() => {
    const nFunction = () => {
      if(window.innerWidth > 960 && open){
        setOpen(false);
      }
    }
      window.addEventListener('resize', nFunction);
      return () => {
        window.removeEventListener('resize', nFunction);
      }
  },[open])

  return(
    <div className="App">
           <div className=''>
           
           <Navbar mainOpen={mainOpen} />
           <ResNavbar open={open} mainOpen={mainOpen} />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about'  exact component={About} />
            <Route path='/project'  exact component={Project} />
            <Route path='/feedback'  exact component={Feedback} />

          </Switch>
         
          
       
             
           </div>
    </div> 
  );
}

export default App;
