import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor">
      <textarea
        className="input"
        placeholder="Enter your markdown text here..."
        value={markdown}
        onChange={handleInputChange}
      />
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownEditor;
