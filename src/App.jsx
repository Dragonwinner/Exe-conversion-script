import { useState, useEffect, useRef } from 'react'
import './App.css'
import { dsaSnippets } from './data/dsaSnippets'
import Header from './components/Header'
import TypingArea from './components/TypingArea'
import Results from './components/Results'
import SnippetSelector from './components/SnippetSelector'

function App() {
  const [currentSnippet, setCurrentSnippet] = useState(dsaSnippets[0])
  const [input, setInput] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [currentCategory, setCurrentCategory] = useState('all')
  const [isCompleted, setIsCompleted] = useState(false)
  
  const inputRef = useRef(null)

  const selectSnippet = (snippet) => {
    setCurrentSnippet(snippet)
    setInput('')
    setStartTime(null)
    setEndTime(null)
    setWpm(0)
    setAccuracy(100)
    setIsCompleted(false)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    
    if (!startTime && value.length > 0) {
      setStartTime(new Date())
    }
    
    setInput(value)
    
    // Calculate accuracy
    let correctChars = 0
    const minLength = Math.min(value.length, currentSnippet.content.length)
    
    for (let i = 0; i < minLength; i++) {
      if (value[i] === currentSnippet.content[i]) {
        correctChars++
      }
    }
    
    const newAccuracy = value.length > 0 
      ? Math.floor((correctChars / value.length) * 100) 
      : 100
    
    setAccuracy(newAccuracy)
    
    // Check if completed
    if (value === currentSnippet.content) {
      setEndTime(new Date())
      setIsCompleted(true)
      calculateWPM()
    }
  }

  const calculateWPM = () => {
    if (startTime && endTime) {
      const timeInMinutes = (endTime - startTime) / 60000
      const words = currentSnippet.content.split(' ').length
      const calculatedWPM = Math.floor(words / timeInMinutes)
      setWpm(calculatedWPM)
    }
  }

  const filterSnippetsByCategory = (category) => {
    setCurrentCategory(category)
    if (category === 'all') {
      selectSnippet(dsaSnippets[0])
    } else {
      const filteredSnippets = dsaSnippets.filter(snippet => snippet.category === category)
      if (filteredSnippets.length > 0) {
        selectSnippet(filteredSnippets[0])
      }
    }
  }

  useEffect(() => {
    if (isCompleted) {
      calculateWPM()
    }
  }, [isCompleted, endTime])

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="app-container" onClick={focusInput}>
      <Header />
      
      <div className="main-content">
        <SnippetSelector 
          snippets={dsaSnippets} 
          currentCategory={currentCategory}
          onSelectCategory={filterSnippetsByCategory}
          onSelectSnippet={selectSnippet}
          currentSnippet={currentSnippet}
        />
        
        <div className="typing-container">
          <h3 className="snippet-title">{currentSnippet.title}</h3>
          <p className="snippet-description">{currentSnippet.description}</p>
          
          <TypingArea 
            snippet={currentSnippet.content} 
            userInput={input}
            onChange={handleInputChange}
            isCompleted={isCompleted}
            inputRef={inputRef}
          />
          
          {isCompleted && (
            <Results 
              wpm={wpm} 
              accuracy={accuracy} 
              onTryAgain={() => selectSnippet(currentSnippet)}
              onNext={() => {
                const currentIndex = dsaSnippets.findIndex(s => s.id === currentSnippet.id)
                const nextIndex = (currentIndex + 1) % dsaSnippets.length
                selectSnippet(dsaSnippets[nextIndex])
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
