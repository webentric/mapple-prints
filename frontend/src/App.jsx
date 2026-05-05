import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import ServicesPage from "./Pages/Services/ServicesPage.jsx"
import Industries from "./Pages/Industries"
import Infrasctructure from "./Pages/Infrasctructure.jsx"
import Contact from "./Pages/Contact.jsx"
import AboutPage from "./Pages/AboutPage.jsx"
import Products from "./Pages/Products.jsx"
import Quality from "./Pages/Quality.jsx"
import ScrollToTop from "./utils/ScrollToTop.jsx"
import FacilityPage from "./Pages/Infrastructure/FacilityPage.jsx"

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facility" element={<FacilityPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App