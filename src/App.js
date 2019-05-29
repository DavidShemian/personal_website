import React from 'react';
import Welcome from './pages/Welcome';
import PastWork from './pages/PastWork';
import Navbar from './components/NavBar';
import AboutMySelf from './pages/AboutMySelf';
import Abilities from './pages/Abilities';
import ContactInfo from './pages/ContactInfo';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <MobileMenu />
      <Welcome />
      <PastWork />
      <Abilities />
      <AboutMySelf />
      <ContactInfo />
    </div>
  );
}

export default App;
