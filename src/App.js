import React from "react";
import { Routes, Route } from "react-router-dom"
import { useRoutes } from "react-router-dom";

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

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <AboutUs/> } ,
    { path: 'hero', element: <Hero/> } ,
    { path: 'content', element: <Content/> } ,
    { path: 'lamu', element: <Lamu/> } ,
    { path: 'mombasa', element: <Mombasa/> } ,
    { path: 'malindi', element: <Malindi/> } ,
    { path: 'mtwapa', element: <Mtwapa/> } ,
    { path: 'diani', element: <Diani/> } ,
    { path: 'parks', element: <Content/> }, 
    { path: 'wildlife', element: <Wildlife/> }, 
    { path: 'coast', element: <Coastal/> } ,
    { path: 'north', element: <North/> } ,
    { path: 'nairobi', element: <Nairobi/> }, 
    { path: 'culture', element: <Culture/> } 
]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <AboutUs/> } />
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
        <Route path="culture" element={ <Culture/> } />




      </Routes>
    </div>
  )
}

export default App