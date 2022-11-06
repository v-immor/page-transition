import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { PRESET_ANIMATIONS, PageTransition, PresetKeys } from '@v-immor/page-transition'

const presetOptions = Object.keys(PRESET_ANIMATIONS).map((key) => key)

function RootLayout() {
  const location = useLocation()
  const [preset, setPreset] = useState<PresetKeys>('fadeFromLeft')

  return (
    <div className="h-full flex flex-col bg-lime-500">
      <PageTransition transitionKey={location.pathname} preset={preset}>
        <Outlet />
      </PageTransition>
    </div>
  )
}
export default RootLayout
