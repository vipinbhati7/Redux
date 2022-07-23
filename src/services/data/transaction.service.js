import axios from 'axios';
import api from '../api';
import endpoint from '../endpoint';

export const addTransactionService = async () => {
  try {
    const response = await axios.get(endpoint.addTransaction());
    console.log(response, 'resTransaction');
    return response;
  } catch (err) {
    console.log(err, 'doTransaction error');
    return err;
  }
};
