import {
  IATA_ORIGIN_CHANGED,
  IATA_DESTINY_CHANGED,
  DATE_DEPARTURE_CHANGED,
  DATE_ARRIVAL_CHANGED,
  AMOUNT_PEOPLE_CHANGED,
  FETCH_FLIGHTS,
  FETCH_FLIGHTS_SUCCESS,
  FETCH_FLIGHTS_FAIL,
} from './constants';

const INITIAL_STATE = {
  iataOrigin: '',
  iataDestiny: '',
  dateDeparture: '',
  dateArrival: '',
  amountPeople: '',
  flights: null,
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IATA_ORIGIN_CHANGED:
      return { ...state, iataOrigin: action.payload };
    case IATA_DESTINY_CHANGED:
      return { ...state, iataDestiny: action.payload };
    case DATE_DEPARTURE_CHANGED:
      return { ...state, dateDeparture: action.payload };
    case DATE_ARRIVAL_CHANGED:
      return { ...state, dateArrival: action.payload };
    case AMOUNT_PEOPLE_CHANGED:
      return { ...state, amountPeople: action.payload };
    case FETCH_FLIGHTS:
      return { ...state, loading: true };
    case FETCH_FLIGHTS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        flights: action.payload,
        loading: false,
      };
    case FETCH_FLIGHTS_FAIL:
      return { ...state, error: 'Deu ruim', loading: false };
    default:
      return state;
  }
};
