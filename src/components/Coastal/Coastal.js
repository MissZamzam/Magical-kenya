import './Coastal.css'
import { NavLink } from 'react-router-dom';
import Footer from "../Footer/Footer"
import Navbar from '../Navbar/Navbar';

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
        <i class="fa fa-compass fa-4x"></i>
        <h4>Guided Trips</h4>
        <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
      </li>
      <li>
        <i class="fa fa-camera-retro fa-4x"></i>
        <h4>Photo Trips</h4>
        <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our <em>Life is a party!</em> buses.</p>
      </li>
      <li>
        <i class="fa fa-bicycle fa-4x"></i>
        <h4>Biking Trips</h4>
        <p>If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!</p>
      </li>
      <li>
        <i class="fa fa-flag-checkered fa-4x"></i>
        <h4>Racing Trips</h4>
        <p>Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit before any other group.</p>
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