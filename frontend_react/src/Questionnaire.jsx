import React, { useState } from 'react';

const questions = [
  { id: 'newMole', text: 'Have you noticed a new mole, bump, or spot on your skin?' },
  { id: 'changingSize', text: 'Has any existing mole changed in size?' },
  { id: 'itchy', text: 'Is the mole or spot itchy?' },
];

const Questionnaire = ({ onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted answers:', answers);
    if (onSubmit) onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Skin Health Questionnaire</h2>
      {questions.map(q => (
        <div key={q.id}>
          <label>{q.text}</label>
          <div>
            <label><input type="radio" name={q.id} value="Yes" onChange={() => handleChange(q.id, 'Yes')} /> Yes</label>
            <label><input type="radio" name={q.id} value="No" onChange={() => handleChange(q.id, 'No')} /> No</label>
            <label><input type="radio" name={q.id} value="Not Sure" onChange={() => handleChange(q.id, 'Not Sure')} /> Not Sure</label>
          </div>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Questionnaire;