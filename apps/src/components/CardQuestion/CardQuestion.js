import "./CardQuestion.css"

const Card = (props) => {
    return (
        <div className="Rectangle">
            <h1>Question ?</h1>
            {props.question}
        </div>
    )
   
   }
   
   
   export default Card