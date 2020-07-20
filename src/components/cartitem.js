import React from 'react';
import './cartitem.css';


const Cartitem = function(props){

    const incre = function(){
        props.increquest(props.myid)
    }

    const decre = function(){
        props.decrequest(props.myid)
    }

    const removerequest = function(){
        props.rmitem(props.myid);
    }

    return(
        <div className="cartitem">
            <h1>Product name : <span className="pname">{props.name}</span></h1>
            <h2>Quantity : {props.count}</h2>
            <h2>MRP : <span className="cutit">{props.mrp * props.count}</span></h2>
            <h1>Our price : <span className="green">{props.cost * props.count}</span></h1>
            <h3>saving : <span className="hil">{(props.mrp - props.cost) * props.count}</span></h3>
            <div className="btn2">
                <button className="cbtn rbtn" onClick={ incre }>+</button>
                <button  className="cbtn gbtn" onClick={ decre }>-</button>
            </div>
            <button className="rmbtn" onClick={removerequest}>Remove</button>
        </div>
    );
}

export default Cartitem;