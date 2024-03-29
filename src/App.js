import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import Hero from "./components/Hero/Hero"
import Lamu from "./components/Lamu/Lamu"
import Wildlife from "./components/Wildlife/Wildlife"
import Coastal from "./components/Coastal/Coastal"
import North from "./components/North"
import Nairobi from "./components/Nairobi"
import Culture from "./components/Cultural/Culture"
import Mombasa from "./components/Mombasa/Mombasa"
import Malindi from "./components/Malindi/Malindi"
import Mtwapa from "./components/Mtwapa/Mtwapa"
import Diani from "./components/Diani/Diani"
import Parks from "./components/Parks/Parks"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Features from "./Features";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="navbar" element={ <Navbar/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="faq" element={ <FAQ/> } />
        <Route path="hero" element={ <Hero/> } />
        <Route path="lamu" element={ <Lamu/> } />
        <Route path="mombasa" element={ <Mombasa/> } />
        <Route path="malindi" element={ <Malindi/> } />
        <Route path="mtwapa" element={ <Mtwapa/> } />
        <Route path="diani" element={ <Diani/> } />
        <Route path="parks" element={ <Parks/> } />
        <Route path="wildlife" element={ <Wildlife/> } />
        <Route path="coast" element={ <Coastal/> } />
        <Route path="north" element={ <North/> } />
        <Route path="nairobi" element={ <Nairobi/> } />
        <Route path="culture" element={ <Culture/> } />
        <Route path="features" element={<Features/>}/>
        <Route path="footer" element={ <Footer/> } />





      </Routes>

    </div>
  )
}

export default App