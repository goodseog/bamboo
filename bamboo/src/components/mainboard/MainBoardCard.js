// Let's make <Card text='Write the docs' /> draggable!
import React from 'react'
import { useDrag } from 'react-dnd'

export default function MainBoardCard({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: 'card', text },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })
  
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}