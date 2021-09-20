import React from 'react'
import MemeTxt from './MemeTxt'
import {useBetween} from 'use-between'


export default function MemeInputs() {
        const {setLinea1, setLinea2} = useBetween(MemeTxt)

    const onChangeLinea1 = (e) =>{
        setLinea1(e.target.value)
    }

    // const onChangeLinea2 = (e) =>{
        
    // }


    return (
        <div className="d-flex flex-column align-items-center ">
            <input onChange={onChangeLinea1} className="mb-2" type="text" placeholder="Linea 1"/>
            <input onChange="{} " type="text" placeholder="Linea 2"/>
        </div>
    )
}
