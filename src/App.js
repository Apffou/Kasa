import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';
import Dropdown from './components/Dropdown/Dropdown';
import Thumb from './components/Thumb/Thumb';

import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home nom="Home" />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
    //<Tag nom="Cozy"></Tag>
    // <Route path="/About" element={<Tag nom="gzsegerg" />} />
  );
}

export default App;
