import React, { useContext, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useParams } from 'react-router-dom';
import { CryptoContext } from '../Context/cryptocontext';
import "./Chart.css";

const Chart = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [days, setDays] = useState(30);
 let {CryptoData} = useContext(CryptoContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
        const result = await response.json();

       
        setData(result.prices.map(([timestamp, value]) => ({
          date: new Date(timestamp).toLocaleDateString(), 
          value,
        })));

       
        const actualDays = result.prices.length;
        setDays(actualDays);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, days]); 
  const selectedCoinData = CryptoData.find(coin => coin.id === id);
  return (
    <>
     <div className='data'>
     
    <div>
    {selectedCoinData ? (
      <ul>
        <li>
          <img id='coinimage' src={selectedCoinData.image} alt={selectedCoinData.name} />
        </li>
        <li>Symbol of the coin:{selectedCoinData.symbol}</li>
        <li >Coin Name:{selectedCoinData.name}</li>
        <li>
        current price of the coin
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "usd"
          }).format(selectedCoinData.current_price)}
        </li>
        <li>Total Volume of the coin:{selectedCoinData.total_volume}</li>
        
      </ul>
    ) : (
      <p>No data found for the selected coin.</p>
    )}
  </div>
    </div>
    <div className='chart'>
    <h1>All Info About <span className="color">{id}</span> Coin</h1>
      <h2>Line Chart</h2>
      <p>Showing data for the last {days} days</p>
      <LineChart className='linechart'
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
   
      
    </>
  );
};

export default Chart;
