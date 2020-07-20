import React from 'react';
import shopdata from '../shopdata';
import Item from './item';
import './items.css';

const items = function(props) {
  
    const addit = function(id){
        props.addtocart(id);
    }

  return (
    <div className="items">
      {shopdata.map((i) => {
          return <Item  productname={i.productname} desc={i.desc} mrp={i.mrp} cost={i.cost}
            key={i.id} myid={i.id} adding={addit}></Item>
      })}
    </div>
  );
}

export default items;
