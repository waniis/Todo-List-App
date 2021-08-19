import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from "./components/NavBar";
import DelayedCountries from './pages/homePage/HomePage';

function App() {
  return (
    <div className="App">

        <BrowserRouter>

            <NavBar/>
            <Route path = "/" exact component ={DelayedCountries} />

        </BrowserRouter>
 
    </div>
  );
}

export default App;
