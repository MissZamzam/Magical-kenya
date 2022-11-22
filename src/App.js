import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Hero from "./components/Hero/Hero"
import AboutUs from "./components/AboutUs"
import Trip from "./components/Trip"
import Destination from "./components/Destination"
import Content from "./components/Content"
import Wildlife from "./components/Wildlife"
import Coastal from "./components/Coastal"
import North from "./components/North"
import Nairobi from "./components/Nairobi"
import Culture from "./components/Culture"
import Safari from "./components/Safari"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <AboutUs/> } />
        <Route path="destination" element={ <Destination/> } />
        <Route path="hero" element={ <Hero/> } />
        <Route path="content" element={ <Content/> } />
        <Route path="trip" element={ <Trip/> } />
        <Route path="wildlife" element={ <Wildlife/> } />
        <Route path="coast" element={ <Coastal/> } />
        <Route path="north" element={ <North/> } />
        <Route path="nairobi" element={ <Nairobi/> } />
        <Route path="safari" element={ <Safari/> } />
        <Route path="culture" element={ <Culture/> } />




      </Routes>
    </div>
  )
}

export default App