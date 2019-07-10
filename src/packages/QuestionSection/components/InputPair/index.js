import React, { Component } from 'react';
 
class InputPair extends Component {
 render() {
    return (
        <div className="answers">
        <input placeholder="Player One"></input>
        <input placeholder="Player Two"></input>
        </div>
    )
  }
}

export default InputPair;