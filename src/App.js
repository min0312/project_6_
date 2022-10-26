import './App.css';
import WeatherMain from './com/WeatherMain';
import WeatherMain2 from './com/WeatherMain2';
import Home from './com/Home';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wm' element={<WeatherMain />} />
        <Route path='/wm2' element={<WeatherMain2 />} />
      </Routes>
    </>
  );
}

export default App;
