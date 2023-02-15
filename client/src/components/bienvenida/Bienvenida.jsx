import style from './Bienvenida.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Bienvenida() {
    return (
        <div>

            <div className={style.divBienvenida}>
                <h2>Bievenido a pokeapi</h2>
                <p>Entra y mira todos los pokemones que existen, encuentra tus favoritos, y crea tu propio equipo</p>
                <button>Ingresar <FontAwesomeIcon icon={faCoffee} /></button>
            </div>
            <img src="" alt="" />
        </div>
    )
}

export default Bienvenida;