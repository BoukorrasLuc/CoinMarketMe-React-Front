import "./App.scss";

// Packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";

// Datas
import MesCryptos from "./Data/MyCrypto.json";
import CoinMarketCap from "./Data/CoinMarketCap.json"; // Data CoinMarketCap

// Components
import StockExchange from "./components/StockExchange/StockExchange";

// Containers
import Accueil from "./containers/Accueil/Accueil";
import MyCrypto from "./containers/MyCrypto/MyCrypto";

function App() {
  const [dataCoinMarketCap, setdataCoinMarketCap] = useState(CoinMarketCap);
  const [dataInfo, setDataInfo] = useState({});
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
      // const responsePrice = await axios.get(
      //   "http://localhost:3000/cryptoPrice"
      // );
      // setDataPrice(responsePrice.data);

      const responseInfo = await axios.get("http://localhost:3000/cryptoInfo");
      setDataInfo(responseInfo.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <Router>
      <StockExchange dataCoinMarketCap={dataCoinMarketCap} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route
          path="/MyCrypto"
          element={
            <MyCrypto
              dataCoinMarketCap={dataCoinMarketCap}
              dataInfo={dataInfo}
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
