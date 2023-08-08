import React, {useState, useEffect} from "react";
import "./OrderTracker.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "../../Images/img.png"; // Replace with your custom icon path

const center = [40.712776, -74.005974]; // Center of New York
const zoomLevel = 10; // Adjust this value to fit the entire New York area

const customIcon = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [32, 32], // Replace with the actual size of your icon
  iconAnchor: [16, 32], // Replace with the anchor point of your icon
});

function MapWithMarker() {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const NewCountdown = new Date();
        NewCountdown.setDate(NewCountdown.getDate() + 2);
    
        const interval = setInterval(() => {
          const Now = new Date().getTime();
          const TimeLeft = NewCountdown - Now;
    
          if (TimeLeft < 0) {
            clearInterval(interval);
            setCountdown({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            });
          } else {
            const days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((TimeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((TimeLeft % (1000 * 60)) / 1000);
    
            setCountdown({
              days,
              hours,
              minutes,
              seconds,
            });
          }
        }, 1000);
      }, []);
  return (
    <>
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={center}
          zoom={zoomLevel}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} icon={customIcon}>
            <Popup>
              <div>
                <h4>My Location</h4>
                <p>Latitude: {center[0]}</p>
                <p>Longitude: {center[1]}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="tracker container">
        <div className="track">
            
        </div>
        <nav>
          <h1>Tracking Order...</h1>
          <div>
            <p>INVIOCE</p>:<span>12A47O</span>
          </div>
          <h2>Arrived in</h2>
          <div className="timer">
            <p>{countdown.days}:</p><p>{countdown.hours}:</p><p>{countdown.minutes}:</p><p>{countdown.seconds}</p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MapWithMarker;
