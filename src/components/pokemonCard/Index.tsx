import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function PokemonCard({ name, image, types }) {

  const typeHandler = () => {
    if (types [1]){
      return types[0].name + "" + types[1].type.name
    }
    return types[0].type.name

  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={image} // Corrigido: 'src' é o atributo correto para URLs de imagem
        alt={name} // A descrição agora reflete o nome do Pokémon
        className="card-img-top" // Classe do Bootstrap para estilizar a imagem
      />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <h6 className="card-title text-center">{types[0].type.name}</h6>
        <p className="card-text text-center">
          Este é o Pokémon {name}, conhecido por suas habilidades incríveis.
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Compartilhar</button>
          <button className="btn btn-secondary">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}
