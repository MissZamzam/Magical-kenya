import './Home.css'
import { NavLink } from "react-router-dom"


function Home() {
  return (
    <div 
    style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=500&q=60")`
    }} className="image"> 
        {/* <h1 className='heading'>Magical kenya</h1> */}
        <NavLink to='/hero'>
          <div className='imaage'>
          <img src='https://i.pinimg.com/564x/29/7e/47/297e47215f921f56d9549d32b054c123.jpg' className='profile'></img>
          <h1 className='head'>Discover Magical Kenya</h1>
          </div>

        </NavLink>
    </div>
  );  
  

}

export default Home;