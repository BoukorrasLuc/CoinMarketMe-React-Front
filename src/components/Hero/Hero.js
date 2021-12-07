// Scss
import "./Hero.scss";

// Img
import img1 from "../../Asset/img/1638237499619_Webp.net-compress-image.jpg";
import img2 from "../../Asset/img/1638574368329_Metaverse Real Estate (1).jpg";
import img3 from "../../Asset/img/1638538086375_Airdrop-Sandbox-Graphic-280x136.jpg";
import img4 from "../../Asset/img/1638532906356_Meta image 280x136.png";
import img5 from "../../Asset/img/1631754270064_Frame 48.png";

// Fucntion
import SeparatorPoint from "../../Functions/SeparatorNumbPoint";
import SeparatorComma from "../../Functions/SeparatorNumbComma";

const Hero = ({ dataGlobalMetrics, dataCryptocurrencyListingsLatest }) => {
  let totalMarketCapYesterdayPercentageChange;
  if (
    dataGlobalMetrics.data.quote.USD
      .total_market_cap_yesterday_percentage_change < 0
  ) {
    totalMarketCapYesterdayPercentageChange = (
      <div className="contentTotalMarketCapYesterdayPercentageChange">
        a decrease of&nbsp;
        <div style={{ color: "#ea3943" }}>
          <i className="fas fa-sort-down"></i>
          {dataGlobalMetrics.data.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(
            2
          )}
          %
        </div>
        over the last day
      </div>
    );
  } else {
    totalMarketCapYesterdayPercentageChange = (
      <div className="contentTotalMarketCapYesterdayPercentageChange">
        &nbsp;a&nbsp;
        <div style={{ color: "#16c784" }}>
          <i className="fas fa-sort-up"></i>
          &nbsp;
          {dataGlobalMetrics.data.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(
            2
          )}
          %
        </div>
        &nbsp;increase over the last day
      </div>
    );
  }

  let totalVolume24hYesterdayPercentageChange;

  if (
    dataGlobalMetrics.data.quote.USD
      .total_volume_24h_yesterday_percentage_change < 0
  ) {
    totalVolume24hYesterdayPercentageChange = (
      <div className="contentTotalVolume24hYesterdayPercentageChange">
        <div style={{ color: "#ea3943" }}>
          <i className="fas fa-sort-down"></i>&nbsp;
          <div>
            {dataGlobalMetrics.data.quote.USD.total_volume_24h_yesterday_percentage_change.toFixed(
              2
            )}
            %
          </div>
        </div>
        &nbsp;decrease
      </div>
    );
  } else {
    totalVolume24hYesterdayPercentageChange = (
      <div className="contentTotalVolume24hYesterdayPercentageChange">
        <div style={{ color: "#16c784" }}>
          <i className="fas fa-sort-up"></i>
          &nbsp;
          {dataGlobalMetrics.data.quote.USD.total_volume_24h_yesterday_percentage_change.toFixed(
            2
          )}
          %
        </div>
        &nbsp;increase
      </div>
    );
  }

  let btcDominance24hPercentageChange;

  if (dataGlobalMetrics.data.btc_dominance_24h_percentage_change < 0) {
    btcDominance24hPercentageChange = (
      <div className="contentBtcDominance24hPercentageChange">
        &nbsp;a decrease of&nbsp;
        <div style={{ color: "#ea3943" }}>
          <i className="fas fa-sort-down"></i>&nbsp;
          <div>
            {dataGlobalMetrics.data.btc_dominance_24h_percentage_change
              .toFixed(2)
              .replace(/[-]/g, "")}
            %&nbsp;
          </div>
        </div>
      </div>
    );
  } else {
    btcDominance24hPercentageChange = (
      <div className="contentBtcDominance24hPercentageChange">
        &nbsp;increase of&nbsp;
        <div style={{ color: "#16c784" }}>
          <i className="fas fa-sort-up"></i>&nbsp;
          {dataGlobalMetrics.data.btc_dominance_24h_percentage_change
            .toFixed(2)
            .replace(/[+]/g, "")}
          %
        </div>
      </div>
    );
  }

  return (
    <div className="hero">
      <div className="carrousel">
        <div className="one">
          <img src={img1} alt="" />

          <span>Crypto Report</span>
          <span>Report: A Glimpse Into Crypto</span>
        </div>
        <div className="two">
          <img src={img2} alt="" />

          <span>Crypto Tutorials</span>
          <span>Metaverse Real Estate</span>
        </div>
        <div className="three">
          <img src={img3} alt="" />
          <span>Token Airdrop</span>
          <span>$130K of 10 Alpha Pass Airdrop!</span>
        </div>
        <div className="four">
          <img src={img4} alt="" />
          <span>Learn & Earn</span>
          <span>Join $400K NEAR Learning Campaign!</span>
        </div>
        <div className="five">
          <img src={img5} alt="" />
          <span>Podcast</span>
          <span>Podcast: BTC Misses Price Target</span>
        </div>
      </div>
      <div className="todays-cryptocurrency-price">
        <div className="title">Today's Cryptocurrency Prices by Market Cap</div>

        <span className="firstText">
          The global crypto market cap is&nbsp;
          <span className="total_market_cap">
            $
            {(
              dataGlobalMetrics.data.quote.USD.total_market_cap / 1000000000000
            ).toFixed(2)}
            T
          </span>
          ,
          <span className="total_market_cap_pourcentage">
            {totalMarketCapYesterdayPercentageChange}
          </span>
          .
        </span>
        <span>
          <span>Read Less</span>
        </span>
        <div className="secondText">
          The total crypto market volume over the last 24 hours is&nbsp;
          <span className="total_volume_24h">
            $
            {SeparatorPoint(
              Math.round(
                dataGlobalMetrics.data.quote.USD.total_volume_24h / 10000000
              )
            )}
            B
          </span>
          , which makes a {totalVolume24hYesterdayPercentageChange}. The total
          volume in DeFi is currently
          <span className="defi_market_cap_volume">
            &nbsp;$
            {(dataGlobalMetrics.data.defi_volume_24h / 1000000000).toFixed(2)}B
          </span>
          ,&nbsp;
          <span className="defi_market_cap_pourcentage">
            {(
              (dataGlobalMetrics.data.defi_volume_24h * 100) /
              dataGlobalMetrics.data.quote.USD.total_volume_24h
            ).toFixed(2)}
            %
          </span>
          &nbsp;of the total crypto market 24-hour volume. The volume of all
          stable coins is now&nbsp;
          <span className="stablecoin_market_cap_volume">
            $
            {(
              dataGlobalMetrics.data.stablecoin_volume_24h / 1000000000
            ).toFixed(2)}
            B
          </span>
          , which is&nbsp;
          <span className="stablecoin_market_cap_pourcentage">
            {(
              (dataGlobalMetrics.data.stablecoin_volume_24h * 100) /
              dataGlobalMetrics.data.quote.USD.total_volume_24h
            ).toFixed(2)}
            %
          </span>
          &nbsp;of the total crypto market 24-hour volume.
        </div>
        <div className="threeText">
          <div>
            Bitcoin's price is currently&nbsp;
            <span className="btc_price">
              $
              {SeparatorComma(
                dataCryptocurrencyListingsLatest.data[0].quote.USD.price.toFixed(
                  2
                )
              )}
              .
            </span>
          </div>
          <div>
            Bitcoin's dominance is currently&nbsp;
            <span className="btc_dominance">
              {dataGlobalMetrics.data.btc_dominance.toFixed(2)}%
            </span>
            , {btcDominance24hPercentageChange} over the day.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
