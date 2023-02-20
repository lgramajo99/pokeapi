import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div>
            <Link to={`/pokemons/${props.pokemon.id}`}>
                <div className="card">
                    <h2>{props.pokemon.name}</h2>
                    <img src={props.pokemon.image} alt={props.pokemon.name} />
                    <p>Types: {props.pokemon.types.map(type => type.name).join(', ')}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;
