import React, { useState, useEffect } from "react";
import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingBasket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/Footer";

function Menu({ setCartItem, setPrize, CartItem, Tax, setTax }) {
  const [text, setText] = useState("");
  const [Menu, setMenu] = useState([]);

  useEffect(() => {
    setText(
      "DeliverEase: Satisfy your cravings with our mouthwatering " +
        "selection! Fast, fresh, and hassle-free food delivery. Explore a variety " +
        "of cuisines and enjoy doorstep service. Order now for a delightful dining experience!"
    );
  }, []);

  const Style = {
    backgroundImage:
      'url("https://media.istockphoto.com/id/145184857/photo/tuscan-pizza.jpg?s=612x612&w=0&k=20&c=5p2ctbmLMyNj3q3sVS7EgwnHo-LUcmjflRoyRqIioDw=")',
    backgroundSize: "80%",
    backgroundRepeat: "no-repeat",
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const addtoCart = (CartInfo) => {
    setCartItem((prevItem) => [...prevItem, CartInfo]);
    // const Total = (PrevPrize) => PrevPrize + CartInfo.foodPrice
  };

  useEffect(() => {
    // Calculate the total prize
    let total = 0;
    CartItem.forEach((item) => {
      total += item.foodPrice;
    });
    setPrize(total + Tax);
    setTax(15);
  }, [CartItem, Tax]);

  useEffect(() => {
    fetch("/MenuData.json")
      .then((response) => response.json())
      .then((data) => {
        console.table(data);
        setMenu(data);
      });
  }, []);

  return (
    <div>
      <div className="menu-banner">
        <div className="banner-content">
          <h2>Tasty Food</h2>
          <h1>Collections</h1>
          <p>{truncate(text, 200)}</p>
          <button>Start your Order</button>
        </div>

        <div className="Banner-img" style={Style}></div>
      </div>

      <div className="Main-menu">
        <nav>
          <h2>Popular Dishes</h2>
          <div className="search">
            <input type="search" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </div>
        </nav>
        <div className="d-flex">
          {Menu.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.foodImg} alt="" />
              <h2>{truncate(item.foodName, 10)}</h2>
              <h3>${item.foodPrice}.00</h3>
              <div className="Cart-btn" onClick={() => addtoCart(item)}>
                <div className="review">
                  <FontAwesomeIcon icon={faStar} className="icon" />
                  <span>{item.foodRating}</span>
                </div>
                <div className="btn">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Menu;
