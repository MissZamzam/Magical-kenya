import './Buttons.css'
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const Buttons = () => {
    return (  
        <div>

            <h1 className="paragraphs">Coastal Cities</h1>
            <p className="text-center">DREAMING OF A KENYA COAST BEACH VACATION?</p>
            <p className='text-center'>East Africa's Kenya is a favourite "beach and bush" destination - with arguably the best safari destinations and the most perfect tropical beaches. The accommodation - whether bush or beach - ranges from rustic and adventurous to family-friendly, romantic honeymoon hideaways to lavish, exclusive luxury. Whether you want to simply relax after a safari or explore and experience the coastal attractions and water activities, Coastal Kenya has a place just for you.
</p>

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
           <Footer />
        </div>

        </div>
        
    );
}
 
export default Buttons;