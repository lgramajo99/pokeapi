import CardsList from '../cardsList/CardsList'
import style from '../inicio/Inicio.module.css'
function Inicio() {
    return (
        <div className={style.divPadr}>
            <CardsList></CardsList>
        </div>
    )
}

export default Inicio;