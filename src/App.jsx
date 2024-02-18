import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// pages imports
import Home from "./Pages/Home page/Home";
import AboutPage from "./Pages/About page/AboutPage";
import ContactPage from "./Pages/Contact Page/ContactPage";
import Projects from "./Pages/Projects/Projects";
import PreLoader from "./Components/Preloader/Preloader";
import Office from "./Pages/Projects/Categories Pages/Office/Office";
import HealthCare from "./Pages/Projects/Categories Pages/HelthCare/HealthCare";
import Default from "./Pages/Projects/Categories Pages/Default/Default";
import AllProductsPage from "./Pages/Projects/All Products/AllProductsPage";
import ServicesPage from "./Pages/Services page/ServicesPage";
import SingleProject from "./Pages/Projects/SingleProject";
function App() {
  return (
    <div>
      <BrowserRouter>
        <PreLoader />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects/:id" element={<SingleProject />} />
          <Route path="projects" element={<Default />}>
            <Route path="gallery" element={<Projects />} />
            <Route path="office" element={<Office />} />
            <Route path="all-projects" element={<AllProductsPage />} />
            <Route path="healthcare" element={<HealthCare />} />
          </Route>
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
