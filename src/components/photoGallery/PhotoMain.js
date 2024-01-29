import React from "react";
import "./PhotoMain.css";
import Photos from "./Photos";
import { Link } from "react-router-dom";
export default function PhotoMain() {
  return (
    <div>
      <div className="photos-text">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#"> \ Gallery</a>
          </li>
        </ul>
      </div>
      <div className="photo-title">
        <h3>Our Photo Gallery</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          excepturi fuga nemo vitae possimus repellat, praesentium temporibus
          officiis, accusamus, labore nostrum aspernatur dolore voluptatibus
          nesciunt placeat error odio atque ea.
        </p>
      </div>
      <Photos />
    </div>
  );
}
