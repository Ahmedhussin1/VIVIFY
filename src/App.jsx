import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
// pages imports
import Home from './Pages/Home page/Home';
import AboutPage from './Pages/About page/AboutPage';
import ContactPage from './Pages/Contact Page/ContactPage';
import Projects from './Pages/Projects/Projects';
import Footer from './Components/Footer/Footer';
function App() {
  return (
   <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
   </div>
  )
}

export default App