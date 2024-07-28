import React from 'react';
import './Header.css';

const Header = ({ onToggleDarkMode }) => {
  return (
    <header className="header">
      <div className="logo">QuickMark</div>
      <div className="actions">
        <button>Download</button>
        <button onClick={onToggleDarkMode}>Light/Dark Mode</button>
        <button>GitHub</button>
      </div>
    </header>
  );
};

export default Header;
