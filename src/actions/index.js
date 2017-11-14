import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ERROR_GET_COUNTRIES = 'ERROR_GET_COUNTRIES'
export const GET_MORTALITY = 'GET_MORTALITY';
export const ERROR_GET_MORTALITY = 'ERROR_GET_MORTALITY'

const API_END_POINT = 'http://api.population.io:80/1.0';
const DEFAULT_PARAMS = '25/today';

export function getCountries(){
  return (dispatch) => {
    axios(`${API_END_POINT}/countries`).then((res) => {
      dispatch({type: GET_COUNTRIES, payload: res.data.countries})
    }).catch((err) => {
      dispatch({type: ERROR_GET_COUNTRIES, error: err.response.data.detail});
    })
  }
}

export function getMortality(country){
  return (dispatch) => {
    axios(`${API_END_POINT}/mortality-distribution/${country}/male/${DEFAULT_PARAMS}`).then((resMale) => {
      axios(`${API_END_POINT}/mortality-distribution/${country}/female/${DEFAULT_PARAMS}`).then((resFemale) => {
        dispatch({type: GET_MORTALITY, payload: {country: country, male : resMale.data.mortality_distribution, female: resFemale.data.mortality_distribution}})
      })
    }).catch((err) => {
      dispatch({type: ERROR_GET_MORTALITY, error: err.response.data.detail});
    })
  }
}
