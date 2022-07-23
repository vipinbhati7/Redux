import api from '../api';
import endpoint from '../endpoint';

export const allCryptoDetailsService = async payload => {
  try {
    const response = await api.get(endpoint.allCryptoDetails(), payload);
    console.log(response, 'all crypto response');
    return response;
  } catch (err) {
    console.log(err, 'all crypto error');
    return err;
  }
};
export const getDepositAddressService = async payload => {
  try {
    const response = await api.get(endpoint.getDepositAddress(payload));
    console.log(response, 'getDepositAddress response');
    return response;
  } catch (err) {
    console.log(err, 'getDepositAddress error');
    return err;
  }
};
export const withdrawCryptoService = async payload => {
  try {
    const response = await api.post(endpoint.withdrawCrypto(), payload);
    console.log(response, 'withdrawCrypto response');
    return response;
  } catch (err) {
    console.log(err, 'withdrawCrypto error');
    return err;
  }
};
