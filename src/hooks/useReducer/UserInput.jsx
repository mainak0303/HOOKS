import React, { useReducer } from 'react'

const input = (state,action) =>{

}

export default function UserInput() {

    const initialinput = {name:'',submit:''}

    const [state,dispatch] = useReducer(input,initialinput)
    console.log(state)

  return (
    <div>
      
    </div>
  )
}
