// Scss
import "./ListingsCryptocurrencies.scss";

// Packages
import { useState } from "react";

// Components
import Navbar from "../../Navbar/Navbar";
import ProgressBar from "../../ProgressBar/ProgressBarCirculatingSupply";
import Pagination from "../../Pagination/Pagination";

// Function
import Separator from "../../../Functions/SeparatorNumbComma";

const ListingsCryptocurrencies = ({
  dataCryptocurrencyListingsLatest,
  currentPage,
  postsPerPage,
  setCurrentPage,
  setPostsPerPage,
  handlePostsPerPage,
  optionsPostsPerPage,
}) => {
  // Sort CmcRank
  let items = [dataCryptocurrencyListingsLatest.data];
  const [sortCmcRank, setSortCmcRack] = useState(true);

  const onClickHandlerCmcRank = () => {
    setSortCmcRack(!sortCmcRank);
  };

  if (sortCmcRank) {
    items[0].sort(function (a, b) {
      return a.cmc_rank - b.cmc_rank;
    });
  } else {
    items[0].sort(function (a, b) {
      return b.cmc_rank - a.cmc_rank;
    });
  }

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataCryptocurrencyListingsLatest.data.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div className="listings">
      <Navbar
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        handlePostsPerPage={handlePostsPerPage}
        optionsPostsPerPage={optionsPostsPerPage}
      />
      <div className="info">
        <div></div>
        <div onClick={onClickHandlerCmcRank}>
          <p>#</p>
        </div>
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>Price</p>
        </div>
        <div>
          <p>24h %</p>
        </div>
        <div>
          <p>7d %</p>
        </div>
        <div>
          <p>Market Cap</p>&nbsp;
          <i className="fas fa-info-circle"></i>
        </div>
        <div>
          <p>Volume (24h)</p>&nbsp;
          <i className="fas fa-info-circle"></i>
        </div>
        <div>
          <p>Circulating Supply</p>&nbsp;
          <i className="fas fa-info-circle"></i>
        </div>
        <div></div>
        <div></div>
      </div>

      {currentPosts.map((crypto, id) => {
        const ChangeOneDay = crypto.quote.USD.percent_change_24h;
        const ChangeSevenDay = crypto.quote.USD.percent_change_7d;

        if (ChangeOneDay <= 0) {
          <span style={{ color: "#FF4E50" }}>{ChangeOneDay.toFixed(2)}%</span>;
        } else {
          <span style={{ color: "#16c784" }}>{ChangeOneDay.toFixed(2)}%</span>;
        }

        if (ChangeSevenDay <= 0) {
          <span style={{ color: "#FF4E50" }}>
            {ChangeSevenDay.toFixed(2)}%
          </span>;
        } else {
          <span style={{ color: "#16c784" }}>
            {ChangeSevenDay.toFixed(2)}%
          </span>;
        }

        return (
          <div className="crypto-monnaies" key={id}>
            <div>
              <i className="far fa-star"></i>
            </div>
            <div>
              <p>{crypto.cmc_rank}</p>
            </div>
            <div>
              <div>
                <img
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`}
                  alt={crypto.name}
                />
                <div>
                  <p>{crypto.name}</p>
                  <div>
                    <div>1</div>
                    <p>{crypto.symbol}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>$ {crypto.quote.USD.price.toFixed(2)}</div>
            <div
              style={{
                color: Math.sign(ChangeOneDay) === -1 ? "#FF4E50" : "#16c784",
              }}
            >
              {crypto.quote.USD.percent_change_24h.toFixed(2)}%
            </div>
            <div
              style={{
                color: Math.sign(ChangeSevenDay) === -1 ? "#FF4E50" : "#16c784",
              }}
            >
              {crypto.quote.USD.percent_change_7d.toFixed(2)}%
            </div>
            <div>${Separator(crypto.quote.USD.market_cap.toFixed(0))}</div>
            <div>${Separator(crypto.quote.USD.volume_24h.toFixed(0))}</div>
            <div>
              <div>
                {Separator(crypto.circulating_supply.toFixed(0))}{" "}
                {crypto.symbol}
              </div>

              {crypto.max_supply !== null &&
                (crypto.circulating_supply * 100) / crypto.max_supply !== 100 &&
                crypto.max_supply > crypto.circulating_supply && (
                  <div>
                    <ProgressBar
                      percentage={(
                        (crypto.circulating_supply * 100) /
                        crypto.max_supply
                      ).toFixed(2)}
                    />
                  </div>
                )}
            </div>
            <div>
              {/* <img
                src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${crypto.id}.svg`}
                alt=""
              /> */}
            </div>
          </div>
        );
      })}
      <Pagination
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        handlePostsPerPage={handlePostsPerPage}
        optionsPostsPerPage={optionsPostsPerPage}
      />
    </div>
  );
};
export default ListingsCryptocurrencies;
