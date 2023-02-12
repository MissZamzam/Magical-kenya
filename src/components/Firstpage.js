import React from "react"
import { Link, NavLink } from "react-router-dom"
// import Navbar from '../Navbar/Navbar'

function Firstpage(){
return(
    <>
        <div className="container-fluid">
            <div className="row move">
                <div className="col-md-6 d-flex align-items-center justify-content-center ">
                    <div className="text-center">
                    <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Kenya<br/></h1>
                    <NavLink to='/services'>
                        <button className="btn btn-outline-secondary text-white solutions-button mt-4">Our Solutions</button>
                    </NavLink>
                    </div>
                </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center my-4">
            <img src="https://i.pinimg.com/564x/0f/36/62/0f3662c7417e099b7398933f2a6dc7b6.jpg" alt="bike man"/>
            </div>
            </div>

            <div className="row text-center my-4 landing-text">
                <h1>About us</h1>
                <p className="first">An application where users can login to send packages.Just
                    <br></br>like Wells Fargo, Sendy etc.
                </p>
                <p className="font-12">Having a secure logistics provider you can trust is essential in today's fast paced business world.</p>
                <p className="font-12">In a world of increasingly demanding schedules,you need a partner who will help you achieve your goals. <br />A partner who understands your needs and provides you with efficient, <br/> reliable end to end logistical solutions that help you expand your business.</p>
            </div>
         

        </div>
    </>
)
}
export default Firstpage
