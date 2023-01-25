import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';


function MarkdownPreviewer() {
  const defaultMarkdown = `# One hash\n## Two hashes\n[A link to my super cool website](https://www.robiniversen.com)\n- A list item \n\n**VERY IMPORTANT INFO**\n\nHeres some code, \`<div></div>\`, between 2 backticks.\n\n \`\`\`test\`\`\`\n\n> Block Quotes!\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  }

  return (
    <div>
      <textarea 
        id="editor" 
        value={markdown} 
        onChange={handleChange} 
      />
      <div id="preview">
      <ReactMarkdown children={markdown} 
      /> 
      </div>
    </div>
  );
}

export {MarkdownPreviewer};
