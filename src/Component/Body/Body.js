import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import Alert from "../Alert/Alert";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../Images/avatar.png";
import pizza from "../../Images/pizza.avif";
import img1 from "../../Images/easy to order.png";
import img2 from "../../Images/delivery.png";
import img3 from "../../Images/best Quality.png";
import Banner from "../../Images/banner1.jfif";

function Body({UserName}) {

  return (
    
    <div className="Banner container">
      <div className="d-flex">
        <div className="Banner_contect">
          <div className="BannerNav">
            <p>More Than Food 🍒</p>
          </div>

          <h2>
            Be The Fastest In Delivering your <span>Food</span>
          </h2>
          <h3>
            All Job is to fill your tummy With delicious Food and with fast and
            free food delivery
          </h3>

          <div className="Banner-Btn">
            <button>Get Started</button>
            <button className="Btn">
              <FontAwesomeIcon icon={faPlay} className="Icon" />
              Watch Video
            </button>
          </div>
        </div>

        <div className="Banner_Image">
          <div className="Img"></div>
          <div className="Btn">
            <img src={avatar} alt="" />
            <div>
              <span>Richard Miles</span>
              <p>Food Cooker</p>
            </div>
            <FontAwesomeIcon icon={faPhone} className="Icon" />
          </div>

          <div className="Alert">
            <div>
              <img src={pizza} alt="" />
            </div>

            <div>
              <h3>Italian Pizza</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </li>
              </ul>

              <div className="prize">
                <span>$</span>
                <p>7.49</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert user={UserName}/>

      <Body1 />
      <Body2 />
      <Body3 />
      <Footer />
    </div>
  );
}

function Body1() {
  return (
    <div className="Serve">
      <div className="Order-header">
        <p>WHAT WE SREVE</p>
        <h2>Your Favourite Food Delivery partner</h2>
      </div>

      <div className="d-flex">
        <div className="Serve-Icon">
          <img src={img1} alt="" />
          <h2>Easy To Order</h2>
          <p>You only need a few stop to order your food</p>
        </div>

        <div className="Serve-Icon">
          <img src={img2} alt="" />
          <h2>Fast Delivering</h2>
          <p>Delivering that is alway on time with fast delivery</p>
        </div>

        <div className="Serve-Icon">
          <img src={img3} alt="" />
          <h2>Best Quality</h2>
          <p>Not only fast for us but also number one</p>
        </div>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="Body2">
      <div className="Body-Banner-2">
        <img src={Banner} alt="" />
      </div>

      <div className="Body-Banner-contect">
        <h5>What They Say</h5>
        <h2>What Our Customers Say about Us</h2>
        <p>
          "DeliverEase exceeded my expectations with lightning-fast deliveries
          and a diverse menu selection. Their service made dining at home
          delightful!" 🚀🍔🍕🥳😋🍒
        </p>
        <div className="review">
          <img src={avatar} alt="" />
          <div>
            <p>Tenson mira</p>
            <span>Food Enthusiast</span>
          </div>
        </div>

        <div className="review-star">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span>4.8</span>
        </div>
      </div>
    </div>
  );
}

function Body3() {
  return <div className="Body-App"></div>;
}

export default Body;
