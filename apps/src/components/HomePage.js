import ButtonAbandon from "./ButtonAbandon/ButtonAbandon"
import ButtonPass from "./ButtonPass/ButtonPass"
import ButtonValider from "./ButtonValider/ButtonValider"
import Card from "./CardQuestion/CardQuestion"
import TextImputReponse from "./TextImputReponse/TextImputReponse"

export const HomePage = () => {
    return (
       <div>
           <ButtonPass />
           <ButtonAbandon />
           <ButtonValider />
       </div>
    )
   
   }
   