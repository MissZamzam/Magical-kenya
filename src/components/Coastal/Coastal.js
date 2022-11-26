import { NavLink } from "react-router-dom"
import './Coastal.css'

const Coastal = () => {
    return (  
<div>
<h1 className="text-center">Coastal Cities</h1>
<p className="text-center">DREAMING OF A KENYA COAST BEACH VACATION?</p>



<div class="wrapper">
  <div class="cards_wrap">


    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/564x/d4/24/32/d424323fbcc9ef59f64c161119c07ef5.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Lamu
          </div>
          <div class="card_info">
            <p class="title">Historic touristic town at North coast</p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div>
          <div class="card_creator">
          <h1>Excited to learn more about Lamu?</h1>

            <NavLink to='/lamu'>
            <button className='button'>Discover Lamu</button>
            </NavLink>          
            </div>

            
        </div>
     </div>
    </div>


    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/564x/bb/0f/22/bb0f221f13094a4aa631abf7eff90ed5.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Mombasa
          </div>
          <div class="card_info">
            <p class="title">Popular for its beaches and colonial heritage</p>
            <p>
            Mombasa offers a diverse marine life, world-class hotels and friendly atmosphere. There is a tropical climit is a great destination filled with activities for all ages.             </p>
          </div>
          <div class="card_creator">
          <h1>Excited to learn more about Mombasa?</h1>

            <NavLink to='/mombasa'>
            <button className='button'>Discover Mombasa</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>


    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://www.travelmoran.com/wp-content/uploads/2022/06/vasco-da-gama-pillar-1024x1024.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Malindi
          </div>
          <div class="card_info">
            <p class="title"> The most scenic beaches in Kenya</p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div>
          <div class="card_creator">
          <h1>Excited to learn more about Malindi?</h1>

            <NavLink to='/malindi'>
            <button className='button'>Discover Malindi</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>


    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/236x/7c/1e/6a/7c1e6a1c781afc72ae8ac9ed98ab1d2a.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Mtwapa
          </div>
          <div class="card_info">
            <p class="title">A coastal town where many Europeans live</p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div>
          <div class="card_creator">
          <h1>Excited to learn more about Mtwapa?</h1>

            <NavLink to='/mtwapa'>
            <button className='button'>Discover Mtwapa</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>


    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/236x/7c/1e/6a/7c1e6a1c781afc72ae8ac9ed98ab1d2a.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
              Diani Beach
          </div>
          <div class="card_info">
            <p class="title">A resort area on the Indian Ocean in Kenya

</p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div>
          <div class="card_creator">
          <h1>Excited to learn more about Diani Beach?</h1>

            <NavLink to='/diani'>
            <button className='button'>Discover Diani</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>

   
        </div>
      </div>
        </div>
    );
}
 
export default Coastal;