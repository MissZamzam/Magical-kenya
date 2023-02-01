// import { Button } from 'bootstrap';
import './Hero.css'
import { NavLink } from "react-router-dom"
// import { Tooltip } from 'bootstrap';


function Hero() {
    return (
      <div>
        <h1 className='paragraphs'>Magical Kenya  </h1>
        <p>Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands. It’s also home to wildlife like lions, elephants and rhinos. From Nairobi, the capital, safaris visit the Maasai Mara Reserve, known for its annual wildebeest migrations, and Amboseli National Park, offering views of Tanzania’s 5,895m Mt. Kilimanjaro. Located in the continent of Africa, Kenya covers 569,140 square kilometers of land and 11,227 square kilometers of water, making it the 49th largest nation in the world with a total area of 580,367 square kilometers. Kenya became an independent state in 1963, after gaining its sovereignty from The United Kingdom. The population of Kenya is 47,564,296 (2019) and the nation has a density of 76 people per square kilometer. The currency of Kenya is the Kenyan Shilling (KES). As well, the people of Kenya are refered to as Kenyan. The dialing code for the country is 254 and the top level internet domain for Kenyan sites is .ke. Kenya shares land borders with 5 countries: Tanzania, Sudan, Somalia, Ethiopia, Uganda.</p>
        <NavLink to='/faq'>
            <button className='button'>FAQ</button>
            </NavLink>  
        <p className='paragraphs'>Interesting Facts about Kenya</p>

<div class="wrapper">
  <div class="cards_wrap">

    <div class="card_item">
      <div class="card_inner">
        <div class="card_top">
        <img src="https://i.pinimg.com/564x/c5/33/47/c53347580119d787b0a08f669cfa1761.jpg" alt="car" />
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
          <img src="https://i.pinimg.com/564x/c4/b5/f3/c4b5f354da2fd2a4ad62f9b50e71be6c.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Coastal Kenya
          </div>
          {/* <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
           
          </div> */}
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
        <img src="https://i.pinimg.com/564x/18/79/83/187983487c2a6f1b4cd7fe2a809e9649.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Northern Kenya
          </div>
          {/* <div class="card_info">
            <p class="title">10 Best Things about Travel</p>
           
          </div> */}
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
        <img src="https://i.pinimg.com/564x/45/48/c6/4548c6d44cebd1917667a74ea7df4ed5.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Nairobi city
          </div>
          {/* <div class="card_info">
            <p class="title">A beautiful mix of natural and manmade attractions</p>
           
          </div> */}
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
        <img src="https://i.pinimg.com/564x/f6/71/d1/f671d17b6393a922e4fe959cec5f9a23.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            safaris
          </div>
          {/* <div class="card_info">
          <p class="title">A beautiful mix of natural and manmade attractions</p>
            
          </div> */}
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
        <img src="https://i.pinimg.com/564x/a5/13/1f/a5131f82b596703bb90c553cfdd12bb2.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Diverse Culture
          </div>
          {/* <div class="card_info">
          <p class="title">A beautiful mix of natural and manmade attractions</p>
          
          </div> */}
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
        <img src="https://i.pinimg.com/564x/e1/b9/0d/e1b90da353281892312a53585a3a1cc0.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            National Parks & Reserves
          </div>
          {/* <div class="card_info">
          <p class="title">A beautiful mix of natural and manmade attractions</p>
           
          </div> */}
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
        <img src="https://i.pinimg.com/564x/68/64/d0/6864d0ed10b64e5d784ebd7f859602ff.jpg" alt="car" />
        </div>
        <div class="card_bottom">
          <div class="card_category">
            Breath-Taking  Features
          </div>
          {/* <div class="card_info">
          <p class="title">A beautiful mix of natural and manmade attractions</p>
           
          </div> */}
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