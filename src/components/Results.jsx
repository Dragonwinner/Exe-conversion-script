import React from 'react'

function Results({ wpm, accuracy, onTryAgain, onNext }) {
  return (
    <div className="results-container">
      <h2>Results</h2>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Speed:</span>
          <span className="stat-value">{wpm} WPM</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Accuracy:</span>
          <span className="stat-value">{accuracy}%</span>
        </div>
      </div>
      <div className="results-actions">
        <button onClick={onTryAgain}>Try Again</button>
        <button onClick={onNext}>Next Snippet</button>
      </div>
    </div>
  )
}

export default Results
