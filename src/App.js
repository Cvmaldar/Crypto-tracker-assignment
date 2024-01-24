
import './App.css';
import Filters from './Components/Filters';
import Navbar from './Components/Navbar';
import Tablecomponent from './Components/Tablecomponent';


function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Filters/>
      <Tablecomponent />  
    </div>
    
  );
}

export default App;
