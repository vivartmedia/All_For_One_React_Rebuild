
import './App.css';
import HomePageComponent from './components/HomePageComponent';
import Add2Numbers from './components/Add2Numbers';
import Compare2Numbers from './components/Compare2Numbers';
import MadLib from './components/MadLib';
import MagicBall from './components/MagicBall';
import OddOrEven from './components/OddOrEven';
import RestaurantPicker from './components/RestaurantPicker';
import ReverseAlphaNumeric from './components/ReverseAlphaNumeric';
import SayHello from './components/SayHello';
import TimeWokeUp from './components/TimeWokeUp';
import ReverseNumber from './components/ReverseNumber';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageComponent />} />
        <Route path='Add2Numbers' element={<Add2Numbers />} />
        <Route path='Compare2Numbers' element={<Compare2Numbers />} />
        <Route path='MadLib' element={<MadLib />} />
        <Route path='MagicBall' element={<MagicBall />} />
        <Route path='OddOrEven' element={<OddOrEven />} />
        <Route path='RestaurantPicker' element={<RestaurantPicker />} />
        <Route path='ReverseAlphaNumeric' element={<ReverseAlphaNumeric />} />
        <Route path='SayHello' element={<SayHello />} />
        <Route path='TimeWokeUp' element={<TimeWokeUp />} />
        <Route path='ReverseNumber' element={<ReverseNumber />} />

        
      
      </Routes>
      
      
    </BrowserRouter>
    
  );
}

export default App;
