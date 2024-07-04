import React from "react";
import ProdutoCarousel from "../components/ProdutoCarousel";
import { BsLinkedin, BsInstagram, BsBoxArrowRight, BsPencilSquare, BsFillGeoAltFill, BsAirplane } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import img from "../img/scenery/OIG1.jpeg"; 
import img2 from "../img/avatars/1694694942065-1.jpg";
import img3 from "../img/avatars/SDFJGHSDUIGISR.png";

function HomePage() {
  return (
    <>
      <section className="clean-block clean-hero" style={{ color: "#3b7814", background: "linear-gradient(-73deg, black, rgb(110,110,110) 43%, white)" }}>
        <div className="text">
          <h2>Bem-vindo ao Conexão Doadora</h2>
          <p>Nosso objetivo é combater a fome e o desperdício de alimentos, promovendo uma rede solidária e eficiente de distribuição.</p>
          <a className="btn btn-outline-light btn-lg" role="button" href="/catalogo">Solicitar doação</a>
        </div>
      </section>

      <section className="clean-block clean-info dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info" style={{ color: "var(--bs-primary)" }}><span style={{ color: "rgb(3, 166, 74)" }}>Alimentos Que Nutrem Esperança</span></h2>
            <p>Aqui, você pode fazer a diferença, seja doando alimentos não perecíveis, participando de campanhas ou se voluntariando para ajudar na logística. Junte-se a nós nessa missão de levar alimento e esperança a quem mais precisa. Doe hoje e transforme vidas!</p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 offset-xl-0">
              <img className="img-thumbnail" src={img} alt="Scenery" />
            </div>
            <div className="col-md-6">
              <h3><span style={{ color: "rgb(59, 120, 20)" }}>Seja um doador</span></h3>
              <div>
                <p>Aqui, você pode fazer a diferença, seja doando alimentos não perecíveis, participando de campanhas ou se voluntariando para ajudar na logística.</p>
              </div>
              <a className="btn btn-outline-primary btn-lg" role="button" href="/registro">Participe agora</a>
            </div>
          </div>
        </div>
      </section>

      <section className="clean-block features">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info"><span style={{ color: "rgb(59, 120, 20)" }}>Como funciona?</span></h2>
            <p>Nosso sistema foi desenvolvido para ser transparente, seguro e prático, garantindo que suas doações cheguem rapidamente a quem mais precisa. Junte-se a nós e faça a diferença!</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 feature-box">
              <BsBoxArrowRight size={40} color="#3b7814" />
              <h4>Cadastro:</h4>
              <p>Primeiro, você precisa se cadastrar em nosso site, fornecendo algumas informações básicas para criar seu perfil de doador.</p>
            </div>
            <div className="col-md-5 feature-box">
              <BsPencilSquare size={40} color="#3b7814" />
              <h4>Seleção dos Itens:</h4>
              <p>Após o cadastro, você pode selecionar os alimentos que deseja doar. Temos uma lista de itens prioritários baseada nas necessidades atuais das comunidades e instituições parceiras.</p>
            </div>
            <div className="col-md-5 feature-box">
              <BsFillGeoAltFill size={40} color="#3b7814" />
              <h4>Escolha do Destino:</h4>
              <p>Você pode escolher para onde quer enviar suas doações, seja uma instituição específica, uma comunidade carente, ou deixar que nosso sistema direcione para o local de maior necessidade.</p>
            </div>
            <div className="col-md-5 feature-box">
              <BsAirplane size={40} color="#3b7814" />
              <h4>Logística:</h4>
              <p>Nossa equipe cuida de toda a logística. Você pode optar por entregar os alimentos em um de nossos pontos de coleta ou solicitar que nossa equipe faça a retirada na sua localização, sem nenhum custo adicional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clean-block slider dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info" style={{ "--bs-primary": "#3b7814", "--bs-primary-rgb": "59,120,20", fontSize: "2em", marginBottom: "20px" }}><span style={{ color: "rgb(59, 120, 20)" }}>Campanha "Unidos por um Mundo Sem Fome"</span></h2>
            <p>Juntos, podemos construir um futuro onde nenhum prato fique vazio, e onde a fome seja apenas uma lembrança distante. Doe esperança, transforme vidas.</p>
          </div>
          <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
            <ProdutoCarousel className="carousel-inner" />
            <div>
              <a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button>
            </div>
          </div>
        </div>
      </section>

      <section className="clean-block">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info" style={{ fontSize: "2em", marginBottom: "20px" }}><span style={{ color: "rgb(59, 120, 20)" }}>Nosso time</span></h2>
            <p>Nosso time é composto por pessoas apaixonadas e dedicadas a fazer a diferença na luta contra a fome. Conheça quem está por trás do nosso site de doação de alimentos:</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img  className="img-fluid card-img-top w-100 d-block" src={img2} alt="Leandro Falkembach" style={{ width: "294px", height: "194px" }} />
                <div className="card-body info">
                  <h4 className="card-title">Leandro Falkembach</h4>
                  <p className="card-text">Leandro cuida de nossa presença online e campanhas de marketing, ajudando a conscientizar a comunidade e engajar mais doadores.</p>
                  <div className="icons">
                    <a href="https://www.linkedin.com/in/leandro-falkembach-62126b205/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                    <a href="https://www.instagram.com/lfalkembach_64/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                    <a href="https://github.com/LeandroFalk" target="_blank" rel="noopener noreferrer"><VscGithub /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img className="img-fluid card-img-top w-100 d-block" src={img3} alt="Leticia Torcheto" style={{ width: "294px", height: "271px" }} />
                <div className="card-body info">
                  <h4 className="card-title">Leticia Torcheto</h4>
                  <p className="card-text">Leticia lidera nossa equipe de logística, garantindo que todas as doações cheguem com segurança aos destinos escolhidos pelos doadores.</p>
                  <div className="icons">
                    <a href="https://www.linkedin.com/in/leticia-torcheto-56b7131b9/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                    <a href="https://www.instagram.com/letori.t" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                    <a href="https://github.com/LetiTorcheto" target="_blank" rel="noopener noreferrer"><VscGithub /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
