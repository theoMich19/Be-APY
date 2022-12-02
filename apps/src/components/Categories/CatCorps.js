const CatCorps = () => {
    const text = `Chaque mois, l’endomètre, paroi interne de l’utérus, s’épaissit pour se préparer à accueillir un ovule fécondé par un spermatozoïde. S’il n’y a pas eu fécondation, une partie de l’endomètre est évacuée avec l’ovule par le vagin. Ce sont les règles. Elles sont constituées de muqueuse utérine, de glaire et de sang, d’où leur consistance bien différente de celle du sang qui coule dans les veines.
    L’aspect des règles peut être différent selon les personnes et selon les moments :
    -	rouge et fluide : cela montre simplement que le sang s’écoule assez vite de l’utérus ;
    -	marron et grumeleux : le sang s’écoule un peu moins vite, il a donc le temps de s’oxyder, de coaguler et donc de foncer et de s’épaissir. 
    Le premier jour des règles marque la fin du cycle menstruel et le début d’un autre. Elles reviennent en moyenne tous les 28 jours. Mais cela varie d’une femme à l’autre, surtout lors des premières années de la puberté et à l’approche de la ménopause.
    `
    return (
       <div className="cardDiv">
           <p className="textCard">{text}</p>
       </div>
    )
   
   }
   
   
   export default CatCorps