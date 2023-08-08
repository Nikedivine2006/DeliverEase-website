import React, { useState } from "react";
import "./PaymentSystem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"

function CurrentDay() {
  const date = new Date();
  const Day = date.getDay();
  const dayOfWeekString = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayOfWeekString[Day];
}

function getCurrentMonth() {
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const monthIndex = currentDate.getMonth();
  return monthsOfYear[monthIndex];
}

function getCurrentYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
}

function getMonthDate() {
  const CurrentDate = new Date();
  const CurrentMonthDay = CurrentDate.getDate();
  return CurrentMonthDay;
}

function getCurrentTimeOfDay() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the time to two digits if necessary
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return formattedTime;
}

function Payment({ CartItem, Prize }) {
  const [paypal, setPaypal] = useState(false);
  const [bank, setbank] = useState(true);

  const CurrentWeek = CurrentDay();
  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();
  const CurrentMonthDay = getMonthDate();
  const currentTimeOfDay = getCurrentTimeOfDay();

  const BankMode = () => {
    setbank(true);
    setPaypal(false);
  };

  const PaypalMode = () => {
    setbank(false);
    setPaypal(true);
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // console.log(dayOfWeekString);

  return (
    <div className="Payment-background">
      <div className="Payment container">
        <div className="inline-border">
          <nav>
            <h2>Select Payment Method</h2>
            <ul>
              <li className={bank ? "active" : undefined} onClick={BankMode}>
                Card Payment
              </li>
              <li
                className={paypal ? "active" : undefined}
                onClick={PaypalMode}
              >
                Paypal Payment
              </li>
            </ul>
          </nav>

          {paypal && <Paypal />}
          {bank && <Bank Prize={Prize}/>}
        </div>

        <div className="Order_Summary">
          <nav>
            <h2>Order Summary</h2>
          </nav>

          <div className="TotalPrice">
            <h3>Total</h3>
            <p>
              <span>$</span>
              {Prize}
            </p>
          </div>

          <div className="Des">
            <p>
              {truncate(
                "Thank You For Choosing DeliverEase. Please Make Sure you rate us 5 Stars and Leave a review. We would love it if you come back again!",
                120
              )}
            </p>
          </div>

          <ul>
            <h3>Your Foods</h3>
            <div className="d-flex">
              {CartItem.map((item) => (
                <li key={item.id}>
                  <p>
                    <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <h3>{truncate(item.foodName, 12)}</h3>
                  <h5>
                    <span>$</span>
                    {item.foodPrice}
                  </h5>
                </li>
              ))}
            </div>
          </ul>

          <div className="ticket">
            <h3>{CurrentWeek}</h3>
            <div>
              <p>
                {currentMonth} {CurrentMonthDay}, {currentYear}
              </p>
              |<span>{currentTimeOfDay}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paypal() {
  const [payForm, setPayForm] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayForm({ ...payForm, [name]: value });
  };

  const submit = () => {
    if (payForm.Email.trim() === "") {
      alert("Input Email");
    } else if (payForm.Password.trim() === "") {
      alert("Input Password");
    } else {
      alert("Sorry but Can't reach Paypal right now");
    }
  };
  return (
    <div className="Paypal">
      <div className="Login">
        <h2>Pay With Paypal</h2>
        <div className="Form">
          <div>
            <label>@ Email</label>
            <input
              type="email"
              name="Email"
              onChange={handleChange}
              autoComplete="on"
            />
          </div>

          <div>
            <label>? Password</label>
            <input type="password" name="Password" onChange={handleChange} />
          </div>

          <button onClick={submit}>PAY</button>
        </div>
      </div>
    </div>
  );
}

function Bank({Prize}) {
const navigate = useNavigate();


  const [Form, setForm] = useState({
    Name: "",
    Card: "",
    Phone: "",
    Month: "",
    Cvv: "",
  });


  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...Form, [name]: value });
  };

  const handleSubmitForm = () => {
    if (Form.Name.trim() === "" || Form.Name.length < 5) {
      alert("Please Enter your Card Name && Name must be greater than Five");
    } else if (Form.Card.length < 16) {
      alert("Card Number must be 16 Character");
    } else if (Form.Card.length > 16) {
      alert("Card Number must be 16 Character");
    } else if (Form.Phone.length < 11) {
      alert("Phone Number Must Be 11 characters");
    } else if (Form.Month.trim() === "") {
      alert("Input Your Expiring Date");
    } else if (Form.Cvv.length > 3) {
      alert("Your Card Cvv must be 3 in characters");
    } else if (Form.Cvv.length < 3) {
      alert("Your Card Cvv must be 3 in characters");
    } else {
         navigate("/OrderTracker")
         alert(`Payment Of $${Prize} Has been received Succefully`)
    }
  };

  return (
    <div className="Main-Card">
      <div className="Input">
        <div>
          <label>Name of Card</label>
          <input type="text" name="Name" onChange={handleChange} />
        </div>

        <div>
          <label>Card Number</label>
          <input
            type="Number"
            name="Card"
            placeholder="0000 - 0000 - 0000"
            onChange={handleChange}
          />
        </div>

        <div className="Date">
          <div>
            <label>Phone Number</label>
            <input type="number" name="Phone" onChange={handleChange} />
          </div>

          <div>
            <label>Month</label>
            <input type="month" name="Month" onChange={handleChange} />
          </div>

          <div>
            <label>Cvv</label>
            <input type="password" name="Cvv" onChange={handleChange} />
          </div>
        </div>

        <button onClick={handleSubmitForm}>PAY</button>
      </div>
    </div>
  );
}

export default Payment;
