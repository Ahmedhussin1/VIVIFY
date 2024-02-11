import './App.css'
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
// pages imports
import Home from './Pages/Home page/Home';
import AboutPage from './Pages/About page/AboutPage';
import ContactPage from './Pages/Contact Page/ContactPage';
import Projects from './Pages/Projects/Projects';
import PreLoader from './Components/Preloader/Preloader';
function App() {
  return (
    <div>
    <PreLoader/>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App