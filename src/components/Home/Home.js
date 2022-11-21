import './Home.css'
import { Link, NavLink } from "react-router-dom"


function Home() {
  return (
    <div 
    style={{ 
      backgroundImage: `url("https://i.pinimg.com/564x/ae/dc/3e/aedc3e7ca11289982fc2de972fbe6176.jpg")`
    }} className="image"> 
        <h1 className='heading'>Magical kenya</h1>
        <NavLink to='/hero'>
        <img src='https://i.pinimg.com/236x/46/9e/dc/469edc56a2cd471e46d41cdb06d66b8b.jpg' text-center className='profile'></img>

        </NavLink>
    </div>
  );  
  

}

export default Home;