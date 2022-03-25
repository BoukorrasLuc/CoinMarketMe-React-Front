// Scss
import "./Header.scss";

// Packages
import { Link } from "react-router-dom";

// Svg
import gas from "../../Asset/svg/gas.svg";
import usd from "../../Asset/svg/USD.svg";
import logo from "../../Asset/svg/coinmarketcap_1.svg";
import diamond from "../../Asset/svg/diamond-icon.svg";

// Img
import avatar from "../../Asset/img/61359449293ccc2c4bcf07c7.png";

// Function
import SeparatorComma from "../../Functions/SeparatorNumbComma";

const Header = ({ dataGlobalMetrics }) => {
  return (
    <div className="header">
      <div className="info">
        <div className="sous-info-one">
          <div>
            <span>Cryptos</span>
            <span>:</span>
            <span>
              {SeparatorComma(dataGlobalMetrics.data.total_cryptocurrencies)}
            </span>
          </div>
          <div>
            <span>Exchanges</span>
            <span>:</span>
            <span>{dataGlobalMetrics.data.active_exchanges}</span>
          </div>
          <div>
            <span>Market Cap</span>
            <span>:</span>
            <span>
              $
              {SeparatorComma(
                dataGlobalMetrics.data.quote.USD.total_market_cap.toFixed(2)
              )}
            </span>
          </div>
          <div>
            <span>24h Vol</span>
            <span>:</span>
            <span>
              $
              {SeparatorComma(
                dataGlobalMetrics.data.quote.USD.total_volume_24h
              )}
            </span>
          </div>
          <div>
            <span>Dominance</span>
            <span>:</span>
            <span>
              BTC: {dataGlobalMetrics.data.btc_dominance.toFixed(2)}% ETH:&nbsp;
              {dataGlobalMetrics.data.eth_dominance.toFixed(2)}%
            </span>
          </div>
          <div>
            <span>
              <img src={gas} alt="gas" />
            </span>

            <span>ETH Gas</span>
            <span>:</span>
            <button>
              <span>
                83 Gwei&nbsp;
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>
          </div>
        </div>

        <div className="sous-info-two">
          <div></div>
          <div>
            <span>English</span>
            <span>
              <i className="fas fa-sort-down"></i>
            </span>
          </div>
          <div>
            <span>
              <img src={usd} alt="usd" />
            </span>
            <span>USD</span>
            <span>
              <i className="fas fa-sort-down"></i>
            </span>
          </div>
          <div>
            <span>
              <i className="fas fa-moon"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="links">
        <a href="/">
          <img src={logo} alt="CoinMarketCap" />
        </a>
        <div className="content-links">
          <div className="sous-content-links">
            <div>
              <Link to="/">Cryptocurrencies</Link>
            </div>
            <div></div>
            <div>
              <Link to="/rankings-exchanges">Exchange</Link>
            </div>
            <div></div>
            <div>
              <Link to="/nft">NFT</Link>
            </div>
            <div></div>
            <div>
              <Link to="/portfolio-tracker">Porfolio</Link>
            </div>
            <div></div>
            <div>
              <Link to="/watchlist">Watchlist</Link>
            </div>
            <div></div>
            <div>
              <Link to="/">Calendars</Link>
            </div>
            <div></div>
            <div>
              <Link to="/">Products</Link>
            </div>
            <div></div>
            <div>
              <Link to="/">Learn</Link>
            </div>
          </div>
        </div>
        <div className="content-search-bar">
          <img src={diamond} alt="diamond" />

          <div>
            <img src={avatar} alt="avatar" />
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
