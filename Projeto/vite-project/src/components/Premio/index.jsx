import "./Premio.css";

function Premio() {
  return (
    <div className="allPremio">
      <div className="Cartas">
        <img className="imag" src="./src/assets/images/trofeu.png" />
        <div>
          <p className="primeiro">High Quality</p>
          <p className="segundo">crafted from top materials</p>
        </div>
      </div>
      <div className="Cartas">
        <img className="imag" src="./src/assets/images/selo.png" />
        <div>
          <p className="primeiro">Warranty Protection</p>
          <p className="segundo">Over 2 years</p>
        </div>
      </div>
      <div className="Cartas">
        <img className="imag" src="./src/assets/images/mao.png" />
        <div>
          <p className="primeiro">Free Shipping</p>
          <p className="segundo">Order over 150 $</p>
        </div>
      </div>
      <div className="Cartas">
        <img className="imag" src="./src/assets/images/suporte.png" />
        <div>
          <p className="primeiro">24 / 7 Support</p>
          <p className="segundo">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Premio;
