// Scss
import "./Navbar.scss";

// Packages
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="watPort">
        <NavLink to="/">
          <button>
            <span>
              <i className="far fa-star"></i>
            </span>
            <span>Watchlist</span>
          </button>
        </NavLink>
        <NavLink to="/portfolio-tracker">
          <button>
            <span>
              <i className="fas fa-chart-pie"></i>
            </span>
            <span>Portfolio</span>
          </button>
        </NavLink>
        <div></div>
      </div>

      <div className="roads">
        <NavLink to="/" className="currency" activeclassname="active">
          <button>Cryptocurrencies</button>
        </NavLink>
        <NavLink
          to="/cryptocurrency-category"
          className="categories"
          activeclassname="active"
        >
          <button>Categories</button>
        </NavLink>

        <NavLink to="/view/defi" className="defi" activeclassname="active">
          <button>DeFi</button>
        </NavLink>
        <NavLink
          to="/view/collectibles-nfts"
          className="nft"
          activeclassname="active"
        >
          <button>NFT</button>
        </NavLink>
        <NavLink
          to="/view/metaverse/"
          className="metaverse"
          activeclassname="active"
        >
          <button>Metaverse</button>
        </NavLink>
        <NavLink
          to="/view/polkadot-ecosystem/"
          className="polkadot"
          activeclassname="active"
        >
          <button>Polkadot</button>
        </NavLink>
        <NavLink
          to="/view/binance-smart-chain/"
          className="bsc"
          activeclassname="active"
        >
          <button>BSC</button>
        </NavLink>
        <NavLink
          to="/view/solana-ecosystem/"
          className="solana"
          activeclassname="active"
        >
          <button>Solana</button>
        </NavLink>
        <NavLink
          to="/view/avalanche-ecosystem/"
          className="avalanche"
          activeclassname="active"
        >
          <button>Avalanche</button>
        </NavLink>
      </div>
      <div className="table-control">
        <div>
          <p>Show Rows</p>
          <div>
            100
            <span>
              <i className="fas fa-sort-down"></i>
            </span>
          </div>
        </div>

        <div>
          <button>
            <span>
              <i className="fas fa-sliders-h"></i>
            </span>
            Filters
          </button>

          <button>
            <span>
              <i className="fas fa-grip-horizontal"></i>
            </span>
            Customize
          </button>
          <button>
            <span>
              <i className="fas fa-bars"></i>
            </span>
            <span>
              <i className="fas fa-border-all"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
