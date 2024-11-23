import React, { useState, useEffect } from "react"
import { products } from './products';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function App() {
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
  return (
    <div className="App">
      <header className={`App-header ${isScrolled ? "scrolled" : ""}`}>
          <img src="/imgs/searchIcon.png" className="iconHeader" alt=""/>

          <div className="App-header-center">
            <img src="/imgs/searchIcon.png" alt=""/>
            <div>
              <a href="/">Inicio</a>
              <a href="/produtos">Produtos</a>
              <a href="/">Contato</a>
              <a href="/">Quem Somos</a>
            </div>
          </div>

          <img src="/imgs/profile.svg" className="iconHeader" alt=""/>
      </header>
      <main>
        <BannerCarousel />
        <div className="cards-table">
          {products.map((item, index) => 
            (
              <ProductCard key={index} item={item} />
            )
          )}
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

export default App;
