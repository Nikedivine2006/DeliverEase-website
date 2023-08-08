import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Body from "./Component/Body/Body";
import Form from "./Component/userLogin/Form";
import Dashboard from "./Component/Menu/Dashboard";
import Menu from "./Component/Menu/Food/menu";
import Payment from "./Component/PaymentSystem/paymentSystem";
import OrderTracker from "./Component/OrderTracker/OrderTracker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [Btn, setBtn] = useState("Sign Up");
  const [Username, setName] = useState("Sign Up");
  const [input, setInput] = useState({});
  const [CartItem, setCartItem] = useState([]);
  const [Prize, setPrize] = useState(0.0);
  const [Tax, setTax] = useState(0);
  // const [TotalPrice, setTotalPrice] = useState(0)

  const RemoveCartItem = (item) => {
    const UpdatededCart = CartItem.filter((cart) => {
      return cart.id !== item.id;
    });
    setCartItem(UpdatededCart);

    let NewTotal = 0;

    UpdatededCart.forEach((item) => {
      NewTotal += item.foodPrice;
    });

    setPrize(NewTotal + Tax - 2);
    setTax(Tax - 2);
    if (UpdatededCart.length === 0) {
      setPrize(0);
      setTax(0);
    }
  };
  return (
    <div>
      <Router>
        <Navbar Btn={Btn} setBtn={setBtn} CartItem={CartItem} />
        <Routes>
          <Route path="/" element={<Body UserName={Username} />} />
          <Route
            path="/UserLogin"
            element={
              <Form
                input={input}
                setInput={setInput}
                setName={setName}
                Username={Username}
                setBtn={setBtn}
              />
            }
          />
          <Route
            path="/Dashboard"
            element={
              <Dashboard
                user={Username}
                CartItem={CartItem}
                prize={Prize}
                Tax={Tax}
                RemoveCartItem={RemoveCartItem}
              />
            }
          />
          <Route
            path="/Menu"
            element={
              <Menu
                setCartItem={setCartItem}
                CartItem={CartItem}
                setPrize={setPrize}
                Tax={Tax}
                setTax={setTax}
              />
            }
          />

          <Route path="/payment-System" element={<Payment CartItem={CartItem} Prize={Prize}/>} />
          <Route path="/OrderTracker" element={<OrderTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// https://youtu.be/nW948Va-l10;
