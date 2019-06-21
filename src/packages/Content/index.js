import React, { Component } from "react";
import QuestionSection from "../QuestionSection";
import ButtonSection from "../ButtonSection ";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      answered: false,
      buttonText:'Break Tie'
    };
    this.submitAnswers = this.submitAnswers.bind(this);
  }

  submitAnswers() {
    let answerStatus = this.state.answered;
    answerStatus = (answerStatus===false) ? true : false;
    let newButtonText = (answerStatus===false) ? 'Break Tie' : 'Reset';
    
    this.setState({
      answered: answerStatus,
      buttonText: newButtonText
    });
  }

  

  render() {
    return (
      <div className="content">
        <QuestionSection />
        <ButtonSection text={this.state.buttonText} handleClick={() => this.submitAnswers()}/>
      </div>
    );
  }
}

export default Content;
