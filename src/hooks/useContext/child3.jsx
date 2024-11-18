import React, { useContext } from 'react'
import Notecontext from './context'

export default function Child3() {
    const data = useContext(Notecontext)
    console.log(data)
  return (
    <div>
      <h2>{data.roll}</h2>
    </div>
  )
}
