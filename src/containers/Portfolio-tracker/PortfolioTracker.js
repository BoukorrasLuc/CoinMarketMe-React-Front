// Scss
import "./PortfolioTracker.scss";

// Components
// import CardsCrypto from "../../components/CardsCrypto/CardsCrypto";

const PortfolioTracker = ({
  dataCryptocurrencyListingsLatest,
  dataCryptocurrencyInfo,
  MesCryptos,
  dataCryptocurrencyTrendingLatest
}) => {
  // const saveStateToLocalStorage = () => {
  //   localStorage.setItem("dataInfo", JSON.stringify(dataCryptocurrencyTrendingLatest));
  // };

  return (
    <div className="portfolio-tracker">
      Portfolio tracker
       {/* <button onClick={saveStateToLocalStorage}>
        Save State to local storage\
      </button>  */}
      {/* <CardsCrypto
        logo={dataCryptocurrencyInfo.data[2586].logo}
        name={MesCryptos.Crypto[0].name}
        price={dataCryptocurrencyListingsLatest.data[122].quote.USD.price}
        quantité={MesCryptos.Crypto[0].Quantité}
      />  */}
    </div>
  );
};

export default PortfolioTracker;
