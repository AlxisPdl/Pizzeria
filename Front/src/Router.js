import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';
import Carte from './Pages/Carte';
import Footer from './Components/Footer';
import Mentions from './Pages/Mentions';
import Admin from './Pages/Admin';
import Adminpizza from './Pages/Adminpizza';


function router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/MentionsLegales" element={<Mentions />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Adminpizza" element={<Adminpizza />} />
        <Route path="*" element={<h1>ERROR 404 <br /> Page not found</h1>} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default router;
