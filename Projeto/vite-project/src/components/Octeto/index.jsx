import "./Octeto.css";
function Octeto() {
  return (
    <div className="Octeto">
      <p className="titulo">Our Products</p>

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
        {/**/}
      </div>
    </div>
  );
}

export default Octeto;
