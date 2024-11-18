import React, {useReducer} from 'react'

const counter = (state,action) =>{
    if(action.type ==='INCREMENT'){
        if(state?.count < 10){
            return{count:state?.count+1}//state count increment by one
        }
        else{
            return state //returns the whole object state if not writtend throw undefined state
        }
        
    }
    else if(action.type ==='DECREMENT'){
        if(state?.count > -10){
            return{count:state?.count-1}
        }
        else{
            return state
        }
    }
    else if(action.type ==='RESET'){
        return{count:0}
    }
}

export default function CounterReducer() {

    const initialState = {count:0};//initial object state passed to useReducer state

    //state and dispatch using useReducer part of reducer syntax
   const [state,dispatch] = useReducer(counter,initialState)//sends the initial object and dispatch object type to the counter function
  return (
    <div>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={() => dispatch({type:"DECREMENT"})}>DECREMENT</button>
      <button onClick={() => dispatch({type:"RESET"})}>RESET</button>
    </div>
  )//object type action state passed to dispatch useReducer
}
