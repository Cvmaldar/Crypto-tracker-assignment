
import "./App.css";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import { CryptoProvider } from './Context/cryptocontext';
import Home from './Pages/Home';
import About from './Pages/About';
import Chart from "./Pages/Chart";
import Contact from './Pages/Contact';

function App() {
  return (
    <CryptoProvider>
   <Router>
   <div>
      <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/coins/:id' element={<Chart/>}/>
    <Route exact path='/about' element={<About />}/>
    <Route exact path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
    </Router>


  
    
    </CryptoProvider>
  );
}

export default App;
