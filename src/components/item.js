import React from 'react';
import './item.css';

const item = function(props) {
  
    const addinit = function(){
        props.adding(props.myid);
    }

  return (
    <div className="item">
      <h1 className="name">{props.productname}</h1>
      <h2>{props.desc}</h2>
      <h2>MRP : <span className="cutit">{props.mrp}</span></h2>
      <h1>Our Price : <span className="ourp">{props.cost}</span></h1>
      <button className="add-btn" onClick={addinit}>Add to cart</button>
    </div>
  );
}

export default item;
