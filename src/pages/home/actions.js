import axios from 'axios';

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

import {
  BASE_URL,
  APP_ID,
  APP_KEY,
} from '../../services/constants';

export const iataOriginChanged = (text) => {
  return (dispatch) => {
    dispatch({
      type: IATA_ORIGIN_CHANGED,
      payload: text,
    });
  };
};

export const iataDestinyChanged = (text) => {
  return (dispatch) => {
    dispatch({
      type: IATA_DESTINY_CHANGED,
      payload: text,
    });
  };
};

export const dateDepartureChanged = (text) => {
  return (dispatch) => {
    dispatch({
      type: DATE_DEPARTURE_CHANGED,
      payload: text,
    });
  };
};

export const dateArrivalChanged = (text) => {
  return (dispatch) => {
    dispatch({
      type: DATE_ARRIVAL_CHANGED,
      payload: text,
    });
  };
};

export const amountPeopleChanged = (number) => {
  return (dispatch) => {
    dispatch({
      type: AMOUNT_PEOPLE_CHANGED,
      payload: number,
    });
  };
};

export const searchTickets = (data) => {

  const departure = data.dateDeparture.split('/');
  const departureFormated = `${departure[2]}${departure[1]}${departure[0]}`;

  const arrival = data.dateArrival.split('/');
  const arrivalFormated = `${arrival[2]}${arrival[1]}${arrival[0]}`;


  return async (dispatch) => {
    dispatch({ type: FETCH_FLIGHTS });

    const response = await axios.get(`${BASE_URL}/search/?app_id=${APP_ID}&app_key=${APP_KEY}&format=json&source=${data.iataOrigin}&destination=${data.iataDestiny}&dateofdeparture=${departureFormated}&dateofarrival=${arrivalFormated}&seatingclass=E&adults=${data.amountPeople}&children=0&infants=0&counter=100`);

    dispatch({
      type: FETCH_FLIGHTS_SUCCESS,
      payload: response.data.data.onwardflights,
    });
  };
};
