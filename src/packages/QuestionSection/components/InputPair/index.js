import React, { Component } from 'react';
 
class InputPair extends Component {
 render() {
    return (
        <div className="answers">
          <label>Player One</label>
          <input type="number" name="playerOne"/>
          <label>Player Two</label>
          <input type="number" name="playerTwo"/>
        </div>
    )
  }
}

export default InputPair;