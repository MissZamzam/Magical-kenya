import { NavLink } from "react-router-dom"
import './Coastal.css'
import Footer from "../Footer/Footer";

const Coastal = () => {
    return (  
<div>
<h1 className="paragraphs">Coastal Cities</h1>
<p className="text-center">DREAMING OF A KENYA COAST BEACH VACATION?</p>



<div class="wrapper">
  <div class="cards_wrap">


    <div class="card_item">
    <div class="card_iner">
        <div class="card_top">
        <img src="https://i.pinimg.com/564x/23/90/df/2390df7c4e5d8047b19dfc2f2a6e2a7c.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Lamu
          </div>
          {/* <div class="card_info"> */}
            {/* <p class="title">Historic touristic town at North coast</p> */}
            
          {/* </div> */}
          <div class="card_creator">
          {/* <h1>Excited to learn more about Lamu?</h1> */}

            <NavLink to='/lamu'>
            <button className='button'>Discover Lamu</button>
            </NavLink>          
            </div>

            
        </div>
     </div>
    </div>


    <div class="card_item">
      <div class="card_iner">
        <div class="card_top">
        <img src="https://i.pinimg.com/564x/d1/2e/9a/d12e9a44a172f1fab94ea638ccea67db.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Mombasa
          </div>
          {/* <div class="card_info">
            <p class="title">Beautiful beaches and colonial heritage</p>
            <p>
            Mombasa offers a diverse marine life, world-class hotels and friendly atmosphere. There is a tropical climate is a great destination filled with activities for all ages.</p>
          </div> */}
          <div class="card_creator">
          {/* <h1>Excited to learn more about Mombasa?</h1> */}

            <NavLink to='/mombasa'>
            <button className='button'>Discover Mombasa</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>


    <div class="card_item">
    <div class="card_iner">
        <div class="card_top">
        <img src="https://miro.medium.com/max/500/1*Hsxd1iWcMPWp4XYHqC0p6g.jpeg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Malindi
          </div>
          {/* <div class="card_info">
            <p class="title"> The most scenic beaches </p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div> */}
          <div class="card_creator">
          {/* <h1>Excited to learn more about Malindi?</h1> */}

            <NavLink to='/malindi'>
            <button className='button'>Discover Malindi</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>


    <div class="card_item">
    <div class="card_iner">
        <div class="card_top">
        <img src="https://thumbs.dreamstime.com/b/old-abandoned-building-ocean-shore-old-abandoned-building-ocean-shore-mtwapa-mombasa-173320563.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Mtwapa
          </div>
          {/* <div class="card_info">
            <p class="title">Residents are Europeans</p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div> */}
          <div class="card_creator">
          {/* <h1>Excited to learn more about Mtwapa?</h1> */}

            <NavLink to='/mtwapa'>
            <button className='button'>Discover Mtwapa</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>


    <div class="card_item">
    <div class="card_iner">
        <div class="card_top">
        <img src="https://www.tesoroturismo.it/wp-content/uploads/2022/07/diani-beach-spiaggia.jpeg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Diani Beach
          </div>
          {/* <div class="card_info">
            <p class="title">A resort area on the Indian Ocean in Kenya</p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div> */}
          <div class="card_creator">
          {/* <h1>Excited to learn more about Diani Beach?</h1> */}

            <NavLink to='/diani'>
            <button className='button'>Discover Diani</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>

   
        </div>
      </div>
      <Footer />
        </div>
    );
}
 
export default Coastal;