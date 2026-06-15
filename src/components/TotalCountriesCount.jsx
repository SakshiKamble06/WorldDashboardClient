import React, { useEffect, useState } from 'react'
import { getTotalCountries } from '../api/api'


const TotalContriesCount = () => {
    const [totalCountries, setTotalCountry] = useState()

    async function fetchData(){
        const res = await getTotalCountries()
        setTotalCountry(res)
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
  <div className="card stats-card country-card">
    <div className="card-body">
      <h5 className="card-title">🏳️ Total Countries</h5>

      <h1 className="card-number">
        {totalCountries}
      </h1>

      <p className="card-text">
        Countries in Database
      </p>
    </div>
  </div>
);
}

export default TotalContriesCount