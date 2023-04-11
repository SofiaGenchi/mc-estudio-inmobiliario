import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Propiedades from './components/Propiedades/Propiedades';
import ImgGallery from './components/ImgGallery/ImgGallery';
import Contact from './components/Contacto/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    // <>
    //   <Home />
    // </>

    <Router>
      <Header />

      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/propiedades' exact Component={Propiedades} />
        <Route path='/informacion' exact Component={ImgGallery} />
        <Route path='/contacto' exact Component={Contact} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;