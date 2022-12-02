import { useEffect, useState } from "react"
import "./TextImputReponse.css"
const TextImputReponse = (props) => {
    const [text, setText] = useState("")

    useEffect( () => {
        props.setTextValue(text)
    }, [text])

    return (
       <div className="textInput">
           <input type="text" className="inputQuestion" onChange={(e) => {
            setText(e.target.value)
           }}/>
           
       </div>
    )
   
   }
   
   
   export default TextImputReponse