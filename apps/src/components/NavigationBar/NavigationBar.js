import './navBar.css'
import close from '../../img/close.png'
import { Link } from 'react-router-dom';

export default function NavigationBar(props) {

    return (
            <div className="navBar">
                <button className='closeBtn'><img src={close} alt="menu burger" onClick={() => props.isVisible(false)} /></button>
                <div className="buttons">
                    <Link to="/">Accueil</Link>
                    <br /><br />
                    <Link to="/InformPage">Se renseigner</Link>
                    <br /><br />
                    <Link to="/DashBoardPage">Statistiques</Link>
                    <div className='dalt'>
                        <p className='access'>ACCESSIBILITÉ</p>
                        <Link to="/">Colorimétrie</Link>
                    </div>
                </div>
            </div>
        )
}