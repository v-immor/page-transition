import { TransitionStatus } from 'react-transition-group'
import { DEFAULT_ANIMATIONS } from './animation'
import { PRESET_ANIMATIONS } from './preset'

export type PresetKeys = keyof typeof PRESET_ANIMATIONS

export type DefaultAnimations = keyof typeof DEFAULT_ANIMATIONS

export type TransitionEventKeys = 'onExiting' | 'onExit' | 'onExited' | 'onEnter' | 'onEntering' | 'onEntered'

export type DefaultStatusMap = {
  [key in TransitionStatus]?: {
    style: React.CSSProperties
    duration: number
  }
}
