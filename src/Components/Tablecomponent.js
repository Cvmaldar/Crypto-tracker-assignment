import React, { useContext } from 'react';
import { CryptoContext } from '../Context/cryptocontext';
import "./table.css"
const Tablecomponent = () => {
    
    const {CryptoData,currency} = useContext(CryptoContext);
   
    return (
        <div className='table'>
        {
            CryptoData? <table>
                <thead>
                    <tr>
                        <th>asset</th>
                        <th>symbol</th>
                        <th>name</th>
                        <th>current price</th>
                        <th>total volume</th>
                        <th>market cap change</th>
                        <th>1H</th>
                        <th>24H</th>
                        <th>7D</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        CryptoData.map(data=>{
                        return(
    
                
                        <tr key={data.id}>
                        <td>
                        <img id='coinimage' src={data.image} alt={data.name}/> 
                        </td>
                        <td id='symbol'>{data.symbol}</td>
                        <td>{data.name}</td>
                        <td>
                            {
                                new Intl.NumberFormat("en-IN",{
                                    style:"currency",
                                    currency:currency
                                }).format(data.current_price)
                            
                            }
                        </td>
                        <td>{data.total_volume}</td>
                        <td>{data.market_cap_change_percentage_24h}%</td>
                        <td className={data.price_change_percentage_1h_in_currency>0 ? 'cgreen':'cred'}>{Number(data.price_change_percentage_1h_in_currency).toFixed(2)}</td>
                        <td className={data.price_change_percentage_24h_in_currency>0 ? 'cgreen':'cred'}>{Number(data.price_change_percentage_24h_in_currency).toFixed(2)}</td>
                        <td className={data.price_change_percentage_7d_in_currency>0 ? 'cgreen':'cred'}>{Number(data.price_change_percentage_7d_in_currency).toFixed(2)}</td>
                    </tr>
                
            
                        )
                    })
                    
                    }
                </tbody>
            </table>:null
        }
            
        </div>
    );
};

export default Tablecomponent;