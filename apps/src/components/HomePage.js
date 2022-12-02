import ButtonAbandon from "./ButtonAbandon/ButtonAbandon"
import ButtonPass from "./ButtonPass/ButtonPass"
import ButtonReponse from "./ButtonReponse/ButtonReponse"
import ButtonValider from "./ButtonValider/ButtonValider"
import Card from "./CardQuestion/CardQuestion"
import TextImputReponse from "./TextImputReponse/TextImputReponse"

export const HomePage = () => {
    return (
       <div>
           <ButtonPass />
           <ButtonAbandon />
           <ButtonValider />
           <ButtonReponse />
       </div>
    )
   
   }
   