import { useState } from "react";
import TextImputReponse from "../TextImputReponse/TextImputReponse"
import CardQuestion from "../CardQuestion/CardQuestion"
import ButtonAbandon from "../ButtonAbandon/ButtonAbandon";
import ButtonValider from "../ButtonValider/ButtonValider";
import ButtonPass from "../ButtonPass/ButtonPass";
import './questionPage.css'

export default function QuestionPage() {
    const [typeQuestion, setTypeQuestion] = useState("input");

    return (
            <div className="questionPage">
                <p className="time">02:45</p>
                <CardQuestion></CardQuestion>
                {typeQuestion === "input" ? <TextImputReponse></TextImputReponse> : <view></view>}
                <ButtonPass></ButtonPass>
                <div className="buttons">
                    <ButtonAbandon></ButtonAbandon>
                    <ButtonValider></ButtonValider>
                </div>
            </div>
        )
}