import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Services from "./Pages/Services.jsx"
import Industries from "./Pages/Industries"
import Infrasctructure from "./Pages/Infrasctructure.jsx"
import Contact from "./Pages/Contact.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/infrastructure" element={<Infrasctructure />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App