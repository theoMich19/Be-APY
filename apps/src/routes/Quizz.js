import React, { useEffect } from 'react'
import QuestionPage from '../components/QuestionPage/QuestionPage.js'
import ScorePage from '../components/ScorePage/ScorePage.js'

const dataQuizz = [
    {
        "id":1,
        "type":"choix4",
        "question":"Que faire en cas d'oubli de pilule ?",
        "trueRep":["Si oublie dans les 12h, pas de risque de grossesse + prendre immédiatement la prendre"],
        "falseRep":["","",""]
    },
    {
        "id":2,
        "type":"choix4",
        "question":"Pourquoi et comment parler contraception avec votre partenaire ?",
        "trueRep":["La manière de se protéger d'une grossesse non prévue ou d'une IST concerne autant les hommes que les femmes. Choisir, puis utiliser une contraception sur le long terme est donc une responsabilité qui repose sur les deux personnes du couple."],
        "falseRep":["","",""]
    },
    {
        "id":3,
        "type":"input",
        "question":"Premiers rapports sexuels : quelle contraception ?",
        "trueRep":["preservatifs","capotes"]
    },
    {
        "id":4,
        "type":"choix2",
        "question":"Pouvez-vous tomber enceinte sous contraception ?",
        "trueRep":["true"],
        "falseRep":[""]
    },
    {
        "id":5,
        "type":"input",
        "question":"Contraception d’urgence : où se la procurer ?",
        "trueRep":"pharmacies"
    },
    {
        "id":6,
        "type":"choix4",
        "question":"Contraception d’urgence : quels sont les délais ?",
        "trueRep":["72h","120h"],
        "falseRep":["","",""]
    },
    {
        "id":7,
        "type":"input",
        "question":"Je suis une femme comment me proteger ?",
        "trueRep":["pilules","preservatifs féminin","stérilet","implant","patch","injection"]
    },
    {
        "id":8,
        "type":"choix4",
        "question":"Qu’est-ce que la contraception dite « naturelle » ?",
        "trueRep":["retrait","calendrier (identifier la periode fertile)"],
        "falseRep":["","",""]
    },
    {
        "id":9,
        "type":"choix2",
        "question":"La contraception d’urgence : ça rend stérile ?",
        "trueRep":["false"],
        "falseRep":[""]
    },
    {
        "id":10,
        "type":"choix4",
        "question":"Quelle contraception choisir si vous êtes mineur ?",
        "trueRep":["preservatifs"],
        "falseRep":["","",""]
    }
]


export const Quizz = () => {

    const [stats, setStats] = React.useState()
    const tableauStat = []
    React.useEffect(() => {
        tableauStat.push(stats)
    }, [stats])

    console.log(tableauStat.length)
    return (
       <div className='screen'>   
            
            {tableauStat.length < 10 ?
            <QuestionPage dataQuizz={dataQuizz} setStats={setStats} tabStats={tableauStat}/> : <ScorePage /> }
            
       </div>
    )
   }
   
