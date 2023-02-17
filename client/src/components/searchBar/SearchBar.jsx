import style from '../searchBar/SearchBar.module.css'

function SearchBar() {
    return (
        <form className={style.formSearch}>
            <input className={style.inputSearch} type="text" placeholder="Buscar" autoComplete="off" />
            <button className={style.botonSearch} type="submit">Buscar</button>
        </form>
    )
}

export default SearchBar;