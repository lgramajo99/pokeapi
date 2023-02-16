import style from './Bienvenida.module.css'
import { Link } from 'react-router-dom'

function Bienvenida() {
    let _pokeImagenBienvenida = "https://i.imgur.com/h6swayq.png"
    return (
        // <div className={style.divPadreBienvenida}>

        <div className={style.divBienvenida}>
            <h1 className={style.titBienvenida}>Bievenido a PokeApi</h1>
            <p className={style.pBienvenida}>Entra y encuentra todos los pokemones que existen, busca a tus favoritos y crea tu propio equipo y empieza la aventura.</p>

            <Link to={'/inicio'}><button className={style.btnBienvenida}>Ingresar</button></Link>

            <img className={style.imgSnorlaxBienvenida} src={_pokeImagenBienvenida} alt="Snorlax saludando" />
        </div >
        // </div>
    )
}

export default Bienvenida;