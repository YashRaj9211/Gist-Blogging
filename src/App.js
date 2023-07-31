import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './Components/Navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App" id='appp' >
      <p>{console.log("hell yeah")}</p>
      <NavBar />
      <div className='outlet-div'>
      <Outlet />
      </div>
    </div>
  );
}

export default App;
