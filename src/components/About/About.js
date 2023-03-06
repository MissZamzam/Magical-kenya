import React from "react"
import { NavLink } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./About.css"

function About(){
return(
    <>
        <div className="container-fluid">
            {/* <Navbar />
            <NavLink to='/'>
            <h2 className='picha'> &#8592;</h2>
          </NavLink>
      
            <div className="firstpage">
            <h1 className="about-us">About Us</h1> 
            


            

                <h1 className="beach">Beach to Forest</h1>
             <h1 className="caption">We Are Top Tourist <br></br> Guide Site <br></br> in Kenya<br/></h1>
                   
                    <p className="font">
                        Beach to Forest is for those people who do not simply
                        wish for a 'superficial' stereotyped relationship with popular urban destinations, but who
                        seek deeper knowledge of culture, the actual lifestyle, pace and true character of a city.
                        Our curated attractions combine all the elements needed to attract the demanding visitor.
                        Founded locally, The Beach to Forset team guarantees you an
                        unrivalled Kenyan travel experience. We want to offer our clients
                        an unforgettable adventure into Kenya.Whether travelling as a couple, a family, a group or individual, we satisfy your needs and personalities, because
                        our destinations offer a range from high-end luxury to more
                        affordable options
                 </p>
                 <NavLink to='/hero'>
                        <button className="solutions-button">Discover Kenya</button>
                    </NavLink>
                 
            </div>
             */}

             <div>
          <Navbar />

  <section class="hero">
    <div class="background-image"></div>
    <div class="hero-content-area">
      <h1>Life is a party!</h1>
      <h3>Unmissable Adventure Tours With Beach to Forest</h3>

             <NavLink to='/hero'>
                      <a href="#" class="btn">Discover Kenya</a>

             </NavLink>


    </div>
  </section>

  <section class="destinations">
    <h3 class="title">Some of our destinations:</h3>
    <p>Tired of the beach alone? Are the plains too plain? Come along with us on one of our unusual adventures with yout friends. Here are some pictures from people who have had elevated experiences with us.</p>
    <hr></hr>

    <ul class="grid">
      <li class="small image-1"></li>
      <li class="large image-2"></li>
      <li class="large image-3"></li>
      <li class="small image-4"></li>
    </ul>
  </section>

  <section class="packages">
    <h3 class="title">Tour Packages</h3>
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

  {/* <section class="testimonials">
    <h3 class="title">Testimonials from our adventurers:</h3>
    <hr></hr>
    <p class="quote">Wow! This tour made me realize how much I love being outside with my friends. After going on one of these tours, I can safely say that beer pong is my favorite game all time, also the cultural programs were really interesting!</p>
    <p class="author">- Albert Herter</p>
    <p class="quote">Wow, this really blew my mind. We had so much fun at the beach, and also some hidden secrets revealed. Come on, I'm living in this city for 5 years. Amazing!</p>
    <p class="author">- Sharon Rosenberg</p>
    <p class="quote">If you want to understand your friends better, head to the mountains. I mean, seriously. It's like sitting next to a campfire and just talk in the sunset, woah. You know? It's like that.</p>
    <p class="author">- Luis Mendoza</p>
  </section> */}
{/* 
  <section class="contact">
    <h3 class="title">Learn more</h3>
    <p>Want to know about our upcoming events, or come to one of our mixers? Just sign up for our mailing list. No spam from us, we promise! Except for the spam we give you to keep up your energy while you're having fun with your friends. Have a blast! We have tons of that.</p>
    <hr></hr>
    <form>
      <input type="email" placeholder="Email" />
      <a href="#" class="btn">Subscribe now</a>
    </form>
  </section> */}



             </div>

             
         <Footer />

        </div>
    </>
)
}
export default About
