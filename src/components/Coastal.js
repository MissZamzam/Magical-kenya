// import { NavLink } from "react-router-dom"


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
                    Lamu          </div>
          <div class="card_info">
            <p class="title">Historic touristic town at North coast</p>
            <p>
            Lamu is vastly different from most cities in Kenya, most particularly due to the almost complete lack of motor vehicles and corresponding traffic.             </p>
          </div>
          <div class="card_creator">
            <a href="https://en.wikivoyage.org/wiki/Lamu">
            <button className='button'>Learn Something About Lamu</button>
            </a>
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