import React, { useEffect, useState } from 'react'
import { getTotalCountries } from '../api/api'

// import './Dashboard.css';

const LargestCity = () => {

    const[LargeCity,setLargeCity]=useState()

    async function fetchData(){
        const res=await getTotalCountries()
        setLargeCity(res)
    }

    useEffect(()=>{
        fetchData()
    },[])

 return (
  <div className="card stats-card largest-city-card">
    <div className="card-body">
      <h5 className="card-title">🏢 Largest City</h5>

      <h1 className="card-number">
        {LargeCity}
      </h1>

      <p className="card-text">
        Largest City
      </p>
    </div>
  </div>
);
}

export default LargestCity