import React, { useEffect, useState } from 'react'
import { getLanguageSpokenWorldWide } from '../api/api'


const TotalLanguages = () => {

    const[TotalLanguages,setTotalLanguages]=useState()

    async function fetchData(){
        const res=await getLanguageSpokenWorldWide()
        setTotalLanguages(res)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
  <div className="card stats-card language-card">
    <div className="card-body">
      <h5 className="card-title">🗣️ Total Languages</h5>

      <h1 className="card-number">
        {TotalLanguages?.toLocaleString()}
      </h1>

      <p className="card-text">
        Spoken Worldwide
      </p>
    </div>
  </div>
);
}

export default TotalLanguages