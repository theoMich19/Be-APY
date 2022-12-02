import TextImputReponse from "../TextImputReponse/TextImputReponse"
import CardQuestion from "../CardQuestion/CardQuestion"
import './scorePage.css'

export default function ScorePage() {

    return (
            <div className="scorePage">
                <CardQuestion></CardQuestion>
                <TextImputReponse></TextImputReponse>
                <div className="buttons">
                    <button>Rejouer</button>
                    <button>S'informer</button>
                </div>
            </div>
        )
}