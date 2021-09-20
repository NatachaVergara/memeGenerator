import React from 'react'

export default function Select() {
    return (
        <div>
            <div className="container mt-5 ">
            <select className="form-select mb-5" aria-label="form-select-sm form-select-lg example">
                <option selected>Elije tu meme</option>
                <option value="fire">Casa en llamas</option>
                <option value="futurama">Futurama</option>
                <option value="history">Aliens-History Chanel</option>
                <option value="matrix">Matrix</option>
                <option value="philosoraptor">PhilosoRaptor</option>
                <option value="smart">Smart Guy</option>
            </select>
            </div>
        </div>
    )
}
