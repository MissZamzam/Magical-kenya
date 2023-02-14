import './Buttons.css'
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const Buttons = () => {
    return (  
        <div>

            <h1 className="paragraphs">Coastal Cities</h1>
            <p className="text-center">DREAMING OF A KENYA COAST BEACH VACATION?</p>
            <p className='text-center'>dtrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>
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