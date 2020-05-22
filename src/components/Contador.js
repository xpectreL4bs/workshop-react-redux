import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  render() {

    const { value, onAdd, onDecrease } = this.props;
    return (
      <div>
        <h2>Clicks: {value}</h2>
        <button onClick={onAdd}>Sumar</button>
        <button onClick={onDecrease}>Restar</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: ()=>dispatch({type:'SUMAR'}),
    onDecrease: ()=>dispatch({type: 'RESTAR'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
