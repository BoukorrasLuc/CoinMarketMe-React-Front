// Scss
import "./Accueil.scss";

import Listings from "../../components/Listings/Listings";

const Accueil = ({ dataCryptocurrencyListingsLatest }) => {
  return (
    <div className="accueil">
      <Listings
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
    </div>
  );
};
export default Accueil;
