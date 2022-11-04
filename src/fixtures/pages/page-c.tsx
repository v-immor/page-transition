import { Link } from 'react-router-dom'

interface Props {}

function Page(props: Props) {
  return (
    <div
      style={{
        background: 'red',
        height: '100%',
      }}
    >
      <p>Page C</p>
    </div>
  )
}

export default Page
