import React from "react";
import { Router, Routes, Route } from 'react-router-dom';


import Home from "./components/Home/Home"
import Hero from "./components/Hero/Hero"
import AboutUs from "./components/AboutUs"
import Lamu from "./components/Lamu/Lamu"
import Content from "./components/Content"
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



function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <AboutUs/> } />
        {/* <Route path="destination" element={ <Destination/> } /> */}
        <Route path="hero" element={ <Hero/> } />
        <Route path="content" element={ <Content/> } />
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
        {/* <Route path="safari" element={ <Safari/> } /> */}
        <Route path="culture" element={ <Culture/> } />




      </Routes>
      </Router>

    </div>
  )
}

export default App