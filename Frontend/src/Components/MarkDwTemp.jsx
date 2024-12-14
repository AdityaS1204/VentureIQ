import React from 'react'
import {marked} from 'marked'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const MarkDwTemp = ({markedContent}) => {
  // console.log(markedContent)
const htmlmarked = marked(markedContent);
// console.log(htmlmarked);
  return (

    <div className="prose prose-lg">
<ReactMarkdown remarkPlugins={[remarkGfm]}>{markedContent}</ReactMarkdown>
    </div>
  )
};



