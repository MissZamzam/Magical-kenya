import React from "react"
import { NavLink } from "react-router-dom"
import Footer from "../Footer/Footer"
import "./About.css"

function About(){
return(
    <>
        <div className="container-fluid">
            <div className="firstpage">
                <h1 className="beach">Beach to Forest</h1>
             <h1 className="caption">We Are Top Tourist <br></br> Guide Site <br></br> in Kenya<br/></h1>
                    <NavLink to='/hero'>
                        <button className="solutions-button">Discover Kenya</button>
                    </NavLink>
                    <p className="font">
                Kenya, country in East Africa famed for its scenic landscapes and vast wildlife preserves. Its Indian Ocean coast provided historically important ports by which goods from Arabian and Asian traders have entered the continent for many centuries. Along that coast, which holds some of the finest beaches in Africa, are predominantly Muslim Swahili cities such as Mombasa, a historic centre that has contributed much to the musical and culinary heritage of the country. Inland are populous highlands famed for both their tea plantations, an economic staple during the British colonial era, and their variety of animal species, including lions, elephants, cheetahs, rhinoceroses, and hippopotamuses. Kenya’s western provinces, marked by lakes and rivers, are forested, while a small portion of the north is desert and semidesert. The country’s diverse wildlife and panoramic geography draw large numbers of European and North American visitors, and tourism is an important contributor to Kenya’s economy.
                 </p>
                 
            </div>
            {/* <div className="row move">
                <div className="col-md-6 d-flex align-items-center justify-content-center ">
                    <div className="text-center">
                    <h1 className="caption">We Are Top Courier <br></br> and Mover Service <br></br> in Kenya<br/></h1>
                    <NavLink to='/hero'>
                        <button className="btn btn-outline-secondary text-white solutions-button mt-4">Discover the magic</button>
                    </NavLink>
                    </div>
                </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center my-4">
            <img src="https://i.pinimg.com/564x/19/bb/74/19bb7443ef0916cc1a67491cd844b48b.jpg" alt="bike man" className="lion-image"/>
            
            </div>
            </div>

            <div className="row text-center my-4 landing-text">
                <p className="font">
                Kenya, country in East Africa famed for its scenic landscapes and vast wildlife preserves. Its Indian Ocean coast provided historically important ports by which goods from Arabian and Asian traders have entered the continent for many centuries. Along that coast, which holds some of the finest beaches in Africa, are predominantly Muslim Swahili cities such as Mombasa, a historic centre that has contributed much to the musical and culinary heritage of the country. Inland are populous highlands famed for both their tea plantations, an economic staple during the British colonial era, and their variety of animal species, including lions, elephants, cheetahs, rhinoceroses, and hippopotamuses. Kenya’s western provinces, marked by lakes and rivers, are forested, while a small portion of the north is desert and semidesert. The country’s diverse wildlife and panoramic geography draw large numbers of European and North American visitors, and tourism is an important contributor to Kenya’s economy.
                 </p>
            </div> */}
         <Footer />

        </div>
    </>
)
}
export default About
