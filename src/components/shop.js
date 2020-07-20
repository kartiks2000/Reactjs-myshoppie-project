import React,{ useState} from 'react';
import Items from './items';
import Cart from './cart';
import './shop.css';

const Shop = function() {
  
  const [cart,setcart] = useState([]); 

  const tocart = function(myid){
      var f=0;
      var temp = [...cart];
        temp.map((i) => {
            if(i.id == myid){
                i.count += 1;
                f=1;
            }
        });
        if(f==1){
            setcart(temp);
        }
        else{
            temp.push({
                id :  myid,
                count : 1
            });
            setcart(temp);
        }   

  }

  const decr = function(myid){
    var temp = [...cart];
    temp.map((i,idx) => {
        if(i.id == myid){
            if(i.count==1)
            {
                temp.splice(idx,1);
            }
            else{
                i.count -= 1;
            }
        }
    });
    setcart(temp);
  }

  const incr = function(myid){
      var temp = [...cart];
        temp.map((i,idx) => {
        if(i.id == myid){
            i.count += 1;
        }
    });
    setcart(temp);
  }

  const removing = function(myid){
    var temp = [...cart];
        temp.map((i,idx) => {
        if(i.id == myid){
            temp.splice(idx,1);
        }
    });
    setcart(temp);
  }

  const [opencart,setopencart] = useState(false);
  const [openshop,setopenshop] = useState(true);

  const openshopfn = function(){
    setopencart(false);
    setopenshop(true);
  }

  const opencartfn = function(){
    setopencart(true);
    setopenshop(false);
  }

  return (
    <div className="shop">
        <h1 className="myhead">MyShoppie...</h1>
      <div className="nav-btn">
        <button className="btn1" onClick={openshopfn}>shop</button>
        <button className="btn1" onClick={opencartfn}>mycart</button>
      </div>
      {openshop? <h1 className="shop-heading">Shop</h1> : <h1 className="shop-heading">My Cart</h1>}
      {openshop? <Items addtocart={tocart}></Items> : null}
      {opencart? cart.length<1? <h1>Your cart is empty....</h1> : <Cart idlist={cart} deccount={(myid) => decr(myid)} inccount={(myid) => incr(myid)} removeit={(myid) => removing(myid)}></Cart> : null}
    </div>
  );
}

export default Shop;
