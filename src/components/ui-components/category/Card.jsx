import React, { Component } from "react";

import { MdOutlineNavigateNext } from "react-icons/md";
import './Cards.css';
import { GrFormPrevious } from "react-icons/gr";
import { FaVideo } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import Silder from "./Silder";

export default function Card(props) {
  console.log(props.mockData);

  return (
    <>
      {props.mockData &&
        props.mockData.map((item) => {
          return (
            <div className="card_wrap" key={item.id}>
              <div>
                <Silder item={item} />
                <div class="card_text">
                  <p className="rate">
                    <span className="current-rate">{item.currentRate}</span>
                    <span className="prev-rate">{item.prevRate}</span>
                  </p>
                  <div>
                    <p className="delivery_date">check delivery date</p>
                  </div>
                  <div className="about">{item.title}</div>
                  <ul className=" home_try">
                    <li className="tried">
                      <a href="#">try at home</a>
                    </li>
                    <li className="video">
                      <a href="#">
                        <FaVideo />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
