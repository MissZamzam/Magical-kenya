import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./About.css";

function About() {
  return (
    <>
      <div className="container-fluid">
       
        <div>

          <section class="hero">
            <div class="background-image"></div>
            <div class="hero-content-area">
              <h1> Magical Kenya</h1>
              <h3>Unmissable Adventure Tours!</h3>
              <NavLink to="/hero">
                <a href="#" class="btn">
                  Discover Kenya
                </a>
              </NavLink>
            </div>
          </section>

          <section class="destinations">
            <h3 class="title">Some of our destinations:</h3>

            <p>
              {" "}
              This is for those people who do not simply wish for a
              'superficial' stereotyped relationship with popular urban
              destinations, but who seek deeper knowledge of culture, the actual
              lifestyle, pace and true character of a country. Our curated
              attractions combine all the elements needed to attract the
              demanding visitor.
            </p>
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
            <p>
              We offer a variety of group (minimum 5 people) packages. Whether
              you've spent some holiday together or this might be your first
              adventure, we've got the perfect vacation for you.
            </p>
            <hr></hr>

            <ul class="grid">
              <li>
                <i class="fa fa-compass fa-4x"></i>
                <h4>Guided Trips</h4>
                <p className="grid__icon">
                  Looking for the complete experience? Take a tour with us.
                  We'll show you secrets that you're likely to miss otherwise.
                </p>
              </li>
              <li>
                <i class="fa fa-camera-retro fa-4x"></i>
                <h4>Photo Trips</h4>
                <p>
                  Want to experience nature's beauty without all of that
                  annoying exercise? Take a photo tour on one of our{" "}
                  <em>Life is a party!</em> buses.
                </p>
              </li>
              <li>
                <i class="fa fa-bicycle fa-4x"></i>
                <h4>Biking Trips</h4>
                <p>
                  If bicycles are more your speed, consider taking a tour
                  through one of our mountain or city bike paths. We'll provide
                  the bikes, and lunch too!
                </p>
              </li>
              <li>
                <i class="fa fa-flag-checkered fa-4x"></i>
                <h4>Racing Trips</h4>
                <p>
                  Got a competitive spirit? Sign up for one of our
                  challenge-based marathons! Try to reach the summit before any
                  other group.
                </p>
              </li>
            </ul>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default About;
