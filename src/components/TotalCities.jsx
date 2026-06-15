import React, { useEffect, useState } from 'react'
import { getTotalNoOfcities } from '../api/api'


const TotalCities = () => {

    const [totalCities,setTotalCities]=useState()

    async function fetchData() {
        const res=await getTotalNoOfcities()
        setTotalCities(res)
    }

    useEffect(()=>{
        fetchData()
    },[])
 return (
  <div className="card stats-card city-card">
    <div className="card-body">
      <h5 className="card-title">🏙️ Total Cities</h5>

      <h1 className="card-number">
        {totalCities}
      </h1>

      <p className="card-text">
        Cities in Database
      </p>
    </div>
  </div>
);
}

export default TotalCities