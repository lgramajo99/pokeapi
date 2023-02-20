
function Card({ nombre, imagen, tipos }) {

    return (
        <div className="card">
            <h2>Nombre:{nombre} </h2>
            <img src={imagen} alt={nombre} />
            <p>Tipos: {tipos}</p>
        </div>
    );
}

export default Card;
