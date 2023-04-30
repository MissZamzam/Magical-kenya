// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
//       <div class="container-fluid">
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul class="navbar-nav">
//             <NavLink to="/about">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   About
//                 </a>
//               </li>
//             </NavLink>

         
//             <NavLink to="/coast">
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Coastal Kenya
//                 </a>
//               </li>
//             </NavLink>

//             <li class="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle discover"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Discover
//               </a>
//               <ul
//                 class="dropdown-menu"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <NavLink to="/wildlife">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Wildlife
//                     </a>
//                   </li>
//                 </NavLink>
//                 <NavLink to="/nairobi">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Nairobi
//                     </a>
//                   </li>
//                 </NavLink>
//                 <NavLink to="/culture">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Diverse Culture
//                     </a>
//                   </li>
//                 </NavLink>
//                 <NavLink to="/parks">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       National Parks
//                     </a>
//                   </li>
//                 </NavLink>
             
//                 <NavLink to="/north">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Northern Kenya
//                     </a>
//                   </li>
//                 </NavLink>
//               </ul>

//             </li>
//           </ul>
//         </div>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;

//  import "./Navbar.css";
//  import { NavLink } from "react-router-dom";



 
//  const Navbar = () => {
//    return (
//      <div>
//        <>
//     <header>
//         <div class="container">
//             <input type="checkbox" name="" id="check" />
            
//             <div class="logo-container">
//                 <h3 class="logo">Magical<span>Kenya</span></h3>
//             </div>

//             <div class="nav-btn">
//                 <div class="nav-links">
//                     <ul>
//                        <NavLink to="/about">
//                         <li class="nav-link" style="--i: .6s">
//                             <a href="#">About</a>
//                         </li>
//                         </NavLink>
                        
//                         <li class="nav-link" style="--i: .85s">
//                             <a href="#">Menu<i class="fas fa-caret-down"></i></a>
//                             <div class="dropdown">
//                                 <ul>
//                                   <NavLink to='/wildlife'>
//                                       <li class="dropdown-link">
//                                         <a href="#">Link 1</a>
//                                     </li>
//                                   </NavLink>
//                                   <NavLink to='nairobi'>
//                                      <li class="dropdown-link">
//                                         <a href="#">Link 2</a>
//                                     </li>
//                                   </NavLink>
                                   
//                                     <li class="dropdown-link">
//                                         <a href="#">Link 3<i class="fas fa-caret-down"></i></a>
//                                         <div class="dropdown second">
//                                             <ul>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">Link 1</a>
//                                                 </li>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">Link 2</a>
//                                                 </li>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">Link 3</a>
//                                                 </li>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">More<i class="fas fa-caret-down"></i></a>
//                                                     <div class="dropdown second">
//                                                         <ul>
//                                                             <li class="dropdown-link">
//                                                                 <a href="#">Link 1</a>
//                                                             </li>
//                                                             <li class="dropdown-link">
//                                                                 <a href="#">Link 2</a>
//                                                             </li>
//                                                             <li class="dropdown-link">
//                                                                 <a href="#">Link 3</a>
//                                                             </li>
//                                                             <div class="arrow"></div>
//                                                         </ul>
//                                                     </div>
//                                                 </li>
//                                                 <div class="arrow"></div>
//                                             </ul>
//                                         </div>
//                                     </li>
//                                     <NavLink to='culture'>
//                                       <li class="dropdown-link">
//                                         <a href="#">Link 4</a>
//                                     </li>
//                                     </NavLink>
                                    
//                                     <div class="arrow"></div>
//                                 </ul>
//                             </div>
//                         </li>
//                         <li class="nav-link" style="--i: 1.1s">
//                             <a href="#">Services<i class="fas fa-caret-down"></i></a>
//                             <div class="dropdown">
//                                 <ul>
//                                     <li class="dropdown-link">
//                                         <a href="#">Link 1</a>
//                                     </li>
//                                     <li class="dropdown-link">
//                                         <a href="#">Link 2</a>
//                                     </li>
//                                     <li class="dropdown-link">
//                                         <a href="#">Link 3<i class="fas fa-caret-down"></i></a>
//                                         <div class="dropdown second">
//                                             <ul>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">Link 1</a>
//                                                 </li>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">Link 2</a>
//                                                 </li>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">Link 3</a>
//                                                 </li>
//                                                 <li class="dropdown-link">
//                                                     <a href="#">More<i class="fas fa-caret-down"></i></a>
//                                                     <div class="dropdown second">
//                                                         <ul>
//                                                             <li class="dropdown-link">
//                                                                 <a href="#">Link 1</a>
//                                                             </li>
//                                                             <li class="dropdown-link">
//                                                                 <a href="#">Link 2</a>
//                                                             </li>
//                                                             <li class="dropdown-link">
//                                                                 <a href="#">Link 3</a>
//                                                             </li>
//                                                             <div class="arrow"></div>
//                                                         </ul>
//                                                     </div>
//                                                 </li>
//                                                 <div class="arrow"></div>
//                                             </ul>
//                                         </div>
//                                     </li>
//                                     <li class="dropdown-link">
//                                         <a href="#">Link 4</a>
//                                     </li>
//                                     <div class="arrow"></div>
//                                 </ul>
//                             </div>
//                         </li>
//                         <li class="nav-link" style="--i: 1.35s">
//                             <a href="#">About</a>
//                         </li>
//                     </ul>
//                 </div>

//                 <div class="log-sign" style="--i: 1.8s">
//                     <a href="#" class="btn transparent">Log in</a>
//                     <a href="#" class="btn solid">Sign up</a>
//                 </div>
//             </div>

//             <div class="hamburger-menu-container">
//                 <div class="hamburger-menu">
//                     <div></div>
//                 </div>
//             </div>
//         </div>
//     </header>
//     <main>
//         <section>
//             <div class="overlay"></div>
//         </section>
//     </main>
//        </>
//      </div>
//    )
//  }
 
//  export default Navbar
import "./Navbar.css";
import { NavLink } from "react-router-dom";


 
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">

  <nav>
    {/* <h1>Logo</h1> */}
    <ul>
        <NavLink to='/about'>
         <li><a href=''>About</a></li>
        </NavLink>
        <NavLink to='/coast'>
         <li><a href=''>Coastal</a></li>
        </NavLink>

        <li><a href=''>Discover</a>
        <ul>
            <NavLink to='/wildlife'>
            <li><a href=''>Wildlife</a></li>
            </NavLink>
            <NavLink to='/nairobi'>
            <li><a href=''>Nairobi</a></li>
            </NavLink>
            <NavLink>
            <li><a href=''>Culture</a></li>
            </NavLink>
            <li><a href=''>Northern</a></li>
            <li><a href=''>Parks</a></li>
        </ul>
        </li>
        {/* <li><a href=''></a></li>
        <li><a href=''></a></li>
        <li><a href=''></a></li> */}

    </ul>
  </nav>
  </div>

  )
}

export default Navbar
