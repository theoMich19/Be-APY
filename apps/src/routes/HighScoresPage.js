import '../components/highScore/highScore.css'
import HighScoreItem from '../components/highScore/HighScoreItem'


export const HighScoresPage = () => {
    return (
       <div className="highScorePage">
           <h1>HighScoresPage</h1>
           <div className="itemHightScoreAll">
                <HighScoreItem/>
           </div>
       </div>
    )
   
   }
   