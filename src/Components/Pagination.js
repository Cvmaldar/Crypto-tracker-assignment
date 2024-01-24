import React, { useContext } from 'react';
import "./pagination.css"

import { CryptoContext } from '../Context/cryptocontext';
const Pagination = () => {

   
    const {page,setPage,totalpages} = useContext(CryptoContext);
    let totalNumber=Math.ceil(totalpages/10);
    const next=()=>{
        if(page===totalNumber){
            return null
        }else{
            setPage(page+1)
        }
    }
    const prev=()=>{
        if(page===1){
            return null;
        }else{
            setPage(page-1);
        }
    }

    const multiStepNext=()=>{
        if(page+3>=totalNumber){
            setPage(totalNumber-1);
        }else{
            setPage(page+3);
        }
    }
   
    return (
      <>
        <div className="pagination">
          <ul>
            <li>
              <button onClick={prev}>
                <i class="fa-solid fa-angle-left"></i>
              </button>
            </li>
            {
                page-1!==0?(
                    
            <li>
              <button onClick={prev}>{page - 1}</button>
            </li>
                ):null
            }
            <li>
              <button disabled className="active">
                {page}
              </button>
            </li>
            {
                page+1!==totalNumber && page!==totalNumber?(
                    <li>
              <button onClick={next}>{page + 1}</button>
            </li>

                ):null
            }
            {page + 1 !== totalNumber && page !== totalNumber ? (
              <li onClick={multiStepNext} className="next">
                <button>........</button>
                
                
              </li>
            ) : null}
            {page !== totalNumber ? (
              <li>
                <button onClick={() => setPage(totalNumber)}>
                  {totalNumber}
                </button>
              </li>
            ) : null}
            <li>
              <button onClick={next}>
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </>
    );
};

export default Pagination;