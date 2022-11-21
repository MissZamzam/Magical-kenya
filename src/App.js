import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Trip from "./components/Trip"
import Destination from "./components/Destination"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <AboutUs/> } />
        <Route path="destination" element={ <Destination/> } />
        <Route path="hero" element={ <Hero/> } />
        <Route path="trip" element={ <Trip/> } />
      </Routes>
    </div>
  )
}

export default App