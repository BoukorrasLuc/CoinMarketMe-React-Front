// Scss
import "../StockExchange/StockExchange.scss";

// Packages
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const StockExchange = ({ dataCoinMarketCap }) => {
  return (
    <>
      <header>
        <div>CoinMarketMe</div>
        <div>
          {dateFormat(
            dataCoinMarketCap.status.timestamp,
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
          {dataCoinMarketCap.data.map((crypto, id) => {
            const Price = crypto.quote.USD.price;
            const ChangeOneHours = crypto.quote.USD.percent_change_24h;

            if (ChangeOneHours <= 0) {
              <span style={{ color: "#FF4E50" }}>
                {ChangeOneHours.toFixed(2)}%
              </span>;
            } else {
              <span style={{ color: "#88C425" }}>
                {ChangeOneHours.toFixed(2)}%
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
                      Math.sign(ChangeOneHours) === -1 ? "#FF4E50" : "#88C425",
                  }}
                >
                  {ChangeOneHours.toFixed(2)}%
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
