// Scss
import "../StockExchange/StockExchange.scss";

// Packages
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const StockExchange = ({ dataCryptocurrencyListingsLatest }) => {
  return (
    <>
      <header>
        <div>CoinMarketMe</div>
        <div>
          {dateFormat(
            dataCryptocurrencyListingsLatest.status.timestamp,
            `d mmmm yyyy à HH"h"MM`
          )}
        </div>
      </header>

      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/MyCrypto">Mes Crypto-monnaies</Link>
      </div>

      <section className="Scroll-Stock-Exchange">
        <div className="Effect">
          {dataCryptocurrencyListingsLatest.data.map((crypto, id) => {
            const Price = crypto.quote.USD.price;
            const ChangeOneDay = crypto.quote.USD.percent_change_24h;

            if (ChangeOneDay <= 0) {
              <span style={{ color: "#FF4E50" }}>
                {ChangeOneDay.toFixed(2)}%
              </span>;
            } else {
              <span style={{ color: "#88C425" }}>
                {ChangeOneDay.toFixed(2)}%
              </span>;
            }

            return (
              <div key={id} className="Crypto">
                {/* <span>{crypto.cmc_rank}</span>&ensp; */}
                <span>{crypto.name}</span>&ensp;
                <span>{Price.toFixed(2)} $</span>&ensp;
                <span
                  style={{
                    color:
                      Math.sign(ChangeOneDay) === -1 ? "#FF4E50" : "#88C425",
                  }}
                >
                  {ChangeOneDay.toFixed(2)}%
                </span>
                &ensp;
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default StockExchange;
