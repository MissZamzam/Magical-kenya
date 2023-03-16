import "./Coastal.css";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";

const Buttons = () => {
  return (
    <div className="coastal-btn">
      <Navbar />
      <NavLink to="/hero">
        <h2 className="picha"> &#8592;</h2>
      </NavLink>
      <h1 className="paragraphs">Coastal Cities</h1>

      <p className="text-center">DREAMING OF A KENYA COAST BEACH VACATION?</p>
      <p className="text-center">
        East Africa's Kenya is a favourite "beach and bush" destination - with
        arguably the best safari destinations and the most perfect tropical
        beaches. The accommodation - whether bush or beach - ranges from rustic
        and adventurous to family-friendly, romantic honeymoon hideaways to
        lavish, exclusive luxury. Whether you want to simply relax after a
        safari or explore and experience the coastal attractions and water
        activities, Coastal Kenya has a place just for you.
      </p>

      <div className="container1">
        <div>
          <NavLink to="/lamu">
            <button className="btn btn1">Lamu</button>
          </NavLink>
          <NavLink to="/mombasa">
            <button className="btn btn2">Mombasa</button>
          </NavLink>
          <br></br>
          <NavLink to="/malindi">
            <button className="btn btn1">Malindi</button>
          </NavLink>
          <NavLink to="/mtwapa">
            <button className="btn btn4">Mtwapa</button>
          </NavLink>
          <NavLink to="/diani">
            <button className="btn btn2">Diani Beach</button>
          </NavLink>
        </div>
        <div>
          <section class="packages">
            <h3 class="title">Coast Popular activities</h3>
            <hr></hr>
            <p>
              We offer a variety of group (minimum 5 people) packages. Whether
              you've spent some summers together or this might be your first
              adventure, we've got the perfect vacation for you.
            </p>
            <hr></hr>

            <ul class="grid">
              <li>
                <FontAwesomeIcon icon={faShip} size="4x" color="green" />

                <h4>Water Sports</h4>
                <p>
                  The harbor and beach provide ideal conditions for diving,
                  snorkeling, and fishing enthusiasts; while the cities are home
                  to wildlife parks, beaches, and an abundance of restaurants
                  and bars to enjoy after your day out on the water. The beauty
                  of Mombasa has drawn tourists from all over Africa as well as
                  international visitors looking to explore this coastal city in
                  Kenya.
                </p>
              </li>
              <li>
                {/* <i class="fa fa-monument fa-4x"></i> */}
                <FontAwesomeIcon icon={faLandmark} size="4x" color="green" />
                <h4>Historical Sites</h4>
                <p>
                  The ruined city of Gedi is one of Kenya’s greatest mysteries.
                  Founded in the early 13th century deep into the thick forests
                  just outside Watamu, Gede was later completely abandoned, and
                  no one really knows why. A bit like a mini Angkor Wat, the
                  ruins at Gede are fascinating, with numerous coral-brick
                  houses, a palace, and even a mosque to visit.
                </p>
              </li>
              <li>
                <FontAwesomeIcon icon={faUtensils} size="4x" color="green" />

                <h4>Local Food</h4>
                <p>
                  Exploring the food of the Kenyan coast is a lesson in history.
                  The dishes are a mix of the many cultures of the region, from
                  the Bantu peoples to Islamic, Indian, and European influences.
                  To eat along the coast of Kenya is to learn its rich Swahili
                  past.
                </p>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faUmbrellaBeach}
                  size="4x"
                  color="green"
                />
                <h4>Coast Beaches</h4>
                <p>
                  Palm-lined shores, crystal-clear waters, coral reefs, and a
                  profusion of water sports, resorts, and entertainment venues
                  provide plenty of tourist action. The resorts are also closer
                  to the airport and Mombasa City.
                </p>
              </li>
            </ul>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Buttons;
