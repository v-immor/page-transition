import { CSSProperties } from 'react'
import { DEFAULT_ANIMATIONS } from './animation'
import { PageTransitionProps } from './page-transition'
import { PRESET_ANIMATIONS } from './preset'

export interface AnimationProps {
  name: string
  timing: CSSProperties['animationTimingFunction']
  duration: number
  fill: CSSProperties['animationFillMode']
  delay?: CSSProperties['animationDelay']
  origin?: CSSProperties['transformOrigin']
  onTop?: boolean
}

export const createAnimationStyles = (props: AnimationProps): CSSProperties => {
  const style: CSSProperties = {
    animationName: props.name,
    animationDelay: props.delay,
    animationDuration: `${props.duration}ms`,
    animationTimingFunction: props.timing,
    animationFillMode: props.fill,
    transformOrigin: props.origin ?? '50% 50%',
  }

  if (props.onTop) style.zIndex = 1

  return style
}

export const getEnterOrExitAnimationStyle = (props: Pick<PageTransitionProps, 'preset' | 'enter' | 'exit'>, type: 'exit' | 'enter') => {
  let animation: AnimationProps | null = null

  if (props.preset) {
    animation = {
      name: PRESET_ANIMATIONS[props.preset][type].name,
      ...DEFAULT_ANIMATIONS[PRESET_ANIMATIONS[props.preset][type].name],
    }
  }

  if (props.enter && type === 'enter') {
    if (typeof props.enter === 'string') {
      animation = {
        name: props.enter,
        ...DEFAULT_ANIMATIONS[props.enter],
      }
    } else {
      animation = { ...animation, ...props.enter }
    }
  } else if (props.exit && type === 'exit') {
    if (typeof props.exit === 'string') {
      animation = {
        name: props.exit,
        ...DEFAULT_ANIMATIONS[props.exit],
      }
    } else {
      animation = { ...animation, ...props.exit }
    }
  }

  let style: CSSProperties = {}

  if (animation) {
    style = {
      ...createAnimationStyles(animation),
      // position: type === 'enter' ? 'absolute' : 'absolute',
      // visibility: type === 'enter' ? 'visible' : 'hidden',
      // display: type === 'exit' ? 'none' : '',
    }
  }

  return {
    duration: animation ? animation.duration : 0,
    style,
  }
}

export const DEFAULT_WRAPPER_STYLE: React.CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  transform: 'translate3d(0, 0, 0)',
  willChange: 'transform',
  perspective: 1200,
  overflow: 'hidden',
}
