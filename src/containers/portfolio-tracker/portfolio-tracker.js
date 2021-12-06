// Scss
import "./portfolio-tracker.scss";

// Components
import CardsCrypto from "../../components/CardsCrypto/CardsCrypto";

const MyCrypto = ({
  dataCryptocurrencyListingsLatest,
  dataCryptocurrencyInfo,
  MesCryptos,
}) => {
  // const saveStateToLocalStorage = () => {
  //   localStorage.setItem("dataInfo", JSON.stringify(dataCryptocurrencyInfo));
  // };

  return (
    <div className="myCrypto">
      {/* <button onClick={saveStateToLocalStorage}>
        Save State to local storage\
      </button> */}

      {/* <CardsCrypto
        logo={dataCryptocurrencyInfo.data[2586].logo}
        name={MesCryptos.Crypto[0].name}
        price={dataCryptocurrencyListingsLatest.data[122].quote.USD.price}
        quantité={MesCryptos.Crypto[0].Quantité}
      />
      <CardsCrypto
        logo={dataCryptocurrencyInfo.data[2586].logo}
        name={MesCryptos.Crypto[0].name}
        price={dataCryptocurrencyListingsLatest.data[122].quote.USD.price}
        quantité={MesCryptos.Crypto[0].Quantité}
      /> */}
    </div>
  );
};

export default MyCrypto;
