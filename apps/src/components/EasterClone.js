import React from 'react';
import cloneImg from '../images/clone.png'

/**
 * Affiche un clone avec un message en bas de l'écran
 * Le supprime au click dessus
 */
const HighScore = () => {
    const removeClone = () => {
        document.getElementById('clone').style.display = 'none';
    }

    return (
        <div className="clone" id="clone" onClick={removeClone}>
            <div>Vous risquez de créer une armée de clones</div>
            <img src={cloneImg} alt="clone" />
        </div>
    )

};


export default HighScore