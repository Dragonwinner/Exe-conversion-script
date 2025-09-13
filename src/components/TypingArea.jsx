import React from 'react'

function TypingArea({ snippet, userInput, onChange, isCompleted, inputRef }) {
  const renderSnippet = () => {
    return snippet.split('').map((char, index) => {
      let className = '';
      
      if (index < userInput.length) {
        className = userInput[index] === char ? 'correct' : 'incorrect';
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="typing-area">
      <div className="code-display">
        <pre>{renderSnippet()}</pre>
      </div>
      <textarea
        ref={inputRef}
        value={userInput}
        onChange={onChange}
        placeholder="Start typing here..."
        className={isCompleted ? 'completed' : ''}
        disabled={isCompleted}
      />
    </div>
  )
}

export default TypingArea
