import React from 'react';


import {Cards,Charts,CountryPicker,Header} from './components';
import './App.css';

const App = () =>{
    return(<div className="container">
        <Header/>
         <Charts/>
        <Cards/>
        <CountryPicker/>
       

    </div>)
}

export default App;