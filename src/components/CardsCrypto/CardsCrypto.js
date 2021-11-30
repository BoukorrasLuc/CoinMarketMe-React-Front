// Scss
import "./CardsCrypto.scss";

const CardsCrypto = ({ logo, name, quantité, price }) => {
  return (
    <div className="CardsCrypto">
      <div className="card">
        <div className="imgBx">
          <img src={logo} alt="" />
        </div>
        <div className="contentBx">
          <h2>{name}</h2>
          <div className="size">
            <h3>Quantité :</h3>
            &ensp;<span>{quantité}</span>
          </div>
          <div className="size">
            <h3>Prix Actuel :</h3>
            &ensp;<span>{price.toFixed(2)}</span>
          </div>
          <div className="size">
            <h3>Total USD :</h3>
            &ensp;<span>{quantité.toFixed(2) * price.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardsCrypto;
