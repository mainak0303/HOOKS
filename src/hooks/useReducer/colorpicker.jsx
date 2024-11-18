import React,{useReducer} from 'react'

const color = (state,action) =>{
    return{color: action.type}
}

export default function Colorpickerreducer() {

    const initialColor = {color:'skyblue'}

    const [state,dispatch] = useReducer(color,initialColor)

    const colorChanger = (e) =>{
        dispatch({type:e.target.value})
    }
  return (
    <>
      <select onChange = {colorChanger}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="Blue">Blue</option>
        <option value="Pink">Pink</option>
        <option value="Orange">Orange</option>
        <option value="Green">Green</option>
      </select>
      <div style={{width:'150px',height:'150px',backgroundColor:state.color}}></div>
    </>
  )
}
