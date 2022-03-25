// Packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Header from "./components/Header/Header";

// Containers
import Accueil from "./containers/Accueil/Accueil";
import PortfolioTracker from "./containers/Portfolio-tracker/PortfolioTracker";
import RankingsExchanges from "./containers/Rankings-exchanges/RankingsExchanges";
import Nft from "./containers/Nft/Nft";
import CryptocurrencyCategory from "./containers/Cryptocurrency-category/CryptocurrencyCategory";
import ViewDefi from "./containers/View-defi/ViewDefi";
import ViewNft from "./containers/View-nft/ViewNft";
import ViewMetaverse from "./containers/View-metaverse/ViewMetaverse";
import ViewPolkadot from "./containers/View-polkadot/ViewPolkadot";
import ViewBsc from "./containers/View-bsc/ViewBsc";
import ViewSolana from "./containers/View-solana/ViewSolana";
import ViewAvalanche from "./containers/View-avalanche/ViewAvalanche";
import Watchlist from "./containers/Watchlist/Watchlist";

function App() {
  // Data
  const [
    dataCryptocurrencyListingsLatest,
    setDataCryptocurrencyListingsLatest,
  ] = useState({});

  const [dataCryptocurrencyInfo, setDataCryptocurrencyInfo] = useState({});
  const [dataGlobalMetrics, setDataGlobalMetrics] = useState({});
  const [dataCryptocurrencyTrendingLatest] = useState({});

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);

  const optionsPostsPerPage = [
    { value: "20", label: "20" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];

  const handlePostsPerPage = (e) => {
    setPostsPerPage(e.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseCryptocurrencyListingsLatest = await axios.get(
        "http://localhost:3000/cryptocurrencyListingsLatest"
      );
      setDataCryptocurrencyListingsLatest(
        responseCryptocurrencyListingsLatest.data
      );

      const responseCryptocurrencyInfo = await axios.get(
        "http://localhost:3000/cryptocurrencyInfo"
      );
      setDataCryptocurrencyInfo(responseCryptocurrencyInfo.data);

      const responseGlobalMetrics = await axios.get(
        "http://localhost:3000/globalMetrics"
      );
      setDataGlobalMetrics(responseGlobalMetrics.data);

      // const responseCryptocurrencyTrendingLatest = await axios.get(
      //   "http://localhost:3000/cryptocurrencyTrendingLatest"
      // );
      // setDataCryptocurrencyTrendingLatest(
      //   responseCryptocurrencyTrendingLatest.data
      // );

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <Router>
      <Header dataGlobalMetrics={dataGlobalMetrics} />
      <Routes>
        <Route
          path="/"
          element={
            <Accueil
              dataCryptocurrencyListingsLatest={
                dataCryptocurrencyListingsLatest
              }
              dataGlobalMetrics={dataGlobalMetrics}
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              setPostsPerPage={setPostsPerPage}
              handlePostsPerPage={handlePostsPerPage}
              optionsPostsPerPage={optionsPostsPerPage}
            />
          }
        />
        <Route
          path="/portfolio-tracker"
          element={
            <PortfolioTracker
              dataCryptocurrencyListingsLatest={
                dataCryptocurrencyListingsLatest
              }
              dataCryptocurrencyInfo={dataCryptocurrencyInfo}
              dataCryptocurrencyTrendingLatest={
                dataCryptocurrencyTrendingLatest
              }
            />
          }
        />
        <Route path="/rankings-exchanges" element={<RankingsExchanges />} />
        <Route path="/nft" element={<Nft />} />
        <Route
          path="/cryptocurrency-category"
          element={<CryptocurrencyCategory />}
        />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/view/defi" element={<ViewDefi />} />
        <Route path="/view/collectibles-nfts" element={<ViewNft />} />
        <Route path="/view/metaverse" element={<ViewMetaverse />} />
        <Route path="/view/polkadot-ecosystem" element={<ViewPolkadot />} />
        <Route path="/view/binance-smart-chain" element={<ViewBsc />} />
        <Route path="/view/solana-ecosystem" element={<ViewSolana />} />
        <Route path="/view/avalanche-ecosystem" element={<ViewAvalanche />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
