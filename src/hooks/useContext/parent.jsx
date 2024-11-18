import React from 'react'
import Notecontext from './context'

export default function Parent(props) {

    const state = {
        name:'John',
        adress:'New York',
        roll:'25',
        img:"https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
    }

  return (
    <>
      <Notecontext.Provider value = {state}>{props.children}</Notecontext.Provider>
    </>
  )
}
