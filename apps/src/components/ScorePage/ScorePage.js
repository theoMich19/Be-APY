import TextImputReponse from "../TextImputReponse/TextImputReponse"
import CardQuestion from "../CardQuestion/CardQuestion"
import './scorePage.css'
import { useState } from "react"

export default function ScorePage() {
    const [text, setTextValue] = useState("")
    return (
            <div className="scorePage">
                <CardQuestion question={"Quel est votre pseudo ?"} ></CardQuestion>
                <TextImputReponse setTextValue={setTextValue} ></TextImputReponse>
                <div className="buttons">
                    <button>Rejouer</button>
                    <button>S'informer</button>
                </div>
            </div>
        )
}