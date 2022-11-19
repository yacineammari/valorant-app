import React from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import AgentsContainer from './components/Pages/AgentsContainer';
import MapsContainer from './components/Pages/MapsContainer';
import WeaponsGearContainer from './components/Pages/WeaponsGearContainer';
import PlayerCardsContainer from './components/Pages/PlayerCardsContainer';
import BuddiesContainer from './components/Pages/BuddiesContainer';
import SpraysContainer from './components/Pages/SpraysContainer';
import ErrorContainer from './components/Pages/ErrorContainer';
import NavBr from './components/NavBr';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBr />
        <Routes>
            <Route exact path="/" element={<Navigate replace to="/Agents" />}> </Route>
            <Route path="/Agents" element={<AgentsContainer />}></Route>
            <Route path="/Maps" element={<MapsContainer />}></Route>
            <Route path="/Weapons&Gear" element={<WeaponsGearContainer />}></Route>
            <Route path="/PlayerCards" element={<PlayerCardsContainer />}></Route>
            <Route path="/Buddies" element={<BuddiesContainer />}></Route>
            <Route path="/Sprays" element={<SpraysContainer />}></Route>
            <Route path='*' element={<ErrorContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
    );
}