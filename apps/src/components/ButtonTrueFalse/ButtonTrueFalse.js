import "./ButtonTrueFalse.css"

const ButtonTrueFalse = ({sendReponse}) => {
    return (
       <div>
           <button className="buttonTrueFalse" onClick={() => {
            sendReponse(true)
           }}>Vrai</button>
           <button className="buttonTrueFalse" onClick={() => {
            sendReponse(false)
           }}>Faux</button>
       </div>
    )
   
   }
   
   
   export default ButtonTrueFalse