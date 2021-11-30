// Scss
import "./Accueil.scss";

import Listings from "../../components/Listings/Listings";

const Accueil = ({ dataCoinMarketCap }) => {
  return (
    <div className="accueil">
      <Listings dataCoinMarketCap={dataCoinMarketCap} />
    </div>
  );
};
export default Accueil;
