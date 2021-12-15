// Scss
import "./Accueil.scss";

import ListingsCryptocurrencies from "../../components/Listings/ListingsCryptocurrencies/ListingsCryptocurrencies";
import HeroCryptocurrencies from "../../components/Hero/HeroCryptocurrencies/HeroCryptocurrencies";

const Accueil = ({ dataCryptocurrencyListingsLatest, dataGlobalMetrics }) => {
  return (
    <div className="accueil">
      <HeroCryptocurrencies
        dataGlobalMetrics={dataGlobalMetrics}
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
      <ListingsCryptocurrencies
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
    </div>
  );
};
export default Accueil;
