import React, { useEffect, useState } from "react";
import "./Alert.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

function Alert({user}) {
  const [AlertBox, setAlert] = useState();


  const handleEvent = () => {
     setAlert(false)
  };

  useEffect(() => {
    setAlert(true);
    const AlertTimer = setInterval(() => {
      setAlert(false);
    }, 6000);


    return () => {
      clearInterval(AlertTimer);
    };
  }, []);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="Alert-box">
      {AlertBox && (
      <div
        className="Main-Alert container"
        id="Alert"
        onDoubleClick={handleEvent}>
        <div className="Alert-content">
          <h3>Are You hunry?</h3>
          <h2>Don't Wait!</h2>
          <p>Let's start to order food now</p>
          <Link to="UserLogin"><button>{truncate(user, 10)}</button></Link>
        </div>
        <div className="Alert-img"></div>
      </div>
       )}
    </div>
  );
}

export default Alert;
