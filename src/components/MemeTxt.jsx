import React, {useState} from 'react'

export default function MemeTxt() {
    const [linea1, setLinea1] = useState('')
    const [linea2, setLinea2] = useState('')

    return (
        <div>
            <span> {linea1} </span>
            <span> {linea2} </span>
        </div>
    )
}
