// import { Button } from 'bootstrap';
import './Hero.css'
import { NavLink } from "react-router-dom"
import { Tooltip } from 'bootstrap';


function Hero() {
    return (
      <div>
        <h1 id='text-centre' className='text-center'>Magical Kenya</h1>
        <p>Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands. It’s also home to wildlife like lions, elephants and rhinos. From Nairobi, the capital, safaris visit the Maasai Mara Reserve, known for its annual wildebeest migrations, and Amboseli National Park, offering views of Tanzania’s 5,895m Mt. Kilimanjaro. Located in the continent of Africa, Kenya covers 569,140 square kilometers of land and 11,227 square kilometers of water, making it the 49th largest nation in the world with a total area of 580,367 square kilometers. Kenya became an independent state in 1963, after gaining its sovereignty from The United Kingdom. The population of Kenya is 47,564,296 (2019) and the nation has a density of 76 people per square kilometer. The currency of Kenya is the Kenyan Shilling (KES). As well, the people of Kenya are refered to as Kenyan. The dialing code for the country is 254 and the top level internet domain for Kenyan sites is .ke. Kenya shares land borders with 5 countries: Tanzania, Sudan, Somalia, Ethiopia, Uganda.</p>
        <NavLink to='/faq'>
            <button className='button'>FAQ</button>
            </NavLink>  
        <p className='paragraphs'>Some Interesting Facts about Kenya</p>
<div class="wrapper">
  <div class="cards_wrap">
    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/564x/26/0f/38/260f38b7772ca3734dbf032d78175870.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            wildlife
          </div>
          <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
            
          </div>
          <div class="card_creator">
            <NavLink to='/wildlife'>
            <button className='button'>Explore More</button>
            </NavLink>          </div>
        </div>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
          <img src="https://i.pinimg.com/236x/2b/af/a0/2bafa029a0f5398c67e05782aee357f5.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Coastal Kenya
          </div>
          <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
           
          </div>
          <div class="card_creator">
            <NavLink to='/coast'>
            <button className='button'>Explore More</button>
            </NavLink>          </div>
        </div>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://pbs.twimg.com/media/EQ9jJqOXYAAzv5T.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Northern Kenya
          </div>
          <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
           
          </div>
          <div class="card_creator">
            <NavLink to='/north'>
            <button className='button'>Explore More</button>
            </NavLink>          </div>
        </div>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/originals/72/20/85/722085e667a311fedd82277504f0a335.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Nairobi city
          </div>
          <div class="card_info">
            <p class="title">A beautiful mix of natural and manmade attractions
</p>
           
          </div>
          <div class="card_creator">
            <NavLink to='/nairobi'>
            <button className='button'>Explore More</button>
            </NavLink>          </div>
        </div>
      </div>
    </div>
    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/564x/7c/e5/ef/7ce5efd2bf0590d31c96a96adf5c28d2.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            safaris
          </div>
          <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
            
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
        <img src="https://i.pinimg.com/564x/5b/da/4b/5bda4b0cbfeaeadc5058fef3b9ebf25d.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Diverse Culture
          </div>
          <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
          
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
        <img src="https://i.pinimg.com/564x/9e/d8/68/9ed868b537ccf9ba0deba6a54c1e31f4.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            National Parks & Reserves
          </div>
          <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
           
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
        <img src="https://i.pinimg.com/564x/33/5e/48/335e4882c9e986f70656a3d457689315.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Breath-Taking  Features
          </div>
          <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
           
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
</div>
    );
  }
  
  export default Hero;