import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


const Markdown = ({children}) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {
            children
        }
    </ReactMarkdown>
  )
}

export default Markdown