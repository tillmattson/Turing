import React from 'react';

const LoadMoreAnswers = ({
  numOfAnswers,
  showMoreAnswers,
  answersDisplayed,
  totalAnswers,
  questionID,
}) => (
  <React.Fragment>
    {numOfAnswers !== 0 && answersDisplayed !== totalAnswers && (
      <button
        className='qaLoadMoreAnswers'
        type='button'
        onClick={() => {
          showMoreAnswers(questionID);
        }}
      >
        SEE MORE ANSWERS
      </button>
    )}
  </React.Fragment>
);

export default LoadMoreAnswers;

// && numOfAnswers !== totalAnswers
