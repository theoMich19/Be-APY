import './navBar.css'
import close from '../../img/close.png'

export default function NavigationBar(props) {

    return (
            <div className="navBar">
                <button className='closeBtn'><img src={close} alt="menu burger" onClick={() => props.isVisible(false)} /></button>
                <div className="">
                    <button>Se renseigner</button>
                    <button>Statistiques</button>
                <div className='dalt'>
                    <p className='access'>ACCESSIBILITÉ</p>
                    <button>Colorimétrie</button>
                </div>
                </div>
            </div>
        )
}