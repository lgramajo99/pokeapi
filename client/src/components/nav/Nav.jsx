import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom"
import style from "../nav/Nav.module.css"

function navbar() {
    const _banner = 'https://i.imgur.com/R5jGc2m.jpg'
    return (
        <div className={style.bodyNav}>

            <img className={style.imgNav} src={_banner} alt="banner pokemon" />

            <nav className={style.navPadre}>
                <div className={style.ladoIzq}>
                    <Link to='/inicio'>
                        <img className={style.imgIcon} src="https://i.imgur.com/pBoxhA7.png" alt="Icono de una posion" />
                    </Link>
                </div>
                
                <div className={style.navlinks}>
                    <Link className={style.linkInicioNav} to='/inicio'>Inicio</Link>
                    <Link className={style.linkNosotrosNav} to='/sobreNosotros'>Sobre nosotros</Link>
                    <SearchBar />
                    <Link className={style.linkFaceNav} to='/error'>Facebook</Link>
                </div>
            </nav >
        </div>
    )
}

export default navbar;