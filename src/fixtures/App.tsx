import { useRoutes } from 'react-router-dom'

import PageA from './pages/page-a'
import PageB from './pages/page-b'
import PageC from './pages/page-c'

import BaseLayout from './layouts/base-layout'

function App() {
  return useRoutes([
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        {
          path: '/a',
          element: <PageA />,
        },
        {
          path: '/b',
          element: <PageB />,
        },
        {
          path: '/c',
          element: <PageC />,
        },
        {
          path: '/',
          element: <PageA />,
        },
      ],
    },
  ])
}

export default App
