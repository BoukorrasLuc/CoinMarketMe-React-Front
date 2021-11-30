import "./Listings.scss";

const Listings = ({ dataCoinMarketCap }) => {
  console.log(dataCoinMarketCap);
  return (
    <div className="listings">
      <div className="info">
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>24h %</div>
        <div>7d %</div>
        <div>Market Cap</div>
        <div>Volume (24h)</div>
        <div>Circulating Supply</div>
      </div>

      {dataCoinMarketCap.data.map((crypto, id) => {
        const ChangeOneDay = crypto.quote.USD.percent_change_24h;
        const ChangeSevenDay = crypto.quote.USD.percent_change_7d;

        if (ChangeOneDay <= 0) {
          <span style={{ color: "#FF4E50" }}>{ChangeOneDay.toFixed(2)}%</span>;
        } else {
          <span style={{ color: "#88C425" }}>{ChangeOneDay.toFixed(2)}%</span>;
        }

        if (ChangeSevenDay <= 0) {
          <span style={{ color: "#FF4E50" }}>
            {ChangeSevenDay.toFixed(2)}%
          </span>;
        } else {
          <span style={{ color: "#88C425" }}>
            {ChangeSevenDay.toFixed(2)}%
          </span>;
        }

        return (
          <div className="crypto-monnaies" key={id}>
            <div>{crypto.cmc_rank}</div>
            <div>{crypto.name}</div>
            <div>$ {crypto.quote.USD.price.toFixed(2)}</div>
            <div
              style={{
                color: Math.sign(ChangeOneDay) === -1 ? "#FF4E50" : "#88C425",
              }}
            >
              {crypto.quote.USD.percent_change_24h.toFixed(2)}
            </div>
            <div
              style={{
                color: Math.sign(ChangeSevenDay) === -1 ? "#FF4E50" : "#88C425",
              }}
            >
              {crypto.quote.USD.percent_change_7d.toFixed(2)}
            </div>
            <div>$ {crypto.quote.USD.market_cap}</div>
            <div>$ {crypto.quote.USD.volume_24h}</div>
            <div>
              {crypto.circulating_supply} {crypto.symbol}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Listings;
