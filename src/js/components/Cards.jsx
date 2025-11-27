import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <Card />
          </div>
          <div className="col mb-5">
            <Card />
          </div>
          <div className="col mb-5">
            <Card />
          </div>
          <div className="col mb-5">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
