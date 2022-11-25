import { useContext } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'
import { PageTransition } from '@v-immor/page-transition'

import { AppContext } from './components/AppContext'
import { Page } from './components/Page'
import { pages } from './pages'
import { Navigation } from './components/Navigation'

function App() {
  const location = useLocation()
  const appContext = useContext(AppContext)

  const main = useRoutes([
    {
      path: '/',
      children: [
        ...pages.map((page) => ({
          path: page.path,
          element: <Page page={page} />,
        })),
        {
          path: '/',
          element: <Navigate to="/page-1" />,
        },
      ],
    },
  ])

  return (
    <>
      <Navigation />
      <PageTransition preset={appContext?.preset} transitionKey={location.pathname} enter={appContext?.enterAnimation || ''} exit={appContext?.exitAnimation || ''}>
        {main}
      </PageTransition>
    </>
  )
}

export default App
