import React from 'react';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalPop from './components/TotalPop';
import TopTenPopCountries from './components/TopTenPopCountries';
import TopTenLeastPopCountries from './components/TopTenLeastPopCountries';
import TotalContriesCount from './components/TotalCountriesCount';
// import Averagepopulation from './components/Averagepopulation';
import PopulationByContinentChart from './components/PopulationByContinentChart';
import PopulationGreaterThan from './components/PopulationGreaterThan';
import PopulationLessThan from './components/PopulationLessThan';
import PopulationByCountries from './components/PopulationByCountries'
import TopTenLanguages from './components/TopTenLanguages';
import HighLifeExpectancy from './components/HighLifeExpectancy';
import LowLifeExpectancy from './components/LowLifeExpectancy';
import GDPCountries from './components/GDPCountries';
import TotalCities from './components/TotalCities';
import TotalLanguages from './components/TotalLanguages';
import LargestCity from './components/LargestCity';
import LanguageInCountry from './components/LanguageInCountry';
import AverageLifeExpectacnyAllCountries from './components/AverageLifeExpectancyAllCountries.jsx';
// import SpecificCityInfo from './components/SpecificCityInfo.jsx';
// import './components/dashboard.css'
// import './components/Table.css';
const App = () => {
  return (
    <>
      <Header />
      {/* Create Card  */}
 <div className="row g-3">
  <div className="col-lg col-md-6"><TotalPop /></div>
  <div className="col-lg col-md-6"><TotalContriesCount /></div>
  <div className="col-lg col-md-6"><TotalCities /></div>
  <div className="col-lg col-md-6"><TotalLanguages /></div>
  <div className="col-lg col-md-6"><LargestCity /></div>
</div>
  {/* <Averagepopulation /> */}

        {/* Chart  */}
        <div className="container-fluid mt-4">
  <div className="row g-4">
   <div className="col-xl-3 col-lg-6 col-md-6"> <PopulationByContinentChart /> </div>

    <div className="col-xl-3 col-lg-6 col-md-6"><PopulationByCountries /></div>

    <div className="col-xl-3 col-lg-6 col-md-6"><TopTenLanguages /></div>

    <div className="col-xl-3 col-lg-6 col-md-6"><AverageLifeExpectacnyAllCountries /></div>
  </div>
</div>

  {/* Table */}
      <div className="container-fluid mt-4">
  <div className="row g-3">

    <div className="col-xl col-lg-6 col-md-6 col-sm-12">
      <TopTenPopCountries />
    </div>

    <div className="col-xl col-lg-6 col-md-6 col-sm-12">
      <TopTenLeastPopCountries />
    </div>

    <div className="col-xl col-lg-6 col-md-6 col-sm-12">
      <HighLifeExpectancy />
    </div>

    <div className="col-xl col-lg-6 col-md-6 col-sm-12">
      <LowLifeExpectancy />
    </div>

    <div className="col-xl col-lg-6 col-md-6 col-sm-12">
      <GDPCountries />
    </div>

  </div>
</div>
        <PopulationGreaterThan/>
        <PopulationLessThan/>
        
      <LanguageInCountry/>

      {/* <SpecificCityInfo /> */}
    </>
  );
};

export default App;