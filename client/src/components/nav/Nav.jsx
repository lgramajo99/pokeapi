import SerchBar from "../SerchBar";
import { Link } from "react-router-dom"
import style from "../nav/Nav.module.css"

function navbar() {
    const _banner = 'https://i.imgur.com/R5jGc2m.jpg'
    return (
        <div className={style.bodyNav}>
            <img className={style.imgNav} src={_banner} alt="banner pokemon" />
            <Link className={style.linkInicioNav} to='/inicio'>Inicio</Link>
            <Link className={style.linkNosotrosNav} to='/sobreNosotros'>Conocenos</Link>
            <SerchBar />
            <Link className={style.linkFaceNav} to='/error'>Facebook</Link>
        </div>
    )
}

export default navbar;