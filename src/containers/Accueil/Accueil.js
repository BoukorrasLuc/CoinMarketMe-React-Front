// Scss
import "./Accueil.scss";

import Listings from "../../components/Listings/Listings";
import Hero from "../../components/Hero/Hero";

const Accueil = ({ dataCryptocurrencyListingsLatest }) => {
  return (
    <div className="accueil">
      <Hero />
      <Listings
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
    </div>
  );
};
export default Accueil;
