
//create context first 
// eliminates prop drilling
import { createContext, useEffect, useState } from "react";

export const CryptoContext=createContext({});

//create provider component



export const CryptoProvider=({children})=>{
  const [CryptoData, setCryptoData] = useState();
  const [SearchData, setSearchData] = useState();
  const [coinData, setCoinData] = useState();
  const [coinSearch, setcoinSearch] = useState("");
  const [currency, setcurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState(250);

  const getCrypto = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/list`
      ).then(async(res) => res.json()).then((json)=>json);
      console.log(data);
      setTotalPages(data.length);
    } catch (err) {
      console.log(err);
    }
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      ).then(async(res) => res.json()).then((json)=>json);
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
  const getCoinData = async (coinid) => {
    
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      )
        .then((res) => res.json())
        .then((json) => json);

      
      setCoinData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCrypto();
  }, [coinSearch,currency,sortBy,page]);
  

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
          sortBy,setSortBy,
          page, setPage,
          totalpages,getCoinData,
          coinData,
        }}
      >
        {children}
      </CryptoContext.Provider>
    </div>
  );
}
