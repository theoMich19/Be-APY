import { useEffect, useState } from "react";
import TextImputReponse from "../TextImputReponse/TextImputReponse"
import CardQuestion from "../CardQuestion/CardQuestion"
import ButtonAbandon from "../ButtonAbandon/ButtonAbandon";
import ButtonValider from "../ButtonValider/ButtonValider";
import ButtonPass from "../ButtonPass/ButtonPass";
import './questionPage.css'
import ButtonReponse from "../ButtonReponse/ButtonReponse";
import ButtonTrueFalse from "../ButtonTrueFalse/ButtonTrueFalse";

export default function QuestionPage(props) {
    const [typeQuestion, setTypeQuestion] = useState(props.dataQuizz[props.tabStats.length].type);

    const sendReponse = (value) => {
        if(props.dataQuizz[props.tabStats.length].trueRep === value) {
            props.setStats(1)
        } else {
            props.setStats(0)
        }
    }


    useEffect(() => {

    }, [] )

    return (
            <div className="questionPage">
                <p className="time">02:45</p>
                <CardQuestion question={props.dataQuizz[props.tabStats.length].question}></CardQuestion>
                {typeQuestion === "input" ? <TextImputReponse></TextImputReponse> 
                : typeQuestion === "choix4" ? <ButtonReponse sendReponse={sendReponse} trueRep={props.dataQuizz[props.tabStats.length].trueRep} falseRep={props.dataQuizz[props.tabStats.length].falseRep}></ButtonReponse> 
                : typeQuestion === "choix2" ? <ButtonTrueFalse sendReponse={sendReponse}></ButtonTrueFalse> 
                : ""}
                <ButtonPass></ButtonPass>
                <div className="buttons">
                    <ButtonAbandon></ButtonAbandon>
                    <ButtonValider></ButtonValider>
                </div>
            </div>
        )
}