import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar({ pokemonFilter }) {  // Desestruturando pokemonFilter da props
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/assets/logo.png" alt="logo pokemon" width="100px" className='ms-3' />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <form className="d-flex ms-auto" role="search" onChange={(e) => pokemonFilter(e.target.value)}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Procurar"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Procurar
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
