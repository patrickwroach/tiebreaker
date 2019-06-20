import React from 'react';
import './App.css';
import QuestionSection  from './packages/QuestionSection';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Tiebreaker
        </p>
       </header>
       <QuestionSection />

       <QuestionSection />

       <QuestionSection />
    </div>
  );
}

export default App;
