import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { MyContext } from "./myContext";

import Experiencia from './components/ExperienciaRadical/Experiencia';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import RandomTrip from './components/RandomTrip';
import Information from './components/information/Information';
import SendInformation from './components/information/SendInformation';
import Footer from './components/Footer/Footer';


function App() {
  const [km, setKm] = useState(0);
  const [food, setFood] = useState("");
  const [read, setRead] = useState("");
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <MyContext.Provider value={{ km, setKm, food, setFood, read, setRead, total, setTotal } }>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='trip' element={<RandomTrip />}  />
        <Route path='experience' element={<Experiencia />}  />
        <Route path='information' element={<Information />}  />
        <Route path='sendInformation' element={<SendInformation />}  />
      </Routes>
      </MyContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
