import style from '../card/Card.module.css';
import { Link } from 'react-router-dom'

function Card({ nombre, imagen, tipos }) {

    return (
        <div className={style.cardPadre}>
            <div className={style.headCard}>
                <button className={style.fav} >🤍</button>
                <button className={style.equipo} >⚪</button>
            </div>
            <Link className={style.linkCard} to={`/detallePokemon/${nombre}`}>
                <img src={imagen} alt={nombre} />
                <h2>{nombre} </h2>
                <p> {tipos} </p>
            </Link>
        </div >
    );
}

export default Card;
