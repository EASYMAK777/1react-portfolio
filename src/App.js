import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

import About from './componenets/Pages/about'

import Portfolio from './componenets/Pages/portfolio';

import Contact from "./componenets/Pages/contact"


function App() {
  return (
    
    <Router>
      <div>
        
        <Route exact path="/" component ={About} />
        <Route exact path ="/Portfolio" component ={Portfolio}/>
        <Route exact path ="/Contact" component ={Contact}/>
        {/* <Route exact path ="/linked-in" component={Linked-In}/> */}
        {/* <Route exact path ="/resume" component={Resume}/>  */}
        <Route exact path="/react-portfolio" component={About} />
        
        
      </div>

    </Router>
    
    
    
    
    










  );
}

export default App;








  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>