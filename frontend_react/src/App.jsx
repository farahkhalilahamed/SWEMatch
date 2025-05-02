import React from 'react';
import Questionnaire from './Questionnaire';

function App() {
  const handleQuestionnaireSubmit = (answers) => {
    console.log("Answers submitted from App:", answers);
    // You can now POST to your backend here
  };

  return (
    <div>
      <Questionnaire onSubmit={handleQuestionnaireSubmit} />
    </div>
  );
}

export default App;