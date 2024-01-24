import React, { useContext, useRef } from 'react';
import { CryptoContext } from '../Context/cryptocontext';
import "./filter.css"
import Search from './Search';
const Filters = () => {
   const {setcurrency}= useContext(CryptoContext)
  //  ,setSortBy
    const currencyRef = useRef(null)

    const handleCurrencySubmit=(e)=>{
        e.preventDefault();
        let val=currencyRef.current.value;
        setcurrency(val);
        currencyRef.current.value="";
    }
    // const handleSortBy=(e)=>{
    //     e.preventDefault();
    //     let val=e.target.value;
    //     console.log(val);
    //     setSortBy(val);
    // }

    return (
      <>
      <div className="filter">
        <div>
          <Search />
        </div>
        <div className='currency'>
          <form className='curform' onSubmit={handleCurrencySubmit}>
          <label htmlFor='currency'>currency:</label>
            <input type="text" placeholder="usd"  name='currency'ref={currencyRef}/>
            <button type="submit">submit</button>
          </form>
        </div>
        <div className='sortclass'>
            <span >Sort By:</span>
            {/* onClick={handleSortBy} */}
             <select name='sortby'   >
               <option value=" market_cap_asc"> market_cap_asc</option>
                <option value=" market_cap_desc">market_cap_desc</option>
                <option value=" volume_asc">volume_asc</option>
                <option value=" id_asc">id_asc</option>
                <option value=" volume_desc">volume_desc</option>
                <option value=" id_desc">id_desc</option>
            </select> 
        </div> 
      
      </div>
      </>
    );
};

export default Filters;