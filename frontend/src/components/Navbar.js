import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar" style={{ background: '#ffec97' }}>
                <div className="container">
                    <img 
                        width="50" 
                        height="50" 
                        src="assets/img/_f1e05d43-10c5-4bd9-b41d-9d0cd90f39ca.jpeg" 
                        alt="Logo"
                    />
                    <a className="navbar-brand logo" href="index.html">
                        <span style={{ color: 'rgb(59, 120, 20)' }}>Conexão Doadora</span>
                    </a>
                    <button 
                        data-bs-toggle="collapse" 
                        className="navbar-toggler" 
                        data-bs-target="#navcol-1"
                    >
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <div className="btn-toolbar"></div>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Catalago.html">Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Carrinho.html">Carrinho</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="profile.html">Perfil</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary" type="button">Sair</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
