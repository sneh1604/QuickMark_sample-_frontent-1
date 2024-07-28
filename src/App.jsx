// 


import React, { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header onToggleDarkMode={toggleDarkMode} />
      <Toolbar />
      <MarkdownEditor />
    </div>
  );
}

export default App;
