import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent.js';
import myStore from './redux/store';

function App() {

  // console.log("App.js:" , myStore.getState());

return (

    <div className ="App" >

      <Provider store={myStore} >

        <BrowserRouter>
      
          <MainComponent />
        
        </BrowserRouter>

      </Provider>

    </div>

);

}

export default App;
