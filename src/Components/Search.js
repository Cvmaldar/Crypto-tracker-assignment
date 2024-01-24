import React, { useContext, useState } from 'react';
import debounce from "lodash.debounce";
import { CryptoContext } from '../Context/cryptocontext';
import "./search.css"

const SearchInput=({handleSearch})=>{
    const [searchText, setsearchText] = useState("");
    let {SearchData,setcoinSearch,setSearchData}=useContext(CryptoContext);
    const handleInput=(e)=>{
        e.preventDefault();
        let query=e.target.value;
        console.log(query);
        setsearchText(query);
        handleSearch(query);
    }
    const selectCoin=(coin)=>{
        setcoinSearch(coin);
        setsearchText("")
        setSearchData();
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        handleSearch(searchText);
    }
    return (
        <>
            <form className='search' onClick={handlesubmit} >
                <input type="text" name='search' placeholder='search ....' onChange={handleInput} value={searchText}/>
                <i  class="fa-solid fa-magnifying-glass"></i>
            </form>
            {
                searchText.length >0 ? (
                <ul className='coinres'>
               
                    {
                        SearchData? SearchData.map(coin =>{
                        return <li key={coin.id} className="coinsearch"  onClick={()=>selectCoin(coin.id)}>
                        <img src={coin.thumb} alt={coin.name}/>
                        <span>{coin.name}</span> 
                        </li>})
                        :<div className='spin'>
                          
                        </div>
                    }
                </ul>

                 ) :
                null
            }
        </>
    );
};

const Search = () => {
    
    let {getSearchResult}=useContext(CryptoContext);

    const debouncefunc=debounce(function(val){
        getSearchResult(val);
    },2000);
    
  return(
    <>
        <div className='searchinp'>
        <SearchInput handleSearch={debouncefunc}/>

        </div>
    </>
  );
};

export default Search;