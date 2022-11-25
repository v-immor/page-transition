import { Link } from 'react-router-dom'
import { pages } from '../pages'

function Navigation() {
  return (
    <div className='flex overflow-x-auto overflow-y-hidden absolute top-0 left-0 w-full p-8 z-[3]'>
      <nav className='flex-none my-0 mx-auto'>
        {pages.map((page, index) => (
          <Link
            className='rounded-lg flex-none font-medium py-3 px-6 transition-colors hover:bg-blue-500 bg-opacity-20'
            key={index}
            to={page.path}
          >
            {page.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export { Navigation }
