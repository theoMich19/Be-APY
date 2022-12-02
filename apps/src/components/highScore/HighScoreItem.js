import {ReactComponent as Item1} from './item1.svg';
import {ReactComponent as Item2} from './item2.svg';
import {ReactComponent as Item3} from './item3.svg';
import React from 'react';


const HighScoreItem = ({key, item ,index}) => {
   const [backgroundIndex, setBackgroundIndex] = React.useState(Item1);
   React.useEffect(() => {
      if(index === 2){
         setBackgroundIndex(Item2)
      }else if(index === 3){
         setBackgroundIndex(Item3)
      }
   }, [index])
   
    return (

         <div className="item">
         {index === 0 && <Item1 className="background"/>}
         {index === 1 && <Item2 className="background"/>}
         {index === 2 && <Item3 className="background"/>}
         {index !== 0 && index !== 1 && index !== 2 && <div className="background bgDefaut"/>}
            <div className="rank">
               {index+1 <= 3 ? `#${index + 1}` : ""}
            </div>
            <div className='infoItem'>
            <span>{item.nickname}</span>
            <span>{item.score}</span>
            <span>{item.chrono}</span>
            </div>
            
       </div>
   
    )
   
   }
   
   
   export default HighScoreItem