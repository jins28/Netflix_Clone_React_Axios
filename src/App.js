import  React from 'react'
import {originals,action} from './urls'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title= 'Action' isSmall={true}/>
    </div>
  );
}

export default App;
