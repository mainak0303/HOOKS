import React, { useState } from 'react'
import Child_Memo from './child'
export default function Parent_Memo() {

    const [count,setcount] = useState(10)
    const [data,setdata] = useState(100)
    const increment = () =>{
        setcount(count+1)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Button</button>
      <Child_Memo value = {data}/>
    </div>
  )
}
