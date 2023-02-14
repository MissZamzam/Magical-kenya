import './Buttons.css'
import { NavLink } from 'react-router-dom';
const Buttons = () => {
    return (  
        <div className='container1'>
            <div>
                <NavLink to='lamu'>
                                <button className="btn btn1">Lamu</button>

                </NavLink>

        <NavLink>
                        <button className="btn btn2">Mombasa</button>

        </NavLink>

            {/* <button className="btn btn3">Buttons</button> */}
            {/* <button className="btn btn4">Buttons</button> */}

            </div>
           <div>
            <NavLink>
           <button className="btn btn1">Malindi</button>
            </NavLink>
            <NavLink>
             <button className="btn btn4">Mtwapa</button>
            </NavLink>
            <NavLink>
             <button className="btn btn2">Diani Beach</button>

            </NavLink>

            {/* <button className="btn btn3">Buttons</button> */}
           </div>
        </div>
    );
}
 
export default Buttons;