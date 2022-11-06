import React, { memo } from 'react'

interface PagePanelProps {
  title: string
  desc: string
}

function PagePanel(props: PagePanelProps) {
  React.useEffect(() => {
    window.document.title = props.title
  }, [props.title])

  return (
    <div className="text-center">
      <h1 className="text-6xl">{props.title}</h1>
      <h6 className="text-4xl mt-4">{props.desc}</h6>
    </div>
  )
}

export default memo(PagePanel)
