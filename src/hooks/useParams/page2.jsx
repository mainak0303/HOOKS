import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Page2() {

    let {id} = useParams()
    console.log(typeof(id))

    let [data,setdata] = useState()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setdata(data)
        })
    },[])
  return (
    <div>
      {/*id == 1 ? 'Hello 1' : ''}
      {id == 2 ? 'Hello 2' : ''}
      {id == 3 ? 'Hello 3' : ''*/}

        <h5>{data?.title}</h5>
        <p>{data?.description}</p>


    </div>
  )
}
