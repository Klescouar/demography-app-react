import {GET_MORTALITY, ERROR_GET_MORTALITY} from '../actions/index'

export default function (state = [], action){
  switch (action.type) {
    case GET_MORTALITY:
      return [
        {
          country: action.payload.country,
          male: action.payload.male,
          female: action.payload.female
        }, ...state
      ]
    case ERROR_GET_MORTALITY:
      return action.error
  }
  return state
}
