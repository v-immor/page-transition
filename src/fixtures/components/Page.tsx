import { Form } from './Form'
import { PageType } from '../pages'

interface Props {
  page: PageType
}

function Page({ page }: Props) {
  return (
    <div
      className='flex flex-col h-full w-full overflow-x-hidden overflow-y-auto pt-[100px] px-12 pb-12'
      style={{
        backgroundColor: page.color,
      }}
    >
      <nav className='m-auto max-w-[640px] w-full'>
        <h1 className='text-4xl font-bold mb-6 text-center uppercase'>
          React{' '}
          <strong className='text-white text-opacity-90 font-normal'>
            Page Transitions
          </strong>
        </h1>

        <p className='text-center text-xl mb-12'>
          View the usage instructions and source code on{' '}
          <a
            href='https://github.com/Steveeeie/react-page-transition'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </p>

        <Form />
      </nav>
    </div>
  )
}

export { Page }
