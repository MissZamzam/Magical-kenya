import './Buttons.css'
import { NavLink } from 'react-router-dom';
const Buttons = () => {
    return (  
        <div className='container1'>
            <div>
                <NavLink to='/'>
                                <button className="btn btn1">home</button>

                </NavLink>

            <button className="btn btn2">Buttons</button>
            {/* <button className="btn btn3">Buttons</button> */}
            {/* <button className="btn btn4">Buttons</button> */}

            </div>
           <div>
           <button className="btn btn1">Buttons</button>
           <button className="btn btn4">Buttons</button>
            <button className="btn btn2">Buttons</button>

            {/* <button className="btn btn3">Buttons</button> */}
           </div>
        </div>
    );
}
 
export default Buttons;