import { useState , useEffect } from 'react';
import { getTotalPopulation } from '../api/api';

const TotalPop=()=>{
    const[totalPop, setTotalPop] = useState()

    async function fetchData(){
        const res =await getTotalPopulation()
        setTotalPop(res)
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(totalPop)
    return (
  <div className="card stats-card population-card">
    <div className="card-body">
      <h5 className="card-title">🌍 Total Population</h5>

      <h1 className="card-number">
        {totalPop?.toLocaleString()}
      </h1>

      <p className="card-text">
        World Population
      </p>
    </div>
  </div>
);

}
export default TotalPop