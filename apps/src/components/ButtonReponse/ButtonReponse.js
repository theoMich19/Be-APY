import "./ButtonReponse.css"

const ButtonReponse = (props) => {
    

    return (
       <div>
           <button className="buttonQuestionReponse" onClick={ () => {
                props.sendReponse(true)
           }}>{props.trueRep[0]}</button>
           <button className="buttonQuestionReponse" onClick={ () => {
                props.sendReponse(false)
           }}>{props.falseRep[0]}</button>
           <br></br>
           <button className="buttonQuestionReponse" onClick={ () => {
                props.sendReponse(false)
           }}>{props.falseRep[1]}</button>
           <button className="buttonQuestionReponse" onClick={ () => {
                props.sendReponse(false)
           }}>{props.falseRep[2]}</button>
       </div>
    )   
}
   
   
export default ButtonReponse