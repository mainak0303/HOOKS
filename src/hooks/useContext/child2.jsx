import React, { useContext } from 'react'
import Notecontext from './context'

export default function Page() {
  const data = useContext(Notecontext)
  console.log(data)
  return (
    <div>
      <h2>{data.adress}</h2>
    </div>
  )
}
