import style from './Bienvenida.module.css'
import { Link } from 'react-router-dom'

function Bienvenida() {
    let _pokeImagenBienvenida = "https://i.imgur.com/CP0DCbQ.png"
    // const _contorno = "https://i.imgur.com/6bwXNT2.png";

    return (
        // <div className={style.divPadreBienvenida}>
        <div className={style.divPadre}>
            <div className={style.divBienvenida}>
                <h2 className={style.titBienvenida}>Bievenido a PokeApi</h2>
                <p className={style.pBienvenida}>Entra y encuentra todos los pokemones que existen, busca a tus favoritos y crea tu propio equipo y empieza la aventura.</p>

                <Link to={'/inicio'} className={style.btnBienvenida}>Ingresar como invitado</Link>
                <Link to={'/inicio'} className={style.btnBienvenida}>Ingresar como administrador</Link>

            </div>
            <img className={style.imgSnorlaxBienvenida} src={_pokeImagenBienvenida} alt="Snorlax saludando" />
        </div>
    )
}

export default Bienvenida;