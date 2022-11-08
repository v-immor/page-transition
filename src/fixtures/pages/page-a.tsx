import { Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import demoCode from './demo?raw'

interface Props {}

function Page(props: Props) {
  console.log(demoCode, 'd')
  return (
    <div className="text-center">
      <div className="p-4">
        <p>if use react-router V6, the use as</p>
        <SyntaxHighlighter
          showLineNumbers // 是否展示左侧行数
          lineNumberStyle={{ color: '#ddd', fontSize: 10 }} // 左侧行数的样式
          style={darcula} // 主题风格
          language="tsx" // 需要语言类型 如css, jsx , javascript 等
          PreTag="div"
          wrapLongLines
          wrapLines
        >
          {demoCode}
        </SyntaxHighlighter>
      </div>

      <div className="p-4">
        <p>if use react-router V5, the use as</p>
        <SyntaxHighlighter
          showLineNumbers // 是否展示左侧行数
          lineNumberStyle={{ color: '#ddd', fontSize: 10 }} // 左侧行数的样式
          style={darcula} // 主题风格
          language="tsx" // 需要语言类型 如css, jsx , javascript 等
          PreTag="div"
          wrapLongLines
          wrapLines
        >
          {demoCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Page
