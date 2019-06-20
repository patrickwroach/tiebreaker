import React, { Component } from 'react';
import Question  from './components/Question';
import InputPair  from './components/InputPair';
 
class QuestionSection extends Component {
 render() {
    return (
      <div className="question-section">
       <Question/>
       <InputPair/>
      </div>
    )
  }
}

export default QuestionSection;
