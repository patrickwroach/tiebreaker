import React, { Component } from 'react';
import Randomizer from 'react-randomizer';
 
class ResultsSection extends Component {
 
 render() {
    return (
      <div className="results-section">
          <h1>Player 1 is the winner y'all!</h1>
        { console.log(this.props.answers)}
       {/*    //<p> Player One answered: {this.props.answers.qOne.playerOne} </p>
         <p> Player Two answered: {this.props.answers.qOne.playerTwo} </p> */}
          <p>Please enjoy this random number:</p>
          <p>{Randomizer.randomNumber(1,100)}</p>
      </div>
    )
  }
}

export default ResultsSection;
