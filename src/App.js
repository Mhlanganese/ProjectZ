import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Portfolio from './Pages/Portfolio';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';

export default function App(){
  return (
  
    <>
    <Router>
    <Navbar/>
       <div className="container" >
         
          

         <Switch>
                <Route path='/' exact/>
                <Route path='/Portfolio' exact component={Portfolio} />
                <Route path='/Projects' exact component={Projects} />
                <Route path='/About' exact component={About} />
                <Route path='/Contact' exact component={Contact} />
            </Switch>
            </div>
            
    </Router>
       
    
    </>
  );
}


