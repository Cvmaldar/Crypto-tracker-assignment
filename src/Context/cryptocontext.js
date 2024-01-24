
//create context first 
// eliminates prop drilling
import { createContext, useEffect, useState } from "react";

export const CryptoContext=createContext({});

//create provider component



export const CryptoProvider=({children})=>{
  const [CryptoData, setCryptoData] = useState();
  const [SearchData, setSearchData] = useState();
  const [coinSearch, setcoinSearch] = useState("");
  const [currency, setcurrency] = useState("usd");
  // const [SortBy, setSortBy] = useState("market_cap_desc");

  const getCrypto = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      ).then(async(res) => res.json());
      console.log(data);
      setCryptoData(data);
    } catch (err) {
      console.log(err);
    }
  };
 
  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      ).then((res) => res.json());
      console.log(data);
      setSearchData(data.coins);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCrypto();
  
  }, [coinSearch,currency]);
  // ,SortBy

  return (
    <div>
      <CryptoContext.Provider
        value={{
          CryptoData,
          SearchData,
          getSearchResult,
          setcoinSearch,
          setSearchData,
          currency,
          setcurrency,
          // SortBy,setSortBy
        }}
      >
        {children}
      </CryptoContext.Provider>
    </div>
  );
}
