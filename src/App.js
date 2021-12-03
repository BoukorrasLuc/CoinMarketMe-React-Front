import "./App.scss";

// Packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";

// Datas
import MesCryptos from "./Data/MyCrypto.json";
// import cryptocurrencyListingsLatest from "./Data-CoinMarketCap/cryptocurrency-listings-latest.json"; // Data CoinMarketCap Cryptocurrency Listings Latest
// import cryptocurrencyInfo from "./Data-CoinMarketCap/cryptocurrency-info.json"; // Data CoinMarketCap Cryptocurrency Info

// Components
import StockExchange from "./components/StockExchange/StockExchange";

// Containers
import Accueil from "./containers/Accueil/Accueil";
import MyCrypto from "./containers/MyCrypto/MyCrypto";

function App() {
  const [
    dataCryptocurrencyListingsLatest,
    setDataCryptocurrencyListingsLatest,
  ] = useState({});

  const [dataCryptocurrencyInfo, setDataCryptocurrencyInfo] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  dateFormat.i18n = {
    dayNames: [
      "Dim",
      "Lun",
      "Mar",
      "Mer",
      "Jeu",
      "Ven",
      "Sam",
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Avr",
      "Mai",
      "Jui",
      "Juil",
      "Aou",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
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

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <Router>
      <StockExchange
        dataCryptocurrencyListingsLatest={dataCryptocurrencyListingsLatest}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Accueil
              dataCryptocurrencyListingsLatest={
                dataCryptocurrencyListingsLatest
              }
            />
          }
        />
        <Route
          path="/MyCrypto"
          element={
            <MyCrypto
              dataCryptocurrencyListingsLatest={
                dataCryptocurrencyListingsLatest
              }
              dataCryptocurrencyInfo={dataCryptocurrencyInfo}
              MesCryptos={MesCryptos}
            />
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
