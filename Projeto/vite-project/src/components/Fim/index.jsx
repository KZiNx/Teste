import "./Fim.css";
function Fim() {
  return (
    <div className="Fim">
      <div className="column">
        <div className="Grupo"> 
          <p className="top">Funiro</p>
          <p className="local">400 University Drive Suite 200 coral</p>
          <p className="local">Gables,</p>
          <p className="local">FL 33134 USA</p>
        </div>
        <div className="links">
          <p className="link">Links</p>
          <p className="complexo">Home</p>
          <p className="complexo">Shop</p>
          <p className="complexo">About</p>
          <p className="complexo">Contact</p>
        </div>
        <div className="links">
          <p className="link">Help</p>
          <p className="complexo">Payment Options</p>
          <p className="complexo">Returns</p>
          <p className="complexo">Privacy Policies</p>
        </div>
        <div className="links">
          <p className="link2">Newsletter</p>
          <p className="desce">Enter Your Email Address</p>
          <img className="imagem_linha1" src="./src/assets/images/line1.png" alt="Logo" />
        </div>
        <div className="End">
          <p className="final">SUBSCRIBE</p>
          <img className="imagem_linha2" src="./src/assets/images/line2.png" alt="Logo" />
        </div>
      </div>
      <img className="imagem_linha3" src="./src/assets/images/line3.png" alt="Logo" />
      <p className="finalfinal">2023 Funiro. All Rights Reserved</p>
    </div>
  );
}

export default Fim;
