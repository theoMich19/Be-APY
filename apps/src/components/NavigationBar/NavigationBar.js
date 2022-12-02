import './navBar.css'
import close from '../HomePage/close.png'

export default function NavigationBar(props) {

    return (
            <div className="navBar">
                <button className='closeBtn'><img src={close} alt="menu burger" onClick={() => props.isVisible(false)} /></button>
                <div className="navBar">
                    <button>Se renseigner</button>
                    <button>Statistiques</button>
                <div>
                    <p className='access'>ACCESSIBILITÉ</p>
                    <button>Daltonien</button>
                </div>
                </div>
            </div>
        )
}