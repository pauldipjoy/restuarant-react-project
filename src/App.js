import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent.js';

function App() {
  return (
    <div className ="App" >

  <BrowserRouter>
      
    <MainComponent  />
      
  </BrowserRouter>
    
    </div>
  );
}

export default App;
