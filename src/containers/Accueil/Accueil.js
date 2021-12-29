// Scss
import "./Accueil.scss";

import ListingsCryptocurrencies from "../../components/Listings/ListingsCryptocurrencies/ListingsCryptocurrencies";
import HeroCryptocurrencies from "../../components/Hero/HeroCryptocurrencies/HeroCryptocurrencies";

const Accueil = ({
  dataCryptocurrencyListingsLatest,
  dataGlobalMetrics,
  currentPage,
  postsPerPage,
  setCurrentPage,
}) => {
  return (
    <div className="accueil">
      <HeroCryptocurrencies
        dataGlobalMetrics={dataGlobalMetrics}
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
      <ListingsCryptocurrencies
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default Accueil;
