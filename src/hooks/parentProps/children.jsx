import React from 'react'

export default function Children({ value }) {
    console.log(value, "child")
    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}
