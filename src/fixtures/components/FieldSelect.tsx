import classNames from 'classnames'
import { PresetKeys } from '@v-immor/page-transition'

interface FieldSelectProps {
  fullWidth?: boolean
  current: string
  options: string[]
  label: string
  onChange: (value: PresetKeys) => void
}

function FieldSelect({
  current,
  options,
  label,
  onChange,
  fullWidth,
}: FieldSelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value as PresetKeys)

  return (
    <div
      className={classNames(
        'flex flex-col flex-1 min-w-[50%] p-2',
        fullWidth && 'flex-none w-full mb-8'
      )}
    >
      <label className='text-base mb-2 text-white text-opacity-60'>
        {label}
      </label>
      <select
        className='rounded-md h-14 min-w-[240px] px-4 w-full appearance-none text-black text-opacity-50'
        value={current}
        onChange={handleChange}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

export { FieldSelect }
