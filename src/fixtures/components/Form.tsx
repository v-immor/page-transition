import { useContext } from 'react'
import { DEFAULT_ANIMATIONS, PRESET_ANIMATIONS } from '@v-immor/page-transition'
import { AppContext } from './AppContext'
import { FieldSelect } from './FieldSelect'

function Form() {
  const appContext = useContext(AppContext)

  if (appContext) {
    return (
      <form className="flex flex-wrap w-full">
        <FieldSelect current={appContext.preset || ''} fullWidth label="Preset" options={Object.keys(PRESET_ANIMATIONS)} onChange={(value) => appContext.setPreset(value)} />

        <FieldSelect
          current={appContext.enterAnimation || ''}
          label="Enter Override"
          options={Object.keys(DEFAULT_ANIMATIONS)}
          onChange={async (value) => appContext.setEnterAnimation(value)}
        />

        <FieldSelect
          current={appContext.exitAnimation || ''}
          label="Exit Override"
          options={Object.keys(DEFAULT_ANIMATIONS)}
          onChange={async (value) => appContext.setExitAnimation(value)}
        />
      </form>
    )
  }

  return null
}

export { Form }
