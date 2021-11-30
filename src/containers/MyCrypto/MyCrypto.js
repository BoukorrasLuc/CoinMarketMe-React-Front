// Scss
import "./MyCrypto.scss";

// Components
import CardsCrypto from "../../components/CardsCrypto/CardsCrypto";

const MyCrypto = ({ dataCoinMarketCap, dataInfo, MesCryptos }) => {
  return (
    <div className="myCrypto">
      <CardsCrypto
        logo={dataInfo.data[2586].logo}
        name={MesCryptos.Crypto[0].name}
        price={dataCoinMarketCap.data[122].quote.USD.price}
        quantité={MesCryptos.Crypto[0].Quantité}
      />
      <CardsCrypto
        logo={dataInfo.data[2586].logo}
        name={MesCryptos.Crypto[0].name}
        price={dataCoinMarketCap.data[122].quote.USD.price}
        quantité={MesCryptos.Crypto[0].Quantité}
      />
    </div>
  );
};

export default MyCrypto;
