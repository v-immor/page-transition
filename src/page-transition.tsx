import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import { TransitionProps } from 'react-transition-group/Transition'

import { AnimationProps, DEFAULT_WRAPPER_STYLE, getEnterOrExitAnimationStyle } from './utils'
import { DefaultAnimations, DefaultStatusMap, PresetKeys, TransitionEventKeys } from './interface'

export interface PageTransitionProps extends Pick<TransitionProps<HTMLDivElement>, TransitionEventKeys> {
  enter?: DefaultAnimations | AnimationProps
  exit?: DefaultAnimations | AnimationProps
  preset?: PresetKeys
  children: React.ReactNode
  transitionKey: string
  outerWrapperStyle?: React.CSSProperties
  outerWrapperClassName?: string
}

function PageTransition(props: PageTransitionProps) {
  const { enter, exit, preset, children, transitionKey, outerWrapperClassName, outerWrapperStyle, ...otherProps } = props

  const statusMap = React.useMemo<DefaultStatusMap>(
    () => ({
      entering: getEnterOrExitAnimationStyle({ enter, exit, preset }, 'enter'),
      exiting: getEnterOrExitAnimationStyle({ enter, exit, preset }, 'exit'),
    }),
    [enter, exit, preset]
  )

  const timeout = React.useMemo(
    () => (statusMap.entering?.duration && statusMap.exiting?.duration ? Math.max(statusMap.entering.duration, statusMap.exiting.duration) : 0),
    [statusMap]
  )

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        perspective: '1200px',
        overflow: 'hidden',
        ...outerWrapperStyle,
      }}
      className={outerWrapperClassName}
    >
      <TransitionGroup component={null}>
        <Transition {...otherProps} key={transitionKey} timeout={timeout}>
          {(status) => (
            <div
              style={{
                ...DEFAULT_WRAPPER_STYLE,
                ...statusMap[status]?.style,
              }}
            >
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </div>
  )
}

export default PageTransition
