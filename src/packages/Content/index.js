import React, { Component } from "react";
import QuestionSection from "../QuestionSection";
import SubmitButton from "../SubmitButton";
import ResultsSection from "../ResultsSection";
import Randomizer from 'react-randomizer';

class Content extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      answered: false,
      buttonText:'Break Tie',
      answers: {
        qQne: { 
          highWins: 1,
          playerOne: 0,
          playerTwo: 0
         },
      }
    };
    this.state = this.initialState;
    this.submitAnswers = this.submitAnswers.bind(this);
    this.resetTieBreaker =this.resetTieBreaker.bind(this);
    this.setHighOrLow =this.setHighOrLow.bind(this);
  }

  setHighOrLow() {
    let randomizedHighWins = this.state.answers.qQne.highWins;
    randomizedHighWins = Randomizer.randomNumber(0,1);
    this.setState({
      answers:{
        qQne:{
        highWins:randomizedHighWins
        }
      }
    })
 
  }

  clickFunctionSplitter() {
    if (this.state.answered === false){
      this.setHighOrLow();
      this.submitAnswers();
    } else{
      this.resetTieBreaker();
    }
  }

  submitAnswers() {
    const answerStatus = true;
    const newButtonText = 'Reset';

    this.setState({
      answered: answerStatus,
      buttonText: newButtonText
    });
  }

  resetTieBreaker() {
    this.setState(this.initialState);
  }

  displayedContent = () => {
    if (this.submitAnswers === true){
      return <ResultsSection />;
    }else {
      return <QuestionSection />;
    }
  }

  
  render() {
    let displayedContent;

    if (this.state.answered) {
      displayedContent= <ResultsSection />;
    } else {
      displayedContent = <QuestionSection />
      ;
    }

    return (
      <div className="content">
        {displayedContent}
        <div className="button-wrapper">
          <SubmitButton  text={this.state.buttonText} handleClick={() => this.clickFunctionSplitter()}/>
        </div>
      </div>
    );
  }
}

export default Content;
