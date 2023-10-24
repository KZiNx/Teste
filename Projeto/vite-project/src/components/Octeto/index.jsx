import "./Octeto.css";
function Octeto() {
  return (
    <div className="Octeto">
      <p className="titulo-principal">Our Products</p>

      <div className="row">
        <div className="singular">
          <img src="./src/assets/images/image1.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Syltherine</p>
            <p className="texto">Stylish cafe chair</p>
            <div className="preco">
              <p className="titulo-preco">Rp 2.500.000</p>
              <p className="texto-preco">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./src/assets/images/image2.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Leviosa</p>
            <p className="texto">Stylish cafe chair</p>
            <div className="preco">
              <p className="titulo-preco">Rp 2.500.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./src/assets/images/image3.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Lolito</p>
            <p className="texto">Luxury big sofa</p>
            <div className="preco">
              <p className="titulo-preco">Rp 7.000.000</p>
              <p className="texto-preco">Rp 14.000.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./src/assets/images/image4.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Respira</p>
            <p className="texto">Outdoor bar table and stool</p>
            <div className="preco">
              <p className="titulo-preco">Rp 500.000</p>
            </div>
          </div>
        </div>
      </div>
      {/* separação */}
      <div className="row2">
        <div className="singular">
          <img src="./src/assets/images/image5.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Grifo</p>
            <p className="texto">Night lamp</p>
            <div className="preco">
              <p className="titulo-preco">Rp 1.500.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./src/assets/images/image6.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Muggo</p>
            <p className="texto">Small mug</p>
            <div className="preco">
              <p className="titulo-preco">Rp 150.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./src/assets/images/image7.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Pingky</p>
            <p className="texto">Cute bed set</p>
            <div className="preco">
              <p className="titulo-preco">Rp 7.000.000</p>
              <p className="texto-preco">Rp 14.000.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./src/assets/images/image8.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Potty</p>
            <p className="texto">Minimalist flower pot</p>
            <div className="preco">
              <p className="titulo-preco">Rp 500.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Octeto;
