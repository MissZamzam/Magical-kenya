import './Home.css'
import { NavLink } from "react-router-dom"


function Home() {
  return (
    <div className="image"> 
        <NavLink to='/about'>
          <div className='imaage'>
          <img src='https://i.pinimg.com/564x/29/7e/47/297e47215f921f56d9549d32b054c123.jpg' className='profile'></img>
          <h1 className='head'>🇰🇪Discover Magical Kenya 🇰🇪</h1>
          </div>

        </NavLink>
    </div>
  );  
  

}

export default Home;