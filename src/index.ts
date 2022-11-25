export { default as PageTransition } from './page-transition'
export type { PageTransitionProps } from './page-transition'

export type { PresetKeys, DefaultAnimations, TransitionEventKeys, DefaultStatusMap } from './interface'

export { PRESET_ANIMATIONS } from './preset'
export { DEFAULT_ANIMATIONS } from './animation'

export { createAnimationStyles, getEnterOrExitAnimationStyle, DEFAULT_WRAPPER_STYLE } from './utils'
export type { AnimationProps } from './utils'

export { Transition, TransitionGroup, CSSTransition, SwitchTransition } from 'react-transition-group'
export type { TransitionStatus } from 'react-transition-group'
export type { CSSTransitionClassNames, CSSTransitionProps } from 'react-transition-group/CSSTransition'
export type { SwitchTransitionProps, modes } from 'react-transition-group/SwitchTransition'
export type { EndHandler, EnterHandler, ExitHandler, TransitionActions, TimeoutProps, EndListenerProps, TransitionProps } from 'react-transition-group/Transition'
export type { IntrinsicTransitionGroupProps, ComponentTransitionGroupProps, TransitionGroupProps } from 'react-transition-group/TransitionGroup'
