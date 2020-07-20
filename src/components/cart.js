import React,{useState} from 'react';
import shopdata from '../shopdata';
import Cartitem from './cartitem';

import './cart.css';

const Cart = function(props){

    // eslint-disable-next-line
    const[totalcost,settotalcost] = useState(0);

    // eslint-disable-next-line
    const[totalmrp,settotalmrp] = useState(0);

    var cost = 0;
    var mrp = 0;

    props.idlist.map(i => {
        shopdata.map(j => {
            if(i.id === j.id){
                cost = cost + (j.cost * i.count);
                mrp = mrp + (j.mrp * i.count);
            }
        });
    });
    

    const buy = function(){
        alert("Thanks for shopping with us !!");
    }

    return(
        <div>
            <div className="checkout">
            <h1 className="red">Total MRP : {mrp}</h1>
            <h1 className="yellow">Total Saving : {mrp - cost}</h1>
            <h1 className="green">Total Payable : {cost}</h1>
            <button className="mbtn" onClick={buy}>Checkout and Pay</button>
            </div>
            {props.idlist.map(i => {
                return(shopdata.map(j => {
                    if(i.id == j.id){
                        return(<Cartitem name={j.productname} count={i.count} mrp={j.mrp} cost={j.cost} key={j.id} myid={j.id} increquest={(myid) => props.inccount(myid)} decrequest={(myid) => props.deccount(myid)} rmitem={(myid) => props.removeit(myid)}></Cartitem>);
                    }
                }))
            })}
        </div>
    );
}

export default Cart;