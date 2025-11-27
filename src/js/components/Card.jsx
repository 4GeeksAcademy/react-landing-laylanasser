import React from "react";

const Card = () => {
  return (
    <>
    <div className="card h-100">
      <img
        className="card-img-top"
        src="https://picsum.photos/500/325.jpg"
        alt="Card"/>
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Click
        </a>
      </div>
    </div>
    </>
  );
};

export default Card;
