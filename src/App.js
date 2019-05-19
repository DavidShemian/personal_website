import React from 'react';
import Welcome from './pages/Welcome';
import PastWork from './pages/PastWork';
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
      <Welcome />
      <PastWork />
    </div>
  );
}

export default App;
