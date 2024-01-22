import React, { Component } from "react";
import "../category/Card.css";
import Silder from "./Silder";
import { Card } from "./Card";

export default function Cards({data}) {

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div className="card_wrap" key={item.id}>
              <div>
                <Silder item={item} />
                <Card item={item} />
              </div>
            </div>
          );
        })}
    </>
  );
}
