import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../Components/Coin/CoinInfo";
import LineChart from "../Components/Coin/LineChart";
import PriceToggle from "../Components/Coin/PriceToggle";
import SelectDays from "../Components/Coin/SelectDays";
import Footer from "../Components/Common/Footer";
import Header from '../Components/Common/Header';
import Loader from '../Components/Common/Loader';
import List from '../Components/Dashboard/List';
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";


function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });


  useEffect(() => {
   if(id){
    getData();
   }
  }, [id]);


   async function getData() {
    setLoading(true);
   try{
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoin, data); //For Coin Obj being passed in the List
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices, data);
        setLoading(false);
      }
    }
   }
   catch(error){
    console.log(error.message)
    setLoading(false);
   }
  };


  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices, coin);
      setLoading(false);
    }
  };


  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    if(newType==null){
        const prices = await getCoinPrices(id, days,priceType);
        if (prices.length > 0) {
            settingChartData(setChartData, prices);
            setLoading(false);
        }
    }
    else{
    setPriceType(newType);
    const prices = await getCoinPrices(id, days,newType);
    // console.log("new", newType);

        if (prices.length > 0) {
            settingChartData(setChartData, prices);
            setLoading(false);
        }
    }
  };


  return (
    <div>
      <Header />
      {loading || !coin?.id || !chartData ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coin} delay={0.1} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo name={coin.name} desc={coin.desc} />
        </>
      )}
      <Footer />
    </div>
  );
}


export default CoinPage;
