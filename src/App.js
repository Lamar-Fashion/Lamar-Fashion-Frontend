import { React, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FixedHeader from './components/Header/FixedHeader';
import Abaya from './components/Abaya/Abaya';

function App() {
  const [y, setY] = useState(window.scrollY);
  window.onscroll = function () {
    setY(window.scrollY);
  };
  return (
    <>
      <Router>
        {Number(y) >= 120 && (
          <button
            className='go-up'
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }}
          >
            <i className='fas fa-angle-up'></i>
          </button>
        )}
        <FixedHeader />
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Abaya' element={<Abaya />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
