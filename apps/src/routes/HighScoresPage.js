import '../components/highScore/highScore.css'
import HighScoreItem from '../components/highScore/HighScoreItem'

const tab = [{"id":1,"nickname":"test","score":123,"last_connected":"2022-12-02T00:32:03.000Z","chrono":233},{"id":2,"nickname":"moska","score":123,"last_connected":"2022-12-02T01:13:36.000Z","chrono":12},{"id":3,"nickname":"coucou","score":234,"last_connected":"2022-12-02T01:13:36.000Z","chrono":23},
{"id":4,"nickname":"coucou","score":234,"last_connected":"2022-12-02T01:13:36.000Z","chrono":23},
{"id":5,"nickname":"coucou","score":234,"last_connected":"2022-12-02T01:13:36.000Z","chrono":23},{"id":6,"nickname":"coucou","score":234,"last_connected":"2022-12-02T01:13:36.000Z","chrono":23}]

export const HighScoresPage = () => {
    return (
       <div className="highScorePage">
           <h1>HighScoresPage</h1>
           <div className="itemHightScoreAll">
                {tab.map((item, index) => (
                    <HighScoreItem key={item.id} item={item} index={index}/>
                ))}
           </div>
       </div>
    )
   
   }
   