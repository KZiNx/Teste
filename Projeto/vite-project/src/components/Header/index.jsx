import "./header.css";

function header() {
  return (
    <div className="header">
      <div className="row">
        <img src="./src/assets/images/icon.png" alt="Logo" />
        <h2>Furniro</h2>
      </div>
      <div className="header1">
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="header2">
        <img src="./src/assets/images/carinha.png" alt="Logo" />
        <img src="./src/assets/images/lupa.png" alt="Logo" />
        <img src="./src/assets/images/coracao.png" alt="Logo" />
        <img src="./src/assets/images/carrinho.png" alt="Logo" />
      </div>
    </div>
  );
}

export default header;
