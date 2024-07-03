import React from "react";

function CarrinhoScreen(){
    return(
        <main className="page">
        <section className="clean-block clean-cart dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info" style={{ color: '#3b7814' }}>
                        <span style={{ color: 'rgb(59, 120, 20)' }}>Seu Carrinho</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="content">
                    <div className="row g-0">
                        <div className="col-md-12 col-lg-8">
                            <div className="items">
                                <div className="product"></div>
                                <div className="product"></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="bg-body-tertiary summary">
                                <h3>Resumo</h3>
                                <a href="Pagamento.html">
                                    <button className="btn btn-primary btn-lg d-block w-100" type="button">FINALIZAR</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default CarrinhoScreen