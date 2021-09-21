import React, { useState } from 'react'
import html2canvas from 'html2canvas'

export default function Select() {
    const [linea1, setLinea1] = useState('')
    const [linea2, setLinea2] = useState('')
    const [img, setImg] = useState('')

    const onChangeLinea1 = (e) => {
        setLinea1(e.target.value)
    }

    const onChangeLinea2 = (e) => {
        setLinea2(e.target.value)
    }



    const onChangeImg = (e) => {
        setImg(e.target.value)
    }

    const onClickDescargar = () => {
        html2canvas(document.querySelector("#meme")).then(canvas => {
            let img = canvas.toDataURL('./image/png')
            let link = document.createElement('a')
            link.download = 'meme.png'
            link.href = img
            link.click();


        });
    }

    return (
        <div>
            <div className="container mt-5 ">
                <select className="form-select mb-5" onChange={onChangeImg} aria-label="form-select-sm form-select-lg example">
                    <option selected>Elije tu meme</option>
                    <option value="fire">Casa en llamas</option>
                    <option value="futurama">Futurama</option>
                    <option value="history">Aliens-History Chanel</option>
                    <option value="matrix">Matrix</option>
                    <option value="philosoraptor">PhilosoRaptor</option>
                    <option value="smart">Smart Guy</option>
                </select>
                <div className="d-flex flex-column align-items-center">
                    <input onChange={onChangeLinea1} className="mb-2 align-self-center" type="text" placeholder="Linea 1" />
                    <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />
                </div>

                <div>
                    <input className="btn btn-danger mt-5 mb-5" type="submit" value="Descargar meme"
                        onClick={onClickDescargar} />
                </div>


                <div className="spanTxt" id="meme">
                    <span>{linea1} </span>
                    <span>{linea2} </span>
                    <img src={"./img/" + img + ".jpg"} alt="imagen" className="mb-5" />
                </div>

            </div>
        </div>
    )
}
