import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
        <Route path="/logement/:idlogement" element={<Page />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
