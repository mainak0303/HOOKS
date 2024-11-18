import React,{useState} from 'react'

export default function Colorpicker() {

    const [color, setColor] = useState()
    const colors = [
        {
            label: "red"
        },
        {
            label: "blue"
        },

        {
            label: "green"
        },

        {
            label: "pink"
        },

    ]

    const handleChange = (e) => {
        setColor(e.target.value)
    }
    return (
        <>
            <select onChange={handleChange}>

                {colors.map((item) => {
                    return (
                        <>
                            <option value={item.label}>{item.label}</option>

                        </>
                    )
                })}


            </select>


            <div style={{ backgroundColor: color, height: "100px", width: "100px" }}></div>
        </>
    )
}
