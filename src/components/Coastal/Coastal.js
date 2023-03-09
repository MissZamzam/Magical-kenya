import './Coastal.css'
import { NavLink } from 'react-router-dom';
import Footer from "../Footer/Footer"
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';




const Buttons = () => {
    return (  
        <div className='coastal-btn'>
          <Navbar />
          <NavLink to='/hero'>
            <h2 className='picha'> &#8592;</h2>
          </NavLink>
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
      <div>

  <section class="packages">
    <h3 class="title">Coastal Packages</h3>
    <hr></hr>
    <p>We offer a variety of group (minimum 5 people) packages. Whether you've spent some summers together or this might be your first adventure, we've got the perfect vacation for you.</p>
    <hr></hr>

    <ul class="grid">
      <li>
        <i class="fa fa-ship fa-4x"></i>
        <h4>Boat Activity</h4>
        <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
      </li>
      <li>
      {/* <i class="fa fa-monument fa-4x"></i> */}
      <FontAwesomeIcon icon={faLandmark} size="4x" color="green"/>
                          <h4>Historicla Landmarks</h4>
        <p>The ruined city of Gedi is one of Kenya’s greatest mysteries. Founded in the early 13th century deep into the thick forests just outside Watamu, Gede was later completely abandoned, and no one really knows why. A bit like a mini Angkor Wat, the ruins at Gede are fascinating, with numerous coral-brick houses, a palace, and even a mosque to visit.

</p>
      </li>
      <li>
      <FontAwesomeIcon icon={faUtensils} size="4x" color="green" />

        <h4>Local Food</h4>
        <p>If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!</p>
      </li>
      <li>
      <FontAwesomeIcon icon={faUmbrellaBeach} size="4x" color="green" />
        <h4>Coast Beaches</h4>
        <p>Palm-lined shores, crystal-clear waters, coral reefs, and a profusion of water sports, resorts, and entertainment venues provide plenty of tourist action. The resorts are also closer to the airport and Mombasa City.</p>
      </li>
    </ul>
  </section>
      </div>

   
           <Footer />
        </div>

        </div>
        
    );
}
 
export default Buttons;