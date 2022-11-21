import { Button } from 'bootstrap';
import './Hero.css'
import { NavLink } from "react-router-dom"


function Hero() {
    return (
      <div>
        <h1>Kenya</h1>
        <p>Kenya128px Coat of arms of Kenya Official.svg is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands. It’s also home to wildlife like lions, elephants and rhinos. From Nairobi, the capital, safaris visit the Maasai Mara Reserve, known for its annual wildebeest migrations, and Amboseli National Park, offering views of Tanzania’s 5,895m Mt. Kilimanjaro. Located in the continent of Africa, Kenya covers 569,140 square kilometers of land and 11,227 square kilometers of water, making it the 49th largest nation in the world with a total area of 580,367 square kilometers. Kenya became an independent state in 1963, after gaining its sovereignty from The United Kingdom. The population of Kenya is 47,564,296 (2019) and the nation has a density of 76 people per square kilometer. The currency of Kenya is the Kenyan Shilling (KES). As well, the people of Kenya are refered to as Kenyan. The dialing code for the country is 254 and the top level internet domain for Kenyan sites is .ke. Kenya shares land borders with 5 countries: Tanzania, Sudan, Somalia, Ethiopia, Uganda. To learn more, visit our detailed Kenya sections below.
   
        </p>

     <NavLink to='/content'>
      <button>Click Here To Learn More About Kenya</button>
     </NavLink>


      </div>
    );
  }
  
  export default Hero;