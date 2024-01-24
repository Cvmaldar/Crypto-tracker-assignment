import React from 'react';
import Filters from '../Components/Filters';
import Navbar from '../Components/Navbar';
import Tablecomponent from '../Components/Tablecomponent';
import '../App.css';

import { CryptoProvider } from '../Context/cryptocontext';
const Home = () => {
    return (
        <div className='App'>
 <CryptoProvider>
            
            <Navbar />
            <Filters/>
            <Tablecomponent/>
          
    </CryptoProvider>
        </div>
    );
};

export default Home;