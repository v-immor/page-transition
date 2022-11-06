import { useRoutes } from 'react-router-dom'

import PageA from './pages/page-a'

import BaseLayout from './layouts/base-layout'
import PagePanel from './components/page-panel'

function App() {
  return useRoutes([
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        {
          path: '/a',
          element: <PagePanel title="Your Abilities Are Limitless!" desc="From Your Imagination" />,
        },
        {
          path: '/b',
          element: <PagePanel title="Your Abilities Are Limitless!" desc="From Your Imagination" />,
        },
        {
          path: '/c',
          element: <PagePanel title="Your Abilities Are Limitless!" desc="From Your Imagination" />,
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
