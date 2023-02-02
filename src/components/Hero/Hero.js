// import { Button } from 'bootstrap';
import './Hero.css'
import { NavLink } from "react-router-dom"
import Footer from '../Footer/Footer';
// import { Tooltip } from 'bootstrap';

import Lion from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/Lion.jpg'
import Coastal from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/Coastal.jpg'
import North from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/North.jpg'
import Safaris from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/Safaris.jpg'
import Nairobi from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/Nairobi.jpg'
import Culture from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/Culture.jpg'
import Parks from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/Parks.jpg'
import Features from '/home/zamzam/Desktop/Development/PostSchoolProjects/magical-kenya/src/components/Hero/images/Features.jpg'

function Hero() {
    return (
      <div>
        <h1 className='paragraphs'>Karibu Kenya</h1>
        <p>Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands. It’s also home to wildlife like lions, elephants and rhinos. From Nairobi, the capital, safaris visit the Maasai
           Mara Reserve, known for its annual wildebeest migrations, and Amboseli National Park, offering views of Tanzania’s 5,895m Mt. Kilimanjaro.</p>
        {/* <NavLink to='/faq'>
            <button className='button'>FAQ</button>
        </NavLink>   */}
        <p className='paragraphs'>Facts about Kenya</p>
        

<div class="wrapper">
  <div class="cards_wrap">

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
          <img src={Lion} />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            wildlife
          </div>
          <div class="card_creator">
            <NavLink to='/wildlife'>
            <button className='button'>Explore More</button>
            </NavLink>          
            </div>
        </div>
      </div>
    </div>

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
          <img src={Coastal} />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Coastal Kenya
          </div>
         
          <div class="card_creator">
            <NavLink to='/coast'>
            <button className='button'>Explore More</button>
            </NavLink>          
            </div>
        </div>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src={North}  alt="" />

        </div>
        <div class="card_bottom">
          <div class="card_category">
            Northern Kenya
          </div>
          
          <div class="card_creator">
            <NavLink to='/north'>
            <button className='button'>Explore More</button>
            </NavLink>         
             </div>
        </div>
      </div>
    </div>

   

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src={Safaris}
        alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            safaris
          </div>
          <div class="card_creator">
            <NavLink to='/safari'>
            <button className='button'>Explore More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src={Nairobi}
         alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Nairobi
          </div>
          <div class="card_creator">
            <NavLink to='/nairobi'>
            <button className='button'>Explore More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src={Culture}
         alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Diverse Culture
          </div>
          <div class="card_creator">
            <NavLink to='/culture'>
            <button className='button'>Explore More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src={Parks}
         alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            National Parks & Reserves
          </div>
      
          <div class="card_creator">
            <NavLink to='/parks'>
            <button className='button'>Explore More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src={Features}
         alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Breath-Taking  Features
          </div>
     
          <div class="card_creator">
            <NavLink to='/culture'>
            <button className='button'>Explore More</button>
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
  
  export default Hero;