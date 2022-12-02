const CatInfections = () => {
    const text = `Lorsque vous avez une IST, vous pouvez avoir des symptomes ou pas ! Lorsqu’il n’y a pas de symptômes, on dit que l’IST est « asymptomatique ». Le seul moyen de savoir si vous êtes infecté par une infection sexuellement transmissible (IST), c’est donc de vous faire dépister. 
    Se faire dépister régulièrement est nécessaire lorsqu’on a plusieurs partenaires et à chaque fois que l’on souhaite arrêter le préservatif avec un nouveau partenaire régulier. Un dépistage régulier vous permettra d’être diagnostiqué au plus tôt en cas d’infection, mais aussi de vous offrir une meilleure prise en charge et une diminution du risque de transmission à votre partenaire. Vous avez donc toutes les raisons d’y recourir !  Le laps temps entre l’infection par une IST et sa manifestation peut être plus ou moins long. Il peut même arriver que l’IST ne se manifeste jamais, c'est-à-dire que vous n’avez aucun symptôme. 
    Selon le type d’IST, les éventuels symptômes peuvent apparaître dans les jours, voire les semaines, qui suivent la contamination. Mais pour certains, ils peuvent se déclarer des années plus tard (par exemple, l’herpès génital) ou même jamais (IST asymptomatiques).  `
    return (
       <div className="cardDiv">
           <p className="textCard">{text}</p>
       </div>
    )
   
   }
   
   
   export default CatInfections