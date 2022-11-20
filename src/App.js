import { Routes, Route } from "react-router-dom"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Contact from "./components/ContactForm"
import Trip from "./components/Trip"
import Destination from "./components/Destination"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App