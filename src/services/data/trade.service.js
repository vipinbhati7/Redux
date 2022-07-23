import api from '../api';
import axios from 'axios';
import endpoint from '../endpoint';

export const buyCryptoService = async payload => {
  try {
    const response = await api.post(endpoint.buyCrypto(), payload);
    console.log(response, 'buy crypto response');
    return response;
  } catch (err) {
    console.log(err, 'buy crypto error');
    return err;
  }
};
export const sellCryptoService = async payload => {
  try {
    const response = await api.post(endpoint.sellCrypto(), payload);
    console.log(response, 'sell crypto response');
    return response;
  } catch (err) {
    console.log(err, 'sell crypto error');
    return err;
  }
};
export const tradeHistoryService = async () => {
  try {
    const response = await api.post(endpoint.tradeHistory());
    console.log(response, 'sell crypto response');
    return response;
  } catch (err) {
    console.log(err, 'sell crypto error');
    return err;
  }
};
export const allOpenOrdersService = async () => {
  try {
    const response = await api.get(endpoint.allOpenOrders());
    console.log(response, 'all open orders serice response');
    return response;
  } catch (err) {
    console.log(err, 'all open orders error');
    return err;
  }
};

export const cancelOpenOrderService = async (orderId, symbol) => {
  try {
    const response = await api.delete(
      endpoint.cancelOpenOrder(orderId, symbol),
    );
    console.log(response, 'sell crypto response');
    return response;
  } catch (err) {
    console.log(err, 'sell crypto error');
    return err;
  }
};

export const allHistoryService = async () => {
  try {
    const response = await api.get(endpoint.allHistory());
    console.log(response, 'allHistory response');
    return response;
  } catch (err) {
    console.log(err, 'allHistory error');
    return err;
  }
};
export const getTickerSingleData = async payload => {
  try {
    const response = await axios.get(
      endpoint.getAll24HrsTickerSingleData(payload),
    );
    return response;
    // return [];
  } catch (err) {
    console.log(err, 'error');
    return err;
  }
};
