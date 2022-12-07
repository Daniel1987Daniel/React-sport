import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src="https://trackandfieldnews.com/wp-content/uploads/2020/06/flanagan2-01-09-feat.jpg" className="card-image" alt="winner" height={250} />
      <div className="card--stats">
        <img src="https://i.stack.imgur.com/YFUnZ.jpg"  alt="star" width={10}></img>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) * </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold"><b>From ${props.price}</b></span> / person
      </p>
    </div>
  )
};