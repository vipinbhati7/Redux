// import {getBaseUrl} from './api';

const BINANCE_API = 'https://api.binance.com';
const BASE_URL = 'http://18.185.21.24:8060';

export default {
  // getAllMarketData: () =>
  //   `https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list`,
  getAllMarketData: () => `${BASE_URL}/api/v1/symbol/getall`,
  getAll24HrsTickerData: () => `${BINANCE_API}/api/v3/ticker/24hr`,
  getAll24HrsTickerSingleData: symbol =>
    `${BINANCE_API}/api/v3/ticker/24hr?symbol=${symbol}`,
  getAllCurrency: () =>
    `https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency`,
  getAllExchangeInfo: () => `${BINANCE_API}/api/v3/exchangeInfo`,
  wssAllMarketTicker: () => `wss://stream.binance.com:9443/ws/!ticker@arr`,
  login: () => `${BASE_URL}/api/v1/login`,
  getRefreshToken: () => '/api/v1/refreshtoken',
  getAllFavourites: () => `/api/v1/favourite/get`,
  register: () => `${BASE_URL}/api/v1/register`,
  generateOTP: () => `${BASE_URL}/api/v1/mail/generateOTP`,
  validateOTP: () => `${BASE_URL}/api/v1/mail/validatOTP`,
  addFouvrite: () => `/api/v1/favourite/add`,
  deleteFavourite: id => `/api/v1/favourite/delete/${id}`,
  buyCrypto: () => `${BASE_URL}/api/v1/trade/create`,
  sellCrypto: () => `${BASE_URL}/api/v1/trade/create`,
  tradeHistory: () => ``,
  allOpenOrders: () => `${BASE_URL}/api/v1/trade/allOpenOrders`,
  allCryptoDetails: () => `${BASE_URL}/api/v1/trade/cryptoDetails`,
  cancelOpenOrder: (orderId, symbol) =>
    `${BASE_URL}/api/v1/trade/deleteById?id=${orderId}&symbol=${symbol}`,
  allHistory: () => `${BASE_URL}/api/v1/trade/getHistory`,
  getDepositAddress: mapperName =>
    `${BASE_URL}/api/v1/wallet/deposite/${mapperName}`,
  withdrawCrypto: () => `${BASE_URL}/api/v1/wallet/withdraw`,
  addTransaction: () => `${BASE_URL}/api/v1/transactions/add`,
};
