import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button><b>B</b></button>
      <button><i>I</i></button>
      <button><b>H</b></button>
      <button>Link</button>
      <button>Image</button>
    </div>
  );
};

export default Toolbar;