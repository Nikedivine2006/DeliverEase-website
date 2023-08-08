import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import img from '../../Images/food3.avif';

function Form({ input, setInput, Username, setName, setBtn }) {
  const [userForm, setForm] = useState({
    Email: "",
    PassWord: "",
  });

  const navigate = useNavigate();

  const handleUser = (event) => {
    setName(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...userForm, [name]: value });
  };

  const handleSubmit = () => {
    if (userForm.Email.trim() === "") {
      alert("input Email");
      return;
    } else if (userForm.PassWord.trim() === "") {
      alert("Input Password");
    } else {
      alert("Sign Up Successful");
      setBtn(`Welcome ${Username}`);
      navigate('/Dashboard')
      
    }
  };

  const [slideImg, setSlideImg] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
    "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80",
    "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideImg((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="Main-Form container">
      <div className="Card">
        <img src={images[slideImg]} alt={`Slide ${slideImg + 1}`} />
      </div>

      <div className="Form">
        <div className="name">
          <label>Full Name</label>
          <input
            type="text"
            required
            autoComplete="off"
            onChange={handleUser}
          />

          <div className="Email">
            <label>E-mail</label>
            <input
              type="Email"
              name="Email"
              required
              onChange={handleChange}
              autoComplete="on"
            />
          </div>

          <div className="password">
            <label>Password</label>
            <input
              type="Password"
              name="PassWord"
              required
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>

        {/* <Link to="/Dashboard"> */}
          <button onClick={handleSubmit}>Sign Up</button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Form;
