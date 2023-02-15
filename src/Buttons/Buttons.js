import './Buttons.css'
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const Buttons = () => {
    return (  
        <div className='coastal-btn'>

            <h1 className="paragraphs">Coastal Cities</h1>
            <p className="text-center">DREAMING OF A KENYA COAST BEACH VACATION?</p>
            <p className='text-center'>East Africa's Kenya is a favourite "beach and bush" destination - with arguably the best safari destinations and the most perfect tropical beaches. The accommodation - whether bush or beach - ranges from rustic and adventurous to family-friendly, romantic honeymoon hideaways to lavish, exclusive luxury. Whether you want to simply relax after a safari or explore and experience the coastal attractions and water activities, Coastal Kenya has a place just for you.</p>

        <div className='container1'>   
        <div>
            <NavLink to='/lamu'>
                 <button className="btn btn1">Lamu</button>
            </NavLink>
            <NavLink to='/mombasa'>
                 <button className="btn btn2">Mombasa</button>
            </NavLink>
           <br></br>
            <NavLink to='/malindi'>
                <button className="btn btn1">Malindi</button>
            </NavLink>
            <NavLink to='/mtwapa'> 
                 <button className="btn btn4">Mtwapa</button>
            </NavLink>
            <NavLink to='/diani'>
                 <button className="btn btn2">Diani Beach</button>
            </NavLink>
           </div>

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
        
          <div class="card_creator">

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
        
          <div class="card_creator">

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
         
          <div class="card_creator">

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
       
          <div class="card_creator">

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
        
          <div class="card_creator">

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

        </div>
        
    );
}
 
export default Buttons;