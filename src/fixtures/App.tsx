import { useState } from 'react'
import { Link, useLocation, useRoutes } from 'react-router-dom'
import { PRESET_ANIMATIONS, PresetKeys } from '@v-immor/page-transition'

import PageA from './pages/page-a'

import BaseLayout from './layouts/base-layout'
import PagePanel from './components/page-panel'
import PageTransition from '../page-transition'

const presetOptions = Object.keys(PRESET_ANIMATIONS).map((key) => key)

function App() {
  const location = useLocation()
  const [preset, setPreset] = useState<PresetKeys>('fadeFromLeft')

  const main = useRoutes([
    {
      path: '/',
      children: [
        {
          path: '/a',
          element: <PagePanel title="Your Abilities A Are Limitless!" desc="From Your Imagination" />,
        },
        {
          path: '/b',
          element: <PagePanel title="Your Abilities B Are Limitless!" desc="From Your Imagination" />,
        },
        {
          path: '/c',
          element: <PagePanel title="Your Abilities C Are Limitless!" desc="From Your Imagination" />,
        },
        {
          path: '/',
          element: <PageA />,
        },
      ],
    },
  ])

  return (
    <div className="relative h-full">
      <div className="navbar bg-base-100 fixed top-0 left-0 z-[1] shadow-lg bg-opacity-60">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/a">Page A</Link>
              </li>
              <li>
                <Link to="/b">Page B</Link>
              </li>
              <li>
                <Link to="/c">Page C</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            page-transition
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mr-1">
              <Link to="/a">Page A</Link>
            </li>
            <li className="mr-1">
              <Link to="/b">Page B</Link>
            </li>
            <li className="mr-1">
              <Link to="/c">Page C</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              {preset}
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box h-96 overflow-y-auto flex-nowrap">
              {presetOptions.map((ops) => (
                <li
                  key={ops}
                  onClick={(e) => {
                    e.currentTarget.blur()
                    setPreset(ops as any)
                  }}
                >
                  <a>{ops}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn" href="https://github.com/v-immor/page-transition">
            GitHub
          </a>
        </div>
      </div>
      <PageTransition transitionKey={location.pathname} preset={preset}>
        {main}
      </PageTransition>
    </div>
  )
}

export default App
