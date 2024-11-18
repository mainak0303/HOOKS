import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Page1() {
    let [data,setdata] = useState()
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
            setdata(data.products)
        })
    },[])
  return (
    <div>
      {/*<Link to={`/page2/1`}><button>Button 1</button></Link>
      <Link to={`/page2/2`}><button>Button 2</button></Link>
      <Link to={`/page2/3`}><button>Button 3</button></Link>*/}
      {data?.map((item) =>{
        return(
            <>
                <Link to={`/page2/${item.id}`}><h5>{item.title}</h5></Link>
            </>
        )
      })}
    </div>
  )
}
