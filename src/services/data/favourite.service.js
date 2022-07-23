import api from '../api';
import endpoint from '../endpoint';

export const getFavouritesService = async () => {
  try {
    const response = await api.get(endpoint.getAllFavourites());
    return response;
  } catch (err) {
    console.log(err, 'error');
    return err;
  }
};
export const addFavouriteService = async payload => {
  console.log(api, 'apiiiii');
  try {
    const response = await api.post(endpoint.addFouvrite(), payload);
    console.log('Ivadded fav');
    console.log('add fav============', response);
    return response.data;
  } catch (err) {
    console.log(err, 'fav error');
    return err;
  }
};
export const deleteFavouriteService = async payload => {
  try {
    const response = await api.delete(endpoint.deleteFavourite(payload));
    return response.data;
  } catch (err) {
    console.log(err, 'error');
    return err;
  }
};
