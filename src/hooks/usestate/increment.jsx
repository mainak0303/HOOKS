import React,{useState} from 'react'

export default function Increment() {
    const [count,setCount] = useState(0)

    console.log( count)
    const increment = () =>{
        setCount(count + 1)
    }
  return (
    <>
        <h1>{count}</h1>
        <button onClick={increment}>Button</button>
    </>
  )
}
