// Scss
import "./Accueil.scss";

import Listings from "../../components/Listings/Listings";
import Hero from "../../components/Hero/Hero";

const Accueil = ({ dataCryptocurrencyListingsLatest, dataGlobalMetrics }) => {
  console.log(dataGlobalMetrics);

  return (
    <div className="accueil">
      <Hero
        dataGlobalMetrics={dataGlobalMetrics}
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
      <Listings
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
    </div>
  );
};
export default Accueil;
