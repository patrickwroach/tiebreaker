import React, { Component } from 'react';
 
class InputPair extends Component {
 render() {
    return (
        <div className="answers">
         <div className="player">
            <label>Player One</label>
            <input type="number" name="playerOne"  onChange={ this.props.handleAnswerChange }/>
          </div>
          <div className="player">
            <label>Player Two</label>
            <input type="number" name="playerTwo"  onChange={ this.props.handleAnswerChange }/>
          </div>
        </div>
    )
  }
}

export default InputPair;