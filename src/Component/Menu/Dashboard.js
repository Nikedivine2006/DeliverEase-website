import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateLeft,
  faArrowRightFromBracket,
  faMailBulk,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import bannerImg from "../../Images/delivery avatar.png";
import saladIcon from "../../Images/saladIcon.png";
import hamburgarIcon from "../../Images/hamburgarIcon.png";
import pizzaIcon from "../../Images/pizzaIcon.png";
import hotdogIcon from "../../Images/hotdogIcon.png";
import icecreamIcon from "../../Images/icecreamIcon.png";
import sea_foodIcon from "../../Images/sea foodIcon.png";
import chickenIcon from "../../Images/chickenIcon.png";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";

function Dashboard({ user, CartItem, prize, Tax, TotalPrice, RemoveCartItem }) {
  const props = CartItem;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
    <div className="Main-Menu container">
      <div className="component">
        <nav>
          <div className="user">
            <h3>Hello {truncate(user, 10)}! 😋</h3>
            <p>Want do you want to Eat</p>
          </div>
          <div className="info">
            <div className="icon">
              <FontAwesomeIcon icon={faMailBulk} alt="" />
              <FontAwesomeIcon icon={faBell} alt="" />
            </div>

            <div className="Account">
              <div className="img">{/* <img src={avatar} alt="" /> */}</div>

              <div className="Log">
                <k>{truncate(user, 10)}</k>
                <i>Account</i>
              </div>
            </div>
          </div>
        </nav>

        <div className="banner">
          <div className="Banner-contect">
            <h2>Order Now to be Discount Upto 50%</h2>
            <button>Get Coupon</button>
          </div>

          <div className="Banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>

        <Categories />
      </div>
      <div className="cart">
        <Cart
          CartItem={props}
          prize={prize}
          Tax={Tax}
          TotalPrice={TotalPrice}
          RemoveCartItem={RemoveCartItem}
        />
      </div>
    </div>
    </>
  );
}

function Categories() {
  return (
    <div className="">
      <div className="List">
        <nav>
          <p>Menu Categories</p>
          <span>
            View More
            <FontAwesomeIcon icon={faArrowRotateLeft} className="icon" />
          </span>
        </nav>
        <ul>
          <li className="foodIcon">
            <img src={saladIcon} alt="" />
            <span>Salad</span>
          </li>

          <li className="foodIcon">
            <img src={hamburgarIcon} alt="" />
            <span>Burgar</span>
          </li>

          <li className="foodIcon">
            <img src={pizzaIcon} alt="" />
            <span>Pizza</span>
          </li>

          <li className="foodIcon">
            <img src={hotdogIcon} alt="" />
            <span>Hot-dog</span>
          </li>

          <li className="foodIcon">
            <img src={icecreamIcon} alt="" />
            <span>Ice-Cream</span>
          </li>

          <li className="foodIcon">
            <img src={sea_foodIcon} alt="" />
            <span>Sea Food</span>
          </li>

          <li className="foodIcon">
            <img src={chickenIcon} alt="" />
            <span>Chicken</span>
          </li>
        </ul>
      </div>

      <div className="Dish">
        <h2>Popular Dishes</h2>

        <div className="d-flex">
          <div className="col">
            <img
              src="https://media.istockphoto.com/id/1454741285/photo/roast-fish-and-vegetable-salad-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Slmk-RLvdR3317E5W2UKLul4y1ZH3axjL2XCNOBZbhE="
              alt=""
            />

            <div className="col-content">
              <p>salad</p>
              <span>4.8</span>
            </div>
          </div>
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
            />

            <div className="col-content">
              <p>Hamburgar</p>
              <span>5.9</span>
            </div>
          </div>
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />

            <div className="col-content">
              <p>Fires</p>
              <span>7.0</span>
            </div>
          </div>
          <div className="col">
            <img
              src="https://media.istockphoto.com/id/476129308/photo/homemade-organic-vanilla-ice-cream.jpg?s=612x612&w=0&k=20&c=JKeIuqhMqzYi94HQc2KET9aHk5WaWIIuBmN_mX-z8D0="
              alt=""
            />

            <div className="col-content">
              <p>Ice-Cream</p>
              <span>8.0</span>
            </div>
          </div>
          {/* <div className="col"></div>
            <div className="col"></div> */}
        </div>

        <div className="ActiveLink">
          <Link to="/Menu">
            <a href="/">
              Check Out Menu <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
