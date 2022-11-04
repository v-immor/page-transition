import { Link } from 'react-router-dom'

interface Props {}

function Page(props: Props) {
  return (
    <div
      style={{
        background: 'green',
        height: '100%',
      }}
    >
      <p>Page B</p>
    </div>
  )
}

export default Page
