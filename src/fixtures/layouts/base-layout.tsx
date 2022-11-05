import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { PRESET_ANIMATIONS, PageTransition, PresetKeys } from '@vs/page-transition'

const presetOptions = Object.keys(PRESET_ANIMATIONS).map((key) => key)

function BaseLayout() {
  const location = useLocation()
  const [preset, setPreset] = useState<PresetKeys>('fadeFromLeft')

  return (
    <main className="h-full flex flex-col bg-lime-500">
      <div className="w-[1200px] my-3 mx-auto flex items-center">
        <label className="text-gray-500">preset：</label>
        <select className="rounded-md text-gray-500 h-14 min-w-[256px] w-full px-4 appearance-none focus-visible:outline-none" onChange={(e) => setPreset(e.target.value as any)}>
          {presetOptions.map((ops) => (
            <option key={ops} value={ops}>
              {ops}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center items-center my-3 mx-auto">
        <Link to="/a" className="text-2xl text-white rounded-md font-medium decoration-0 py-3 px-6 hover:bg-[rgba(47,66,80,0.2)]">
          to A
        </Link>
        <Link className="text-2xl text-white rounded-md font-medium decoration-0 py-3 px-6 hover:bg-[rgba(47,66,80,0.2)]" to="/b">
          to B
        </Link>
        <Link className="text-2xl text-white rounded-md font-medium decoration-0 py-3 px-6 hover:bg-[rgba(47,66,80,0.2)]" to="/c">
          to C
        </Link>
      </div>
      <PageTransition
        // outerWrapperClassName="flex-1"
        transitionKey={location.pathname}
        preset={preset}
      >
        <Outlet />
      </PageTransition>
    </main>
  )
}
export default BaseLayout
