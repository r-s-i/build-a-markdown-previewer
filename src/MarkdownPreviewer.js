import React, { useState } from 'react';
import {marked} from 'marked';


function MarkdownPreviewer() {
  const defaultMarkdown = `# One hash
    ## Two hashes
    [A link to my super cool website](https://www.robiniversen.com)

    - A list item
    * Another list item

    **VERY IMPORTANT INFO**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  }

  return (
    <div>
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div id="preview" dangerouslySetInnerHTML={{__html: parseMarkdown(markdown)}} />
    </div>
  );
}


function parseMarkdown(markdown) {
    return marked(markdown);
  }

export {MarkdownPreviewer};
