import axios from "axios";
import axiosInstance from "./AxiosInstance";
//1 done
export async function getTotalPopulation(){
    const res=await axiosInstance.get('/getTotalPopulation')
    if(res.data.success){
    return res.data.tpopulation
    }
}
//2 done
export async function getTotalCountries() {
    const res=await axiosInstance.get('/getTotalCountries')
    if(res.data.success){
    return res.data. totalCountries
    }
}
//3 done
export async function getTotalNoOfcities() {
    const res=await axiosInstance.get('/getTotalNoOfcities')
    if(res.data.success){
    return res.data.totalCities
    }
}
//4 done 
export async function getLanguageSpokenWorldWide(){
    const res=await axiosInstance.get('/getLanguageSpokenWorldWide')
    if(res.data.success){
    return res.data.totalLanguages
    }
}
//5  done
export async function getLargestCity() {
    const res=await axiosInstance.get('/GetLargestCity')
    if(res.data.success){
    return res.data.city
    }
}
//6 done
export async function getTenPopulatedCountries() {

    const res = await axiosInstance.get('/getTenPopulatedCountries');

    if (res.data.success) {
        return res.data.countries;
    }

}
// 7 done
export async function getTenLeastPopulatedCountries() {

    const res = await axiosInstance.get('/getTenLeastPopulatedCountries');

    if (res.data.success) {
        return res.data.countries;
    }

}
// 8 done 
export async function getTopLanguages(){
    const res = await axiosInstance.get('/getTenMostSpokenLanguage');

    if(res.data.success){
        return res.data.languages;
    }
}
//9 done 
export async function getHighLifeExpectancy(){
    const res = await axiosInstance.get('/getCountriesWithHighLifeExpect');

    if(res.data.success){
        return res.data.countries;
    }
}

//10 done
export async function getLowLifeExpectancy(){
    const res = await axiosInstance.get('/getCountriesWithLowLifeExpect');

    if(res.data.success){
        return res.data.countries;
    }
}

//11  done
export async function getCountriesGDP(){
    const res = await axiosInstance.get('/getCountriesWithGDP');

    if(res.data.success){
        return res.data.countries;
    }
}
//12 done
export async function getTotalPopulationByContinent(){
    const res = await axiosInstance.get('/getTotalPopulationByContinent');

    console.log(res.data); 

    if(res.data.success){
        return res.data.data;
    }
}
//13
export async function getAveragePopulation() {
    const res=await axiosInstance.get('/getAveragePopulation');

    if(res.data.success){
        return res.data.averagePopulation
    }
}
//14 done
export async function getPopulationGreaterThan(value) {
    const res = await axiosInstance.post(
        "/getPopulationGreaterThanSpecificVal",
        {
            population: value,
        }
    );

    return res.data.result;
}
//15 done 
export async function getPopulationLessThanSpecificVal(value) {
    const res = await axiosInstance.post('/getPopulationLessThanSpecificVal', {
        population: value
    });

    if (res.data.success) {
        return res.data.result;
    }
}
//16 chart is not display it on hold
export async function getPopulationByCountries() {
  const res = await axiosInstance.get('/getPopulationByCountries');

  console.log(res.data);
  if (res.data.success) {
    return res.data.country;
  }
  return [];
}

//17 done
export async function getLanguageSpokenInCountry(country) {
    const res = await axiosInstance.get(`/getLanguageSpokenInCountry/${country}`);

    if (res.data.success) {
        return res.data.languages;
    }
}
//18 half done
export async function getAveLifeExpectancyAllCountries() {
    const res = await axiosInstance.get('/getAveLifeExpectancyAllCountries');

    if (res.data.success) {
        return res.data.avgLifeExpectancy;
    }
}
//19
export async function getSpecificCityinfo(city) {
    const res = await axiosInstance.get(`/getSpecificCityinfo/${city}`);

    if (res.data.success) {
        return res.data.cityInfo;
    }
}