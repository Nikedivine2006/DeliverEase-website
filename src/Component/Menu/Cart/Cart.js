import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import {
  faStar,
  faStarHalfStroke,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
function Cart({ CartItem, prize, Tax, RemoveCartItem }) {
  const [Card, setCard] = useState(0);

  const Info = [
    {
      image: "https://www.themealdb.com/images/category/chicken.png",
      price: 25.0,
      name: "Chicken",
    },

    {
      image: "https://www.themealdb.com/images/category/dessert.png",
      price: 60.0,
      name: "Dessert",
    },

    {
      image: "https://www.themealdb.com/images/category/lamb.png",
      price: 30.0,
      name: "Lamb",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCard((prev) => (prev + 1) % Info.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [Info.length]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="Main-Cart">
      <div className="Cart-card">
        <div>
          <img src={Info[Card].image} alt="" />
        </div>
        <div className="d-flex">
          <h3>{Info[Card].name}</h3>
          <p>${Info[Card].price}.00</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
        </div>
        <div className="btn">Add to Cart</div>
      </div>

      <div className="Cart">
        <nav>
          <h2>My Cart:</h2>
        </nav>
        <div className="Carts">
          {CartItem.map((item, index) => (
            <div className="Cart-Item" key={index}>
              <div className="Cart-img">
                <img src={item.foodImg} alt="" />
                <h2>{truncate(item.foodName, 7)}</h2>
              </div>

              <div className="Cart-price">
                <p>
                  <span>$</span>
                  {item.foodPrice}.00
                </p>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                  onClick={() => RemoveCartItem(item)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="Checkout">
          <div className="Tax">
            <h3>Service Tax</h3>
            <p>
              + <span>$</span>
              {Tax}
            </p>
          </div>
          <div className="totalPrize">
            <h3>Total</h3>
            <p>
              <span>$</span>
              {prize}
            </p>
          </div>

          <Link to="/payment-System"><div className="btn">Checkout</div></Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
