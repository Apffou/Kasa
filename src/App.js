import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';
import Dropdown from './components/Dropdown/Dropdown';
import Thumb from './components/Thumb/Thumb';

import Home from './Pages/Home';
import About from './Pages/About';
import Error404 from './Pages/Error404';
import Page from './Pages/Page';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home nom="Home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
    //<Tag nom="Cozy"></Tag>
    // <Route path="/About" element={<Tag nom="gzsegerg" />} />
  );
}

export default App;
