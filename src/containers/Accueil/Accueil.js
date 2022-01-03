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
  setPostsPerPage,
  handlePostsPerPage,
  optionsPostsPerPage,
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
        setPostsPerPage={setPostsPerPage}
        handlePostsPerPage={handlePostsPerPage}
        optionsPostsPerPage={optionsPostsPerPage}
      />
    </div>
  );
};
export default Accueil;
