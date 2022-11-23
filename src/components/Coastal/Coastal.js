import { NavLink } from "react-router-dom"
import './Coastal.css'

const Coastal = () => {
    return (  
<div>
<h1>Coastal Cities</h1>



<div class="wrapper">
  <div class="cards_wrap">


    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/236x/7c/1e/6a/7c1e6a1c781afc72ae8ac9ed98ab1d2a.jpg" alt="car" />
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
            <button className='button'>Click here</button>
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
            <button className='button'>Click here</button>
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
            <button className='button'>Click here</button>
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
            <button className='button'>Click here</button>
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
            <button className='button'>Click here</button>
            </NavLink>          
            </div>
        </div>
     </div>
    </div>

   
        </div>
      </div>




            {/* <ul>
                <li>Lamu</li>
                <p>historic touristic town at North coast</p>
                <li>Malindi & Watamu</li>
                <p>The most scenic beaches in Kenya</p>
                <li>Mombasa</li>
                <p>Kenya's second largest city, worth visiting for its beaches and colonial heritage</p>
                <li>Diani Beach Ukunda</li>
                <p>village at the touristic Diani Beach</p>
                <li>Msambweni</li>
                <p> village at the more remote South Coast</p>
                <li>Mtwapa</li>
                <p>a coastal town where many Europeans live</p>
            </ul> */}
        </div>
    );
}
 
export default Coastal;