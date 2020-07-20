import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter : 0
    }

    inc = () => {
        this.props.onincrementcounter();
    }

    dec = () => {
        this.props.ondecrementcounter();
    }

  render(){
    return (
      <div className="counter">
        <h1>counter : {this.props.ctr}</h1>
        <h1>Increment by 2 and decrement by 1.</h1>
        <button onClick={this.inc}>increment</button>
        <button onClick={this.dec}>decrement</button>
      </div>
    );
  }  
}

const mapstatetoprops = (state) => {
    return{
        ctr : state.counter
    }
}

const mapdispatchtoprops = (dispatch) => {
    return{
        onincrementcounter: () => dispatch({type : 'INC' , payload : 2}),
        ondecrementcounter: () => dispatch({type: 'DEC', payload : 1}),
    };
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Counter);