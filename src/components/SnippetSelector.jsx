import React from 'react'

function SnippetSelector({ snippets, currentCategory, onSelectCategory, onSelectSnippet, currentSnippet }) {
  const categories = [
    { id: 'all', name: 'All Snippets' },
    { id: 'sorting', name: 'Sorting Algorithms' },
    { id: 'searching', name: 'Searching Algorithms' },
    { id: 'data-structures', name: 'Data Structures' }
  ];

  const filteredSnippets = currentCategory === 'all' 
    ? snippets 
    : snippets.filter(snippet => snippet.category === currentCategory);

  return (
    <div className="snippet-selector">
      <div className="category-filters">
        {categories.map(category => (
          <button 
            key={category.id}
            className={currentCategory === category.id ? 'active' : ''}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="snippets-list">
        <h3>Select a Snippet</h3>
        <ul>
          {filteredSnippets.map(snippet => (
            <li 
              key={snippet.id}
              className={currentSnippet.id === snippet.id ? 'active' : ''}
              onClick={() => onSelectSnippet(snippet)}
            >
              {snippet.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SnippetSelector
