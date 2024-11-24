import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { products } from './products';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const ProductCard = ({ item }) => {
  const [imageSrc, setImageSrc] = useState(item.Images[0]);

  const handleMouseEnter = () => {
    setImageSrc(item.Images[1]);
  };

  const handleMouseLeave = () => {
    setImageSrc(item.Images[0]);
  };

  return (
    <div className="product">
      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={`/imgs/${imageSrc}`} alt={item.Name} />
      </div>
      <div className="description">
        <p className="name">{item.Name}</p>
        <p className="price">R${item.Price}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

const BannerCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="carousel-banner" style={{ backgroundImage: `url('/imgs/slide1.webp')` }}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-banner" style={{ backgroundImage: `url('/imgs/slide2.webp')` }}></div>
      </Carousel.Item>
    </Carousel>
  );
}

const Home = () => {

  return (
    <div className="App">
      <main>
        <BannerCarousel />
        <div className="products">
          <h4>Destaques</h4>
          <div className="cards-table">
            {products.slice(0, 3).map((item, index) => 
              (
                <ProductCard key={index} item={item} />
              )
            )}
          </div>
        </div>
        <div className="mid-banner"></div>
        <div className="instagram">
          <img src="/imgs/insta.png" alt=""/>
          <p className="instagram-name">INSTAGRAM</p>
          <p className="instagram-desc">Estamos no instagram</p>
          <button className="instagram-button">SIGA-NOS</button>
        </div>
        <div className="informations">
          <div className="information-item">
            <img src="/imgs/exchange.svg" alt=""/>
            <p className="information-title">TROCAS</p>
            <p className="information-description">Dúvidas em relação à pedidos, diretamente em nosso whatsapp. O prazo para a solicitação de Trocas ou Devoluções é de 7 dias após o recebimento da compra.</p>
          </div>
          <div className="information-item">
            <img src="/imgs/security.svg" alt=""/>
            <p className="information-title">SEGURANÇA</p>
            <p className="information-description">Receba seu produto ou o seu dinheiro de volta.</p>
          </div>
          <div className="information-item">
            <img src="/imgs/truck.svg" alt=""/>
            <p className="information-title">TROCAS</p>
            <p className="information-description">O frete varia Em compras acima de R$400,00 o fretes é grátis.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <header className={`App-header ${isScrolled ? "scrolled" : ""}`}>
        <img src="/imgs/searchIcon.png" className="iconHeader" alt=""/>

        <div className="App-header-center">
          <img src="/imgs/searchIcon.png" alt=""/>
          <div>
            <a href="/">Inicio</a>
            <a href="/produtos">Produtos</a>
            <a href="/contato">Contato</a>
            <a href="/quemSomos">Quem Somos</a>
          </div>
        </div>

        <img src="/imgs/profile.svg" className="iconHeader" alt=""/>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="footer-items">
        <div>
          <h4>TROCAS E DEVOLUÇÕES</h4>
          <p>Políticas de Trocas</p>
          <p>Prazo de Entrega</p>
          <p>Formas de Pagamento</p>
          <p>Serviços de Entrega</p>
          <p>Central de Atendimento</p>
          <p>Meus Pedidos</p>
          <p>Cashback</p>
        </div>
        <div>
          <h4>INSTITUCIONAL</h4>
          <p>Quem Somos</p>
          <p>A Benedetta</p>
          <p>Política de Privacidade</p>
          <p>Termos e Condições</p>
          <p>Nossas Lojas</p>
          <p>Trabalhe Conosco</p>
        </div>
        <div>
          <h4>FALE CONOSCO</h4>
          <p>Whatsapp: (11) 99589-3611</p>
          <p>shop@benedetta.com.br</p>
          <p>De Segunda à Sexta</p>
          <p>Das 9h às 18h</p>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p>Ganhe desconto na primeira compra</p>
          <p>com o cupom <strong>BENEDETTA10</strong></p>
          <p>(10% na primeira compra)</p>
        </div>
      </div>
      <p style={{textAlign: 'center'}}>Copyright GON - 2024. Todos os direitos reservados.</p>
    </footer>

  )
}

const Produtos = () => {
  return (
    <div className="page-produtos">
      <div className="produtos-header">
        <h4>Produtos</h4>
        <button>Filtrar <img src="/imgs/filter.png" alt="" /></button>
      </div>
      <div className="cards-table">
        {products.map((item, index) => 
          (
            <ProductCard key={index} item={item} />
          )
        )}
      </div>
    </div>
  )
}

const QuemSomos = () => {
  return (
    <div className="quemSomos">
      <h4>Quem Somos</h4>
      <h5>
        Benedetta: Estilo que empodera.
      </h5>
      <p>
        A Benedetta é uma marca de roupas streetwear voltada, principalmente, para mulheres lésbicas
        que desafiam os padrões de feminilidade impostos pela sociedade.
        O objetivo da marca é oferecer uma moda urbana, confortável e despojada que não apenas atenda
        ao estilo dessas mulheres, mas também enalteça seus corpos e suas vivências. A proposta da
        Benedetta é criar peças que permitam que elas expressem sua autenticidade sem comprometer seu
        conforto e identidade.
      </p>
    </div>
  )
}

const Contato = () => {
  return (
    <div className="quemSomos">
      <h4 style={{marginBottom: '30px'}}>Contato</h4>
      <p style={{marginBottom: '8px', fontWeight: 'normal'}}>
      <b>Telefone:</b> (11) 99589-3611
      </p>
      <p style={{marginBottom: '8px', fontWeight: 'normal'}}>
      <b>Email:</b> shop@benedetta.com.br
      </p >
      <p>
        De Segunda à Sexta
        Das 9h às 18h
      </p>
    </div>
  )
}


export default App;
