import React,{useReducer} from 'react'

const initialstate={name:"",submit_txt:""};//name: Stores the current value of the input field.
                                           //submit_txt: Stores the text displayed upon submission.

export default function Useinput() {
    const inputReducer=(state,action)=>{
        if(action.type==="show_text"){                          //"show_text": Updates name with the payload (input value).
            return {...state, name:action.payload};         
        }else if(action.type==="SUBMIT"){
            return {...state, submit_txt: state.name};          //"SUBMIT": Sets submit_txt to the current value of name.
        }else{return state}
        }
    const [state,dispatch]=useReducer(inputReducer,initialstate)
    console.log(state);
  return (
    <div>
        <input type='text' id='text' onChange={(e)=>dispatch({type:"show_text" ,payload:e.target.value})} />
        <button onClick={()=>dispatch({type:"SUBMIT"})}>submit</button>
        <h1>{state?.submit_txt}</h1>
    </div>
  )//paylod is used to store the value of the input state
}
