// import instance from '../config';
// import axiosInstance from '../axiosConfig';
import axios from 'axios';
import api from '../api';

// import AxiosInstance from '../config';
import endpoint from '../endpoint';

export const getMarketData = async () => {
  try {
    const response = await axios.get(endpoint.getAllMarketData());
    console.log(response, 'responseeeeeeeee');
    return response;
  } catch (err) {
    console.log(err, 'market data error');
    return err;
  }
};

export const getTickerData = async () => {
  try {
    const response = await axios.get(endpoint.getAll24HrsTickerData());
    return response.data;
    // return [];
  } catch (err) {
    console.log(err, 'error');
    return err;
  }
};
export const getCurrency = async () => {
  try {
    const response = await axios.get(endpoint.getAllCurrency());
    return response;
    // return [];
  } catch (err) {
    console.log(err, 'error');
    return err;
  }
};
export const getExchangeInfoService = async () => {
  try {
    const response = await axios.get(endpoint.getAllExchangeInfo());
    return response;
    // return [];
  } catch (err) {
    console.log(err, 'exchange info error');
    return err;
  }
};

export const wssMarketTicker = () => {
  try {
    let websocket = new WebSocket(endpoint.wssAllMarketTicker());
    return response.data;
  } catch (err) {
    console.log(err, 'error');
    return err;
  }
};
