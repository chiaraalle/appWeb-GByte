import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Servizi from "./components/Servizi";
import Contatti from "./components/Contatti";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
