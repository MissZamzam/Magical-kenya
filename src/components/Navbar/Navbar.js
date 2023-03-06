import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
  <div class="container-fluid">
    {/* <a className="navbar-brand heading" href="#">Beach to Forest</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <NavLink to='/about'>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        </NavLink>
        
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li> */}
        <NavLink to='/btn'>
           <li class="nav-item">
          <a class="nav-link" href="#">Coastal Kenya</a>
        </li>
        </NavLink>
       
        <li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle discover" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Discover
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <NavLink to='/wildlife'>
               <li><a class="dropdown-item" href="#">Wildlife</a></li>
            </NavLink>
            <NavLink to='/nairobi'>
             <li><a class="dropdown-item" href="#">Nairobi</a></li>
            </NavLink>
            <NavLink to='/culture'>
                <li><a class="dropdown-item" href="#">Diverse Culture</a></li>
            </NavLink>
            <NavLink to='/parks'>
                          <li><a class="dropdown-item" href="#">National Parks</a></li>
            </NavLink>
            {/* <NavLink to='/safaris'>
              <li><a class="dropdown-item" href="#">Safaris</a></li>
            </NavLink> */}
            <NavLink to='/north'>
                <li><a class="dropdown-item" href="#">Northern Kenya</a></li>

            </NavLink>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
 
export default Navbar;